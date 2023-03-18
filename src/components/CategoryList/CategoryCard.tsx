// Import
import { useEffect, useState } from "react";
import classNames from "classnames/bind";

// CSS
import styles from "./CategoryCard.module.scss";
const cx = classNames.bind(styles);

interface Props {
  data: category;
}

export function CategoryCard({ data }: Props) {
  return (
    <div className={cx("card")}>
      <div className={cx("legend")} data-legend={data.legend}></div>
      <figure className={cx("prd-image")}>
        <div className={cx("image-box")} data-legend={data.legend}>
          <img className={cx("image")} src="/images/fabric-icon.png" />
        </div>
        <figcaption className={cx("caption")}>{data.categoryName}</figcaption>
      </figure>
    </div>
  );
}
