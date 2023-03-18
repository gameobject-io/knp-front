// Import
import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { Audio, RotatingLines } from "react-loader-spinner";

// CSS
import styles from "./Loading.module.scss";
const cx = classNames.bind(styles);

interface Props {}

export function Loading({}: Props) {
  return (
    <div className={cx("loading")}>
      <RotatingLines
        strokeColor="#7c94f2"
        strokeWidth="3"
        animationDuration="0.75"
        width="70"
        visible={true}
      />
    </div>
  );
}
