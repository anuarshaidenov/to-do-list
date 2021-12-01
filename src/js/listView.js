import { v4 as uuidv4 } from 'uuid';

class ToDoList {
  #tasks = JSON.parse(localStorage.getItem('tasks')) || [
    {
      description: 'wash the dishes',
      completed: false,
      index: 5,
      id: uuidv4(),
    },
    {
      description: 'complete To Do List project',
      completed: false,
      index: 2,
      id: uuidv4(),
    },
    {
      description: 'shower',
      completed: true,
      index: 3,
      id: uuidv4(),
    },
  ];

  #listEl;

  constructor(listEl) {
    this.#listEl = listEl;
  }

  #storeData() {
    localStorage.setItem('tasks', JSON.stringify(this.#tasks));
  }

  #updateTaskStatus(task) {
    const { id } = task.dataset;
    const itemToChange = this.#tasks.find((task) => task.id === id);
    if (task.checked) {
      itemToChange.completed = true;
    } else {
      itemToChange.completed = false;
    }
    this.#storeData();
    this.displayList();
  }

  displayList() {
    this.#listEl.innerHTML = '';
    this.#tasks.sort((a, b) => a.index - b.index);
    this.#tasks.forEach((task) => {
      const markup = `
          <li class="main-list__item ${
  task.completed ? 'main-list__item--checked' : ''
}">
              
              <label class="main-list__label" for="to-do-${
  task.index
}"><input type="checkbox" data-id="${task.id}" ${
  task.completed ? 'checked' : ''
} class='main-list__checkbox' name="to-do-${task.index}" id="to-do-${
  task.index
}" />${task.description}</label>
      <button class="btn btn-action" type="button"><ion-icon name="ellipsis-vertical-outline"></ion-icon></button>
          </li> 
          `;
      this.#listEl.insertAdjacentHTML('beforeend', markup);
    });

    document.querySelectorAll('.main-list__checkbox').forEach((item) => {
      item.addEventListener('change', () => {
        this.#updateTaskStatus(item);
      });
    });
  }
}

export default ToDoList;
