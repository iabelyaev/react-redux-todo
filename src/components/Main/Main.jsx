import React from 'react';

import s from './Main.module.scss';
import { useSelector } from 'react-redux';

const Main = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <section className={s.todoApp}>
      <ul className={s.list}>
        {todos.map((todo) => (
          <li key={todo.id} data-id={todo.id}>
            <p>{todo.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Main;
