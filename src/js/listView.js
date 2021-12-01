/* eslint-disable indent */
/* eslint-disable class-methods-use-this */
import ToDo from './toDo.js';

const toDoListEl = document.getElementById('to-do-list');

class ToDoList {
  #tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  #listEl;

  constructor(listEl) {
    this.#listEl = listEl;
  }

  #storeData() {
    localStorage.setItem('tasks', JSON.stringify(this.#tasks));
  }

  #getItemToChange(task) {
    const { index } = task.dataset;
    return this.#tasks.find((item) => item.index === +index);
  }

  updateTaskStatus(task) {
    const itemToChange = this.#getItemToChange(task);
    if (task.checked) {
      itemToChange.completed = true;
    } else {
      itemToChange.completed = false;
    }
    this.#storeData();
    this.#displayList();
  }

  updateTaskDescription(task) {
    const itemToChange = this.#getItemToChange(task);
    itemToChange.description = task.value;
    this.#storeData();
    this.#displayList();
  }

  addTask(task) {
    const newTask = new ToDo(task, this.#tasks.length);
    this.#tasks.push(newTask);
    this.#storeData();
    this.#displayList();
  }

  deleteTask(itemToDelete) {
    this.#tasks = this.#tasks.filter((item) => item !== itemToDelete);
    for (let i = 0; i < this.#tasks.length; i += 1) {
      this.#tasks[i].index = i;
    }
    this.#storeData();
    this.#displayList();
  }

  #generateMarkup(task) {
    return `
    <li
    class="
      main-list__item ${task.completed ? 'main-list__item--checked' : ''}"
  >
    <label
      class="main-list__label"
      ><input type="checkbox" data-index="${task.index}" ${
      task.completed ? 'checked' : ''
    } class='main-list__checkbox'
      name="to-do-${
        task.index
      }"/><input type="text" class="main-list__description" data-index="${
      task.index
    }" value="${task.description}">
    </label>
    <button class="btn btn-action btn-${task.index}" type="button">
      <ion-icon name="ellipsis-vertical-outline"></ion-icon>
    </button>
    <button class="btn btn-action btn-delete hidden" data-index="${
      task.index
    }" id="${task.index}" type="button">
      <ion-icon name="trash-outline"></ion-icon>
    </button>
  </li>
        `;
  }

  #displayList() {
    this.#listEl.innerHTML = '';
    this.#tasks.sort((a, b) => a.index - b.index);
    this.#tasks.forEach((task) => {
      const markup = this.#generateMarkup(task);
      this.#listEl.insertAdjacentHTML('beforeend', markup);
    });

    document.querySelectorAll('.btn-delete').forEach((btn) => {
      btn.addEventListener('click', () => {
        const itemToDelete = this.#getItemToChange(btn);
        this.deleteTask(itemToDelete);
      });
    });

    document.querySelectorAll('.main-list__description').forEach((item) => {
      item.addEventListener('change', () => {
        this.updateTaskDescription(item);
      });

      item.addEventListener('focus', () => {
        const { index } = item.dataset;
        const btnDel = document.getElementById(index);
        const btnOption = document.querySelector(`.btn-${index}`);
        btnOption.classList.add('hidden');
        btnDel.classList.remove('hidden');
      });
    });

    document.querySelectorAll('.main-list__checkbox').forEach((item) => {
      item.addEventListener('change', () => {
        this.updateTaskStatus(item);
      });
    });
  }

  init() {
    this.#displayList();
  }
}

const toDoList = new ToDoList(toDoListEl);

export default toDoList;
