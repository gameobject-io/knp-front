// Import
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

// Components
import { Search } from 'components/Search/Search';

// CSS
import styles from './AppHeader.module.scss';
const cx = classNames.bind(styles);

interface Props {}

export function AppHeader({}: Props) {
  return (
    <>
      <header className={cx('header')}>
        <h1 className={cx('logo')}>
          <a href="/" className={cx('knp-logo')}>
            <img
              className={cx('image')}
              src="/images/knp-logo.png"
              alt="k&p"
              title="k&p"
            />
          </a>
        </h1>
        <Search />
        <div className={cx('btn-color-board')}>컬러표</div>
        <div className={cx('login')}>
          <a href="#" className={cx('btn-login')}>
            Admin Login
          </a>
        </div>
      </header>
    </>
  );
}
