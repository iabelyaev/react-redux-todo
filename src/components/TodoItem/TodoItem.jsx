import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { string, shape, number, bool } from 'prop-types';
import cx from 'classnames';

import { deleteTodo, editTodo, toggleTodo } from 'reducer/todos';

import s from './TodoItem.module.scss';

const TodoItem = ({ todo, text }) => {
  const dispatch = useDispatch();
  const [isCheck, setIsCheck] = useState(false);
  const [title, setTitle] = useState('');
  const [isEditTodo, setIsEditTodo] = useState(false);
  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
    setIsCheck(!isCheck);
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = () => {
    if (title.trim() === '') {
      return;
    }

    dispatch(editTodo({ todoId: todo.id, todoValue: title }));
  };

  const handleDoubleClick = () => {
    if (todo.completed) {
      return;
    }

    setIsEditTodo(true);
  };

  const handleBlurEdit = () => {
    handleEditTodo();
    setIsEditTodo(false);
  };

  const handleEditTodoValue = (e) => {
    setTitle(e.target.value);
  };

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleEditTodo();
      setIsEditTodo(false);
    }
  };

  useEffect(() => {
    setIsCheck(todo.completed);
  }, [todo]);

  return (
    <li className={s.item} data-id={todo.id}>
      <label>
        <input
          className={cx('visually-hidden', s.input)}
          type="checkbox"
          onChange={() => handleToggleTodo(todo.id)}
          checked={isCheck}
        />
        <span></span>
      </label>
      {isEditTodo ? (
        <input
          className={s.inputEdit}
          type="text"
          onChange={handleEditTodoValue}
          onBlur={handleBlurEdit}
          onKeyDown={handleEnterPress}
          value={title}
          autoFocus
        />
      ) : (
        <span
          className={cx(s.text, { [s.textCheck]: isCheck })}
          onDoubleClick={handleDoubleClick}>
          {text}
        </span>
      )}
      <button
        className={s.button}
        type="button"
        onClick={() => handleDeleteTodo(todo.id)}
      />
    </li>
  );
};

TodoItem.propTypes = {
  text: string,
  todo: shape({
    id: number,
    text: string,
    completed: bool,
  }).isRequired,
};

export default TodoItem;
