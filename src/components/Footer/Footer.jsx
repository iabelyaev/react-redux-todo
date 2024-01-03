import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from 'constants/index';
import { setFilter } from 'reducer/filters';
import { clearCompleted } from 'reducer/todos';

import Link from 'components/Link';

import s from './Footer.module.scss';

const Footer = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters.filter);
  const [isActive, setIsActive] = useState(filters);
  const hasTodoCompleted = todos.some((todo) => todo.completed >= 1);

  const count = todos.reduce((acc, it) => {
    return !it.completed ? acc + 1 : acc;
  }, 0);

  const handleChangeFilter = (e) => {
    dispatch(setFilter(e.target.id));
    setIsActive(e.target.id);
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  return (
    <>
      {todos.length > 0 && (
        <footer className={s.footer}>
          <span className={s.count}>
            <strong>{count}</strong> {count === 1 ? 'item' : 'items'} left
          </span>

          <ul className={s.list}>
            {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map((filter) => (
              <li key={filter}>
                <Link
                  filter={filter}
                  onClick={handleChangeFilter}
                  id={filter}
                  isActive={isActive}
                />
              </li>
            ))}
          </ul>

          {hasTodoCompleted && (
            <button
              className={s.button}
              type="button"
              onClick={handleClearCompleted}>
              Clear Completed
            </button>
          )}
        </footer>
      )}
    </>
  );
};

export default Footer;
