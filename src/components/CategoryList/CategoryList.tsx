// Import
import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { categoryManager } from "service/categoryManager";

// Components
import { CategoryCard } from "./CategoryCard";
import { Loading } from "components/Loading/Loading";

// CSS
import styles from "./CategoryList.module.scss";
const cx = classNames.bind(styles);

// Store
import { useStore } from "@nanostores/react";
import {
  storeCategory,
  storeFiltering,
  storeHost,
  storeLoading,
  storeModal,
  storeTags,
} from "../../store/store";

interface Props {}

export function CategoryList({}: Props) {
  const filtering = useStore(storeFiltering);
  const loading = useStore(storeLoading);
  const host = useStore(storeHost);
  const tags = useStore(storeTags);

  const dataHandler = (data: category[]) => {
    storeCategory.set(data);
  };

  useEffect(() => {
    categoryManager({
      api: `${host}/apis/v1/fabric-categories`,
      handler: dataHandler,
    });
  }, []);

  return (
    <>
      <div className={cx("category")}>
        <button
          type="button"
          className={cx("btn-color-board")}
          onClick={() => {
            storeModal.set(true);
          }}
        >
          NOTICE
        </button>
        {loading ? (
          <div className={cx("loading")}>
            <Loading />
          </div>
        ) : filtering.length <= 0 ? (
          <div className={cx("empty")}>일치 하는 검색 결과가 없습니다</div>
        ) : (
          <ul className={cx("list")}>
            {filtering?.map((item, index) => {
              return (
                <li key={index} className={cx("item")}>
                  <a
                    href={`/categoryView/?categoryId=${item.id}&categoryName=${item.categoryName}&legend=${item.legendId}`}
                    className={cx("link")}
                  >
                    <CategoryCard data={item} />
                  </a>
                </li>
              );
            })}
          </ul>
        )}
        <div className={cx("legend")}>
          {tags.map((item, index) => {
            return (
              <dl className={cx("legend-item")} key={index}>
                <dt
                  className={cx("tag-name")}
                  style={{ backgroundColor: item.color }}
                ></dt>
                <dd className={cx("tag-deskription")}>{item.legendName}</dd>
              </dl>
            );
          })}
        </div>
      </div>
    </>
  );
}
