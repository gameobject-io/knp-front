// Import
import { useEffect, useState } from "react";
import classNames from "classnames/bind";

// CSS
import styles from "./CategoryCard.module.scss";
const cx = classNames.bind(styles);

// Store
import { useStore } from "@nanostores/react";
import { storeTags } from "store/store";

interface Props {
  data: category;
}

export function CategoryCard({ data }: Props) {
  const [color, setColor] = useState("");
  const tags = useStore(storeTags);

  useEffect(() => {
    setColor(
      tags.filter((tagItem) => String(tagItem.id) === String(data.legendId))[0]
        .color
    );
  }, [tags]);

  return (
    <div className={cx("card")}>
      <div className={cx("legend")} style={{ backgroundColor: color }}></div>
      <figure className={cx("prd-image")}>
        <div className={cx("image-box")}>
          <div className={cx("color")} style={{ backgroundColor: color }}></div>
          <img className={cx("image")} src="/images/fabric-icon.png" />
        </div>
        <figcaption className={cx("caption")}>{data.categoryName}</figcaption>
      </figure>
    </div>
  );
}
