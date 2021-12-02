import toDoList from './listView.js';
import '../styles/main.css';
import { addHandler, clearCompletedHandler } from './crud.js';

const addForm = document.getElementById('add-form');
const clearBtn = document.getElementById('btn-clear');

addForm.addEventListener('submit', addHandler);
clearBtn.addEventListener('click', clearCompletedHandler);

window.addEventListener('load', () => {
  toDoList.init();
});
