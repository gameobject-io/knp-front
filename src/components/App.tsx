// Import
import { useEffect, useState } from "react";
import classNames from "classnames/bind";

// Components
import { AppHeader } from "./AppHeader/AppHeader";
import { CategoryList } from "./CategoryList/CategoryList";
import { CategoryView } from "./CategoryView/CategoryView";
import { AppFooter } from "./AppFooter/AppFooter";
import { Modal } from "./Modal/Modal";
import { categoryManager } from "service/categoryManager";
import { Search } from "./Search/Search";
import { ProductModal } from "./Modal/ProductModal";

// CSS
import styles from "./App.module.scss";

// Store
import { useStore } from "@nanostores/react";
import { storeCategory, storeData, storeFilter } from "../store/store";

const cx = classNames.bind(styles);

interface Props {
  page: string;
}

export function App({ page }: Props) {
  const filterHandler = (key: string) => {
    storeFilter.set(key);
  };

  return (
    <>
      <div className={cx("container")}>
        <AppHeader />
        <div className={cx("content")}>
          {page === "main" && <CategoryList />}
          {page === "categoryView" && <CategoryView />}
        </div>
        <AppFooter />
      </div>
    </>
  );
}
