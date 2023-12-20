export const localStorageStore = (store) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem('todos', JSON.stringify(store.getState()));
  return result;
};

export const preLoadState = () => {
  if (localStorage.getItem('todos') !== null) {
    return JSON.parse(localStorage.getItem('todos'));
  }
};
