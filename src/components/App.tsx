// Import
import classNames from "classnames/bind";

// Components
import { AppHeader } from "./AppHeader/AppHeader";
import { CategoryList } from "./CategoryList/CategoryList";
import { CategoryView } from "./CategoryView/CategoryView";
import { AppFooter } from "./AppFooter/AppFooter";

// CSS
import styles from "./App.module.scss";
import { Modal } from "./Modal/Modal";

// Store
import { storeModal } from "store/store";
import { useStore } from "@nanostores/react";

const cx = classNames.bind(styles);

interface Props {
  page: string;
}

export function App({ page }: Props) {
  const modal = useStore(storeModal);

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
