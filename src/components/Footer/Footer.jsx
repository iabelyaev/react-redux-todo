import React from 'react';
import { useSelector } from 'react-redux';

import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from 'constants/index';

import s from './Footer.module.scss';
import Link from '../Link';

const Footer = () => {
  const todos = useSelector((state) => state.todos);
  const count = todos.reduce((acc, it) => {
    return !it.completed ? acc : acc + 1;
  }, 0);
  return (
    <>
      {todos.length > 0 ? (
        <footer className={s.footer}>
          <span className={s.count}>
            <strong>{count}</strong> {count === 1 ? 'item' : 'items'} left
          </span>

          <ul className={s.list}>
            {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map((filter) => (
              <li key={filter}>
                <Link filter={filter} id={filter} />
              </li>
            ))}
          </ul>

          <button className={s.button} type="button">
            Clear Completed
          </button>
        </footer>
      ) : null}
    </>
  );
};

export default Footer;
