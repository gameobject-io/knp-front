// Import
import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import queryString from "query-string";
import { categoryManager } from "service/categoryManager";

// Components

// CSS
import styles from "./CategoryView.module.scss";
import { ProductModal } from "components/Modal/ProductModal";
const cx = classNames.bind(styles);

// Store
import { useStore } from "@nanostores/react";
import { storeHost } from "store/store";

interface Props {}

export function CategoryView({}: Props) {
  const [data, setData] = useState<fabricData[] | null>(null);
  const [legend, setLegend] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [selectData, setSelectData] = useState<fabricData | null>(null);
  const [selectOpen, setSelectOpen] = useState(true);
  const host = useStore(storeHost);

  const dataHandler = (data: fabricData[]) => {
    setData(data);
  };

  const selectHandler = (data: fabricData | null, open: boolean) => {
    setSelectData(data);
    setSelectOpen(open);

    console.log(data);
  };

  useEffect(() => {
    const parsed = queryString.parse(location.search);
    if (parsed.legend !== undefined) {
      setLegend(String(parsed.legend).toLocaleLowerCase());
    }
    if (parsed.categoryName !== undefined) {
      setCategoryName(String(parsed.categoryName).toLocaleLowerCase());
    }
    categoryManager({
      api: `${host}/apis/v1/fabrics?categoryId=${parsed.categoryId}`,
      handler: dataHandler,
    });
  }, []);

  return (
    <>
      {selectOpen && selectData !== null && (
        <ProductModal
          data={selectData}
          selectHandler={selectHandler}
          categoryName={categoryName}
          legend={legend}
        />
      )}
      <div className={cx("category-view")}>
        <div className={cx("headline")}>
          <span className={cx("tag", legend)}></span>
          <span className={cx("title")}>{categoryName}</span>
        </div>
        <div className={cx("category-table")}>
          <table className={cx("table")}>
            <thead>
              <tr>
                <th>위치</th>
                <th>사진</th>
                <th>컬러명</th>
                <th>LOT</th>
                <th>수량</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => {
                return (
                  <tr
                    key={index}
                    onClick={() => {
                      selectHandler(item, true);
                    }}
                  >
                    <td>{item.location}</td>
                    <td>
                      <img
                        className={cx("image")}
                        src={
                          item.photoPath === "/images/fabrics/null"
                            ? "/images/fabric-icon.png"
                            : `${host}${item.photoPath}`
                        }
                      />
                    </td>
                    <td>{item.color}</td>
                    <td>{item.lot}</td>
                    <td>{item.quantity}</td>
                    <td>{item.remark}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
