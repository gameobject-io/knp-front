// Import
import classNames from "classnames/bind";
import { categoryManager } from "service/categoryManager";

// Components
import { AppHeader } from "./AppHeader/AppHeader";
import { CategoryList } from "./CategoryList/CategoryList";
import { CategoryView } from "./CategoryView/CategoryView";
import { AppFooter } from "./AppFooter/AppFooter";

// CSS
import styles from "./App.module.scss";
import { Modal } from "./Modal/Modal";

// Store
import { storeHost, storeModal, storeTags } from "store/store";
import { useStore } from "@nanostores/react";
import { useEffect } from "react";

const cx = classNames.bind(styles);

interface Props {
  page: string;
}

export function App({ page }: Props) {
  const modal = useStore(storeModal);
  const host = useStore(storeHost);
  const tags = useStore(storeTags);

  const tagHandler = (data: any) => {
    storeTags.set(data);
  };

  useEffect(() => {
    categoryManager({
      api: `${host}/apis/v1/fabric-category-legends`,
      handler: tagHandler,
    });
  }, []);

  return (
    <>
      {modal && <Modal />}
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
