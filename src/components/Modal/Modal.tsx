// Import
import classNames from "classnames/bind";

// CSS
import styles from "./Modal.module.scss";
const cx = classNames.bind(styles);

// Store
import { storeModal } from "store/store";

interface Props {}

export function Modal({}: Props) {
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
            <img className={cx("image")} src="/images/sample.png" />
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
