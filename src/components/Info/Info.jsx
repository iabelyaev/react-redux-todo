import React from 'react';

import s from './Info.module.scss';

const Info = () => {
  return (
    <footer className={s.info}>
      <p className={s.edit}>Double-click to edit a todo</p>
      <p>
        Created by{' '}
        <a href="https://github.com/yaroslavbelyaev">Yaroslav Belyaev</a>
      </p>
    </footer>
  );
};

export default Info;
