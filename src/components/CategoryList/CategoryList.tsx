// Import
import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { categoryManager } from "service/categoryManager";

// Components
import { CategoryCard } from "./CategoryCard";

// CSS
import styles from "./CategoryList.module.scss";
const cx = classNames.bind(styles);

// Store
import { useStore } from "@nanostores/react";
import { storeCategory, storeData, storeFilter } from "../../store/store";

interface Props {}

export function CategoryList({}: Props) {
  const category = useStore(storeCategory);

  const dataHandler = (data: category[]) => {
    storeCategory.set(data);
    console.log(data);
  };

  useEffect(() => {
    const host = "http://leejuesongtest06.cafe24app.com";
    categoryManager({
      api: `${host}/apis/v1/fabric-categories`,
      handler: dataHandler,
    });
  }, []);

  // useEffect(() => {
  //   // setCategoryList(data);
  //   // console.log()
  // }, [data]);

  // const dataHandler = (data: category[]) => {
  //   if (data !== null) {
  //     setData(data);
  //   }
  // };

  // const dataFiltering = () => {
  //   const defaultData = data?.filter(
  //     (item) =>
  //       item.category.charAt(0).toLocaleLowerCase() ===
  //       filter.toLocaleLowerCase()
  //   );
  //   setFilterData(defaultData);
  // };

  // const dataSearchFiltering = () => {
  //   const defaultData = data?.filter(
  //     (item) =>
  //       item.category.charAt(0).toLocaleLowerCase() ===
  //       filter.toLocaleLowerCase()
  //   );
  //   console.log(defaultData);
  // };

  // useEffect(() => {
  //   categoryManager({ api: "/data/data.json", handler: dataHandler });
  // }, []);

  // useEffect(() => {
  //   dataFiltering();
  // }, [filter]);

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
        <button type="button" className={cx("btn-color-board")}>
          COLOR TABLE
        </button>
        <ul className={cx("list")}>
          {category?.map((item, index) => {
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
      </div>
    </>
  );
}
