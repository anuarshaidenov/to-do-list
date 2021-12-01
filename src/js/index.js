import toDoList from './listView.js';
import '../styles/main.css';
import addHandler from './crud.js';

const addForm = document.getElementById('add-form');

addForm.addEventListener('submit', addHandler);

window.addEventListener('load', () => {
  toDoList.init();
});
