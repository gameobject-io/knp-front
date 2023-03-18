// Import
import { ChangeEvent, useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";

// CSS
import styles from "./Search.module.scss";
const cx = classNames.bind(styles);

// Store
import { useStore } from "@nanostores/react";
import { storeCategory, storeFiltering, storeLoading } from "../../store/store";
import queryString from "query-string";

interface Props {}

let timer: any = false;
let scrollStep: number = 12;
let scrollCount: number = 1;

export function Search({}: Props) {
  const [searchValue, setSearchValue] = useState("");
  const category = useStore(storeCategory);
  const filtering = useStore(storeFiltering);
  const inputRef: any = useRef(null);

  const filterHandler = (searchText: string) => {
    storeLoading.set(true);
    scrollCount = 1;

    const filteredItems = category?.filter((item) =>
      item.categoryName.toLowerCase().startsWith(searchText)
    );
    setSearchValue(searchText);

    //이전에 이벤트가 발생했다면
    if (timer) {
      clearTimeout(timer); //이전 이벤트를 지운다.
    }
    timer = setTimeout(() => {
      storeFiltering.set(indexFilter(filteredItems, scrollStep * scrollCount));
      storeLoading.set(false);
    }, 500);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchText = e.currentTarget.value.toLowerCase();
    filterHandler(searchText);
  };

  const activeEnter = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      activeButton();
    }
  };

  const activeButton = () => {
    window.location.href = `/?searchValue=${searchValue}`;
  };

  const indexFilter = (data: category[], count: number) => {
    return data.filter((item, index) => index < count);
  };

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    scrollCount++;
    if (Math.ceil(scrollTop) + clientHeight >= scrollHeight) {
      // 페이지 끝에 도달하면 추가 데이터를 받아온다
      if (searchValue === "") {
        storeFiltering.set(indexFilter(category, scrollStep * scrollCount));
      } else {
        const filteredItems = category?.filter((item) =>
          item.categoryName.toLowerCase().startsWith(searchValue)
        );
        storeFiltering.set(
          indexFilter(filteredItems, scrollStep * scrollCount)
        );
      }
    }
  };

  useEffect(() => {
    // scroll event listener 등록
    window.addEventListener("scroll", handleScroll);
    return () => {
      // scroll event listener 해제
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    const parsed = queryString.parse(location.search);
    if (parsed.searchValue !== undefined) {
      filterHandler(String(parsed.searchValue).toLocaleLowerCase());
      if (inputRef.current !== null) {
        inputRef.current.focus();
      }
    } else {
      setTimeout(() => {
        storeFiltering.set(indexFilter(category, scrollStep * scrollCount));
        storeLoading.set(false);
      }, 500);
    }
  }, [category]);

  return (
    <>
      <div className={cx("search")}>
        <input
          type="text"
          className={cx("search-input")}
          onInput={onChange}
          onKeyDown={activeEnter}
          value={searchValue}
          ref={inputRef}
        />
        <button
          type="button"
          className={cx("btn-search")}
          onClick={activeButton}
        >
          <i className={cx("icon")}></i>
        </button>
      </div>
    </>
  );
}
