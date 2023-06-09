// Import
import { useEffect, useState } from "react";
import classNames from "classnames/bind";

// Components
import { Search } from "components/Search/Search";

// CSS
import styles from "./AppHeader.module.scss";
const cx = classNames.bind(styles);

// Store
import { useStore } from "@nanostores/react";
import { storeHost } from "store/store";

interface Props {}

export function AppHeader({}: Props) {
  const host = useStore(storeHost);
  return (
    <>
      <header className={cx("header")}>
        <div className={cx("headline")}>
          <h1 className={cx("logo")}>
            <a href="/" className={cx("knp-logo")}>
              <img
                className={cx("image")}
                src="/images/knp-logo.png"
                alt="k&p"
                title="k&p"
              />
            </a>
          </h1>
          <p className={cx("description")}>
            <span className={cx("txt")}>K&P의 제공하는 원사 검색 해보세요</span>
            <span className={cx("txt", "small")}>
              Please search for K&P offered yarns.
            </span>
          </p>
        </div>
        <div className={cx("login")}>
          <a href={`/admin`} className={cx("btn-login")}>
            Admin Login
          </a>
        </div>
        <Search />
      </header>
    </>
  );
}
