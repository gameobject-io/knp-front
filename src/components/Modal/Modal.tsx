// Import
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { categoryManager } from "service/categoryManager";

// CSS
import styles from "./Modal.module.scss";
const cx = classNames.bind(styles);

// Store
import { storeModal, storeHost } from "store/store";
import { useStore } from "@nanostores/react";

interface Props {}

export function Modal({}: Props) {
  const [colorTable, setColorTable] = useState<colorTable | null>(null);
  const host = useStore(storeHost);

  const colorTableDataHanlder = (data: any) => {
    setColorTable(data);
  };

  useEffect(() => {
    categoryManager({
      api: `${host}/apis/v1/color-tables/expose`,
      handler: colorTableDataHanlder,
    });
  }, []);

  return (
    <>
      <div className={cx("modal")}>
        <div className={cx("modal-content")}>
          <button
            type="button"
            className={cx("btn-close")}
            onClick={() => {
              storeModal.set(false);
            }}
          >
            Close
          </button>
          <figure className={cx("figure")}>
            {colorTable !== null && (
              <img
                className={cx("image")}
                src={`${host}${colorTable?.photoPath}`}
              />
            )}
          </figure>
        </div>
        <div
          className={cx("dim")}
          onClick={() => {
            storeModal.set(false);
          }}
        ></div>
      </div>
    </>
  );
}
