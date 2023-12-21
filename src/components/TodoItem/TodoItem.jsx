import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { string, number, bool } from 'prop-types';
import cx from 'classnames';

import { deleteTodo, editTodo, toggleTodo } from 'reducer/todos';

import s from './TodoItem.module.scss';

const TodoItem = ({ id, completed, text }) => {
  const dispatch = useDispatch();
  const [isCheck, setIsCheck] = useState(false);
  const [title, setTitle] = useState('');
  const [isEditTodo, setIsEditTodo] = useState(false);

  const handleToggleTodo = () => {
    dispatch(toggleTodo(id));
    setIsCheck(!isCheck);
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = () => {
    if (title.trim() === '') {
      handleDeleteTodo(id);
    }

    dispatch(editTodo({ todoId: id, todoValue: title }));
  };

  const handleDoubleClick = () => {
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
    setIsCheck(completed);
  }, [completed]);

  return (
    <li className={s.item} data-id={id}>
      <label>
        <input
          className={cx('visually-hidden', s.input)}
          type="checkbox"
          onChange={handleToggleTodo}
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
      <button className={s.button} type="button" onClick={handleDeleteTodo} />
    </li>
  );
};

TodoItem.propTypes = {
  text: string.isRequired,
  completed: bool.isRequired,
  id: number.isRequired,
};

export default TodoItem;
