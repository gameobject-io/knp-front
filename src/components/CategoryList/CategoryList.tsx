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
} from "../../store/store";

interface Props {}

export function CategoryList({}: Props) {
  const filtering = useStore(storeFiltering);
  const loading = useStore(storeLoading);
  const host = useStore(storeHost);
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
        <div className={cx("legend")}>
          <dl className={cx("legend-item")}>
            <dt className={cx("tag-name", "viscose")}></dt>
            <dd className={cx("tag-deskription")}>VISCOSE</dd>
          </dl>
          <dl className={cx("legend-item")}>
            <dt className={cx("tag-name", "cotton")}></dt>
            <dd className={cx("tag-deskription")}>COTTON</dd>
          </dl>
          <dl className={cx("legend-item")}>
            <dt className={cx("tag-name", "linen")}></dt>
            <dd className={cx("tag-deskription")}>LINEN</dd>
          </dl>
        </div>
        <button
          type="button"
          className={cx("btn-color-board")}
          onClick={() => {
            storeModal.set(true);
          }}
        >
          COLOR TABLE
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
                    href={`/categoryView/?categoryId=${item.id}&categoryName=${item.categoryName}&legend=${item.legend}`}
                    className={cx("link")}
                  >
                    <CategoryCard data={item} />
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}
