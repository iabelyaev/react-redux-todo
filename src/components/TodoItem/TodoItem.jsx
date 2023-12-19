import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { string, shape, number, bool } from 'prop-types';
import cx from 'classnames';

import s from './TodoItem.module.scss';
import { toggleTodo } from 'reducer/todos';

const TodoItem = ({ task, text }) => {
  const dispatch = useDispatch();
  const [isCheck, setIsCheck] = useState(false);

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
    setIsCheck(!isCheck);
  };

  return (
    <li className={s.item} data-id={task.id}>
      <label>
        <input
          className={cx('visually-hidden', s.input)}
          type="checkbox"
          onChange={() => handleToggleTodo(task.id)}
          checked={isCheck}
        />
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
