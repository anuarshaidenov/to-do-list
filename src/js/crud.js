import toDoList from './listView.js';

const addInput = document.getElementById('add-input');

// Add a new task to the list and clear the input field.
export const addHandler = (e) => {
  e.preventDefault();
  toDoList.addTask(addInput.value);
  addInput.value = '';
};

// Remove completed tasks from the list.
export const clearCompletedHandler = () => {
  toDoList.clearCompletedTasks();
};
