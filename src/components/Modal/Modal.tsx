// Import
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

// Components
import { Search } from 'components/Search/Search';

// CSS
import styles from './Modal.module.scss';
const cx = classNames.bind(styles);

interface Props {}

export function Modal({}: Props) {
  return (
    <>
      <div className={cx('modal')}>
        <div className={cx('modal-content')}>
          <img
            className={cx('image')}
            src="http://leejuesongtest05.cafe24app.com/images/155297434a7ed60e7f1c2a2dbd2058ba.png"
          />
        </div>
        <div className={cx('dim')}></div>
      </div>
    </>
  );
}
