const toDoListEl = document.getElementById('to-do-list');

class ToDoList {
  #tasks = JSON.parse(localStorage.getItem('tasks')) || [
    {
      description: 'wash the dishes',
      completed: false,
      index: 5,
    },
    {
      description: 'complete To Do List project',
      completed: false,
      index: 2,
    },
    {
      description: 'shower',
      completed: true,
      index: 3,
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
    const { index } = task.dataset;
    const itemToChange = this.#tasks.find((item) => item.index === +index);
    if (task.checked) {
      itemToChange.completed = true;
    } else {
      itemToChange.completed = false;
    }
    this.#storeData();
    this.#displayList();
  }

  #displayList() {
    this.#listEl.innerHTML = '';
    this.#tasks.sort((a, b) => a.index - b.index);
    this.#tasks.forEach((task) => {
      const markup = `
          <li class="main-list__item ${
  task.completed ? 'main-list__item--checked' : ''
}">
              
              <label class="main-list__label" for="to-do-${
  task.index
}"><input type="checkbox" data-index="${task.index}" ${
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

  init() {
    this.#displayList();
  }
}

const toDoList = new ToDoList(toDoListEl);

export default toDoList;
