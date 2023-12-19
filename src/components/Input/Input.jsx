import React from 'react';

import s from './Input.module.scss';

const Input = () => {
  return (
    <>
      <input
        className={s.input}
        type="text"
        placeholder="What needs to be done?"
      />
    </>
  );
};

export default Input;
