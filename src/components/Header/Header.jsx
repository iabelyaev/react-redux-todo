import React from 'react';

import Input from 'components/Input';

import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <h1 className={s.title}>todos</h1>
      <Input />
    </header>
  );
};

export default Header;
