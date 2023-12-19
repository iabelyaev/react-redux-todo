import React from 'react';
import { useSelector } from 'react-redux';

import TodoItem from '../TodoItem';

import s from './Main.module.scss';

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
