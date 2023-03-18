// Import
import { useEffect, useState } from "react";
import classNames from "classnames/bind";

// Components
import { Search } from "components/Search/Search";

// CSS
import styles from "./AppHeader.module.scss";
const cx = classNames.bind(styles);

interface Props {}

export function AppHeader({}: Props) {
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
            K&P의 제공하는 원단을 검색 해보세요
          </p>
          <p className={cx("description", "small")}>
            Please search for the fabrics offered by K&P.
          </p>
        </div>
        <Search />
        <div className={cx("login")}>
          <a href="#" className={cx("btn-login")}>
            Admin Login
          </a>
        </div>

        {/* <h1 className={cx('logo')}>
          <a href="/" className={cx('knp-logo')}>
            <img
              className={cx('image')}
              src="/images/knp-logo.png"
              alt="k&p"
              title="k&p"
            />
          </a>
        </h1>
        <div className={cx('btn-color-board')}>컬러표</div> */}
      </header>
    </>
  );
}
