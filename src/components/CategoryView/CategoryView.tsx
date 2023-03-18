// Import
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { categoryManager } from 'service/categoryManager';

// Components

// CSS
import styles from './CategoryView.module.scss';
const cx = classNames.bind(styles);

interface Props {}

export function CategoryView({}: Props) {
  const [data, setData] = useState<category[] | null>(null);

  const dataHandler = (data: category[]) => {
    if (data !== null) {
      setData(data);
    }
  };

  useEffect(() => {
    categoryManager({ api: '/data/data.json', handler: dataHandler });
  }, []);

  return (
    <>
      <div className={cx('category-view')}>
        <div className={cx('headline')}>
          <span className={cx('tag', 'viscose')}>TAG</span>
          <span className={cx('title')}>CLASSIC 1/35</span>
        </div>
        <div className={cx('category-table')}>
          <table className={cx('table')}>
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
              <tr>
                <td>R3</td>
                <td>
                  <img
                    className={cx('image')}
                    src="http://leejuesongtest05.cafe24app.com/images/155297434a7ed60e7f1c2a2dbd2058ba.png"
                  />
                </td>
                <td>IV</td>
                <td>R3IV22-325544</td>
                <td>44</td>
                <td>Temp</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
