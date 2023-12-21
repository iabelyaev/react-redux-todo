import React from 'react';
import { useSelector } from 'react-redux';

import { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } from 'constants/index';

import TodoItem from 'components/TodoItem';
import Footer from 'components/Footer';
import ToggleTodo from 'components/ToggleTodo';

import s from './Main.module.scss';

const Main = () => {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters.filter);
  const getVisibleTodos = (todosArr, filter) => {
    switch (filter) {
      case SHOW_ALL:
        return todosArr;
      case SHOW_ACTIVE:
        return todosArr.filter((todo) => !todo.completed);
      case SHOW_COMPLETED:
        return todosArr.filter((todo) => todo.completed);
    }
  };

  const visibleTodoList = getVisibleTodos(todos, filters);

  return (
    <section className={s.todoApp}>
      <ToggleTodo />

      <ul className={s.list}>
        {visibleTodoList.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>

      <Footer />
    </section>
  );
};

export default Main;
