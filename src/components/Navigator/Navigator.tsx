// Import
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

// CSS
import styles from './Navigator.module.scss';
const cx = classNames.bind(styles);

// Store
import { useStore } from '@nanostores/react';
import { storeFilter } from '../../store/store';

interface Props {
  filterHandler: (key: string) => void;
}

export function Navigator({ filterHandler }: Props) {
  const navigator = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  const filter = useStore(storeFilter);

  return (
    <>
      <div className={cx('navigator')}>
        <ul className={cx('list')}>
          {navigator.map((item, index) => {
            return (
              <li
                key={index}
                className={cx('item')}
                data-on={filter === item}
                onClick={() => {
                  filterHandler(item);
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
