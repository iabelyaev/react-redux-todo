import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { checkAllTodos } from 'reducer/todos';

import s from './ToggleTodo.module.scss';

const ToggleTodo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const hasEventEvery = todos.every((task) => task.completed);
  const [isCheck, setIsCheck] = useState(false);
  const handleToggleAll = () => {
    dispatch(checkAllTodos());
    setIsCheck(!isCheck);
  };

  useEffect(() => {
    setIsCheck(isCheck);
  }, [isCheck]);

  return (
    <>
      <input
        type="checkbox"
        className={s.input}
        onChange={handleToggleAll}
        checked={hasEventEvery}
        id="toggleAll"
      />
      <label htmlFor="toggleAll" />
    </>
  );
};

export default ToggleTodo;
