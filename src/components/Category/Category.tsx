// Import
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { categoryManager } from 'service/categoryManager';

// Components
import { CategoryCard } from './CategoryCard';

// CSS
import styles from './Category.module.scss';
const cx = classNames.bind(styles);

// Store
import { useStore } from '@nanostores/react';
import { storeFilter } from '../../store/store';

interface Props {}

export function Category({}: Props) {
  const [data, setData] = useState<category[] | null>(null);
  const [filterData, setFilterData] = useState<category[]>();
  const filter = useStore(storeFilter);

  const dataHandler = (data: category[]) => {
    if (data !== null) {
      setData(data);
    }
  };

  const dataFiltering = () => {
    const defaultData = data?.filter(
      (item) =>
        item.category.charAt(0).toLocaleLowerCase() ===
        filter.toLocaleLowerCase()
    );
    setFilterData(defaultData);
  };

  const dataSearchFiltering = () => {
    const defaultData = data?.filter(
      (item) =>
        item.category.charAt(0).toLocaleLowerCase() ===
        filter.toLocaleLowerCase()
    );
    console.log(defaultData);
  };

  useEffect(() => {
    categoryManager({ api: '/data/data.json', handler: dataHandler });
  }, []);

  useEffect(() => {
    dataFiltering();
  }, [filter]);

  return (
    <>
      <div className={cx('category')}>
        <div className={cx('legend')}>
          <dl className={cx('legend-item')}>
            <dt className={cx('tag-name', 'viscose')}></dt>
            <dd className={cx('tag-deskription')}>VISCOSE</dd>
          </dl>
          <dl className={cx('legend-item')}>
            <dt className={cx('tag-name', 'cotton')}></dt>
            <dd className={cx('tag-deskription')}>COTTON</dd>
          </dl>
          <dl className={cx('legend-item')}>
            <dt className={cx('tag-name', 'linen')}></dt>
            <dd className={cx('tag-deskription')}>LINEN</dd>
          </dl>
        </div>
        <ul className={cx('list')}>
          {filterData !== undefined
            ? filterData?.map((item, index) => {
                return (
                  <li key={index} className={cx('item')}>
                    <CategoryCard data={item} />
                  </li>
                );
              })
            : data?.map((item, index) => {
                return (
                  <li key={index} className={cx('item')}>
                    <CategoryCard data={item} />
                  </li>
                );
              })}
        </ul>
      </div>
    </>
  );
}
