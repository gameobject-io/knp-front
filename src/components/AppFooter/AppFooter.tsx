// Import
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

// Components
import { Search } from 'components/Search/Search';

// CSS
import styles from './AppFooter.module.scss';
const cx = classNames.bind(styles);

interface Props {}

export function AppFooter({}: Props) {
  return (
    <>
      <footer className={cx('footer')}>
        <p className={cx('copy')}>Copyright &copy;k&p. All Rights Reserved.</p>
      </footer>
    </>
  );
}
