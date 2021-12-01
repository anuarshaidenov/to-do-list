import ToDoList from './listView.js';
import '../styles/main.css';

const toDoListEl = document.getElementById('to-do-list');
const addForm = document.getElementById('add-form');

const toDoList = new ToDoList(toDoListEl);

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

window.addEventListener('load', () => {
  toDoList.displayList();
});
