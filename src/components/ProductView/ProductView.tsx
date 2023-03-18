// Import
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

// Components

// CSS
import styles from './ProductView.module.scss';
const cx = classNames.bind(styles);

interface Props {}

export function ProductView({}: Props) {
  return (
    <>
      <div className={cx('product-view')}>
        <div className={cx('product-image')}>
          <img
            className={cx('image')}
            src="http://leejuesongtest05.cafe24app.com/images/155297434a7ed60e7f1c2a2dbd2058ba.png"
          />
        </div>
        <div className={cx('product-detail')}>
          <div className={cx('tag', 'viscose')}>TAG</div>
          <div className={cx('category')}>CLASSIC 1/35</div>
          <div className={cx('opt')}>
            <ul className={cx('list')}>
              <li className={cx('item')}>
                <span className={cx('label')}>위치</span>
                <span className={cx('value')}>R3</span>
              </li>
              <li className={cx('item')}>
                <span className={cx('label')}>컬러명</span>
                <span className={cx('value')}>IV</span>
              </li>
              <li className={cx('item')}>
                <span className={cx('label')}>LOT</span>
                <span className={cx('value')}>22-3255</span>
              </li>
              <li className={cx('item')}>
                <span className={cx('label')}>수량</span>
                <span className={cx('value')}>44</span>
              </li>
              <li className={cx('item')}>
                <span className={cx('label')}>비고</span>
                <span className={cx('value')}>비고 내용 입력</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
