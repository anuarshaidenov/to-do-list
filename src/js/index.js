import toDoList from './listView.js';
import '../styles/main.css';

const addForm = document.getElementById('add-form');
const addInput = document.getElementById('add-input');

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  toDoList.addTask(addInput.value);
});

window.addEventListener('load', () => {
  toDoList.init();
});
