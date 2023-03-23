// Import
import classNames from "classnames/bind";

// CSS
import styles from "./ProductModal.module.scss";
const cx = classNames.bind(styles);

// Store
import { useStore } from "@nanostores/react";
import { storeHost } from "../../store/store";

interface Props {
  data: fabricData | null;
  categoryName: string;
  legend: string;
  selectHandler: (data: fabricData | null, open: boolean) => void;
}

export function ProductModal({
  data,
  categoryName,
  legend,
  selectHandler,
}: Props) {
  const host = useStore(storeHost);

  return (
    <>
      <div className={cx("product-modal")}>
        <div className={cx("product-modal-content")}>
          <button
            type="button"
            className={cx("btn-close")}
            onClick={() => {
              selectHandler(null, false);
            }}
          >
            Close
          </button>
          <div className={cx("product-modal-scroll")}>
            <div className={cx("product-image")}>
              <img
                className={cx("image")}
                src={
                  data?.photoPath === "/images/fabrics/null"
                    ? "/images/fabric-icon.png"
                    : `${host}${data?.photoPath}`
                }
              />
            </div>
            <div className={cx("product-detail")}>
              <div className={cx("title")}>
                <div
                  className={cx("tag")}
                  style={{ backgroundColor: legend }}
                ></div>
                <div className={cx("category-name")}>{categoryName}</div>
              </div>
              <div className={cx("opt")}>
                <ul className={cx("list")}>
                  <li className={cx("item")}>
                    <span className={cx("label")}>위치</span>
                    <span className={cx("value")}>{data?.location}</span>
                  </li>
                  <li className={cx("item")}>
                    <span className={cx("label")}>컬러명</span>
                    <span className={cx("value")}>{data?.color}</span>
                  </li>
                  <li className={cx("item")}>
                    <span className={cx("label")}>LOT</span>
                    <span className={cx("value")}>{data?.lot}</span>
                  </li>
                  <li className={cx("item")}>
                    <span className={cx("label")}>수량</span>
                    <span className={cx("value")}>{data?.quantity}</span>
                  </li>
                  <li className={cx("item")}>
                    <span className={cx("label")}>비고</span>
                    <span className={cx("value")}>{data?.remark}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className={cx("dim")}
          onClick={() => {
            selectHandler(null, false);
          }}
        ></div>
      </div>
    </>
  );
}
