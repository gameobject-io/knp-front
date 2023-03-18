// Import
import { useEffect, useState } from "react";
import classNames from "classnames/bind";

// CSS
import styles from "./Search.module.scss";
const cx = classNames.bind(styles);

interface Props {}

export function Search({}: Props) {
  return (
    <>
      <div className={cx("search")}>
        <input type="text" className={cx("search-input")} />
        <button type="button" className={cx("btn-search")}>
          <i className={cx("icon")}></i>
        </button>
      </div>
    </>
  );
}
