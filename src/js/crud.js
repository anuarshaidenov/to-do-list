import toDoList from './listView.js';

const addInput = document.getElementById('add-input');

const addHandler = (e) => {
  e.preventDefault();
  toDoList.addTask(addInput.value);
  addInput.value = '';
};

export default addHandler;
