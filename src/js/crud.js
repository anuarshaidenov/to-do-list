import toDoList from './listView.js';

const addInput = document.getElementById('add-input');

export const addHandler = (e) => {
  e.preventDefault();
  toDoList.addTask(addInput.value);
  addInput.value = '';
};

export const clearCompletedHandler = () => {
  toDoList.clearCompletedTasks();
};
