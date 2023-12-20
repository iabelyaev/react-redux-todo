import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from 'reducer/todos';

import s from './Input.module.scss';

const Input = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const handleAddTodo = (e) => {
    if (text.trim() === '') {
      return;
    }

    if (e.key === 'Enter') {
      dispatch(addTodo(text));
      setText('');
    }
  };

  const handleAddTodoBlur = () => {
    if (text.trim() === '') {
      return;
    }

    dispatch(addTodo(text));
    setText('');
  };

  const handleChangeInputValue = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input
        className={s.input}
        type="text"
        value={text}
        onChange={handleChangeInputValue}
        onBlur={handleAddTodoBlur}
        onKeyDown={handleAddTodo}
        placeholder="What needs to be done?"
      />
    </>
  );
};

export default Input;
