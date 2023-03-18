// Import
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

// CSS
import styles from './CategoryCard.module.scss';
const cx = classNames.bind(styles);

interface Props {
  data: category;
}

export function CategoryCard({ data }: Props) {
  return (
    <>
      <a href={`/category?id=${data.id}`} className={cx('category-card')}>
        <div className={cx('tag', data.legend)}></div>
        <div className={cx('name')}>{data.category}</div>
      </a>
    </>
  );
}
