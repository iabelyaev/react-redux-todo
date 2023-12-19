import React from 'react';

import TodoItem from '../TodoItem';

import s from './Main.module.scss';
import { useSelector } from 'react-redux';

const Main = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <section className={s.todoApp}>
      <ul className={s.list}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} task={todo} {...todo} />
        ))}
      </ul>
    </section>
  );
};

export default Main;
