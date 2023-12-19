import React from 'react';
import { string, shape, number, bool } from 'prop-types';
import cx from 'classnames';
import s from './TodoItem.module.scss';
const TodoItem = ({ task, text }) => {
  return (
    <li className={s.item} data-id={task.id}>
      <label>
        <input className={cx('visually-hidden', s.input)} type="checkbox" />
        <span></span>
      </label>
      <span className={s.text}>{text}</span>
      <button className={s.button} type="button" />
    </li>
  );
};

TodoItem.propTypes = {
  text: string,
  task: shape({
    id: number,
    text: string,
    completed: bool,
  }).isRequired,
};

export default TodoItem;
