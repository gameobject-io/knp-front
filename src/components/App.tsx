// Import
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

// Components
import { AppHeader } from './AppHeader/AppHeader';
import { Navigator } from './Navigator/Navigator';
import { Category } from './Category/Category';
import { CategoryView } from './CategoryView/CategoryView';
import { ProductView } from './ProductView/ProductView';
import { AppFooter } from './AppFooter/AppFooter';
import { Modal } from './Modal/Modal';

// CSS
import styles from './App.module.scss';

// Store
import { useStore } from '@nanostores/react';
import { storeFilter } from '../store/store';
import { categoryManager } from 'service/categoryManager';

const cx = classNames.bind(styles);

interface Props {
  page: string;
}

export function App({ page }: Props) {
  const filterHandler = (key: string) => {
    storeFilter.set(key);
  };

  return (
    <>
      {/* <Modal /> */}
      <div className={cx('container')}>
        <AppHeader />
        <div className={cx('content')}>
          {page === 'main' && (
            <>
              <div className={cx('categoryList')}>
                <Navigator filterHandler={filterHandler} />
                <Category />
              </div>
            </>
          )}
          {page === 'categoryView' && (
            <>
              <CategoryView />
            </>
          )}
          {page === 'productView' && (
            <>
              <ProductView />
            </>
          )}
        </div>
        <AppFooter />
      </div>
    </>
  );
}
