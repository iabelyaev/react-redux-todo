import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { string, shape, number, bool } from 'prop-types';
import cx from 'classnames';

import s from './TodoItem.module.scss';
import { deleteTodo, toggleTodo } from 'reducer/todos';

const TodoItem = ({ task, text }) => {
  const dispatch = useDispatch();
  const [isCheck, setIsCheck] = useState(false);

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
    setIsCheck(!isCheck);
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  useEffect(() => {
    setIsCheck(task.completed);
  }, [task]);

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
      <span className={cx(s.text, { [s.textCheck]: isCheck })}>{text}</span>
      <button
        className={s.button}
        type="button"
        onClick={() => handleDeleteTodo(task.id)}
      />
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
