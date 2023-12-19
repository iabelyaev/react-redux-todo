import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import s from './Input.module.scss';
import { addTodo } from 'reducer/todos';

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
        onKeyDown={handleAddTodo}
        placeholder="What needs to be done?"
      />
    </>
  );
};

export default Input;
