import toDoList from './listView.js';
import '../styles/main.css';
import { addHandler, clearCompletedHandler } from './crud.js';

const addForm = document.getElementById('add-form');
const clearBtn = document.getElementById('btn-clear');

// Listen to add event: Add a new task into the to do list.
addForm.addEventListener('submit', addHandler);
// Listen to clear button click event: Remove completed task from the to do list.
clearBtn.addEventListener('click', clearCompletedHandler);

// Initialize the to do list.
window.addEventListener('load', () => {
  toDoList.init();
});
