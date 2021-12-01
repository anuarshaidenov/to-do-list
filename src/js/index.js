import toDoList from './listView.js';
import '../styles/main.css';

const addForm = document.getElementById('add-form');

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

window.addEventListener('load', () => {
  toDoList.init();
});
