import '../styles/main.css';

const toDoListEl = document.getElementById('to-do-list');
const addForm = document.getElementById('add-form');

const tasks = [
  {
    description: 'wash the dishes',
    completed: false,
    index: 1,
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

function displayList() {
  tasks.sort((a, b) => a.index - b.index);
  tasks.forEach((task) => {
    const markup = `
        <li class="main-list__item ${
  task.completed ? 'main-list__item--checked' : ''
}">
            
            <label class="main-list__label" for="to-do-${task.index}"><input type="checkbox" ${
  task.completed ? 'checked' : ''
} class='main-list__checkbox' name="to-do-${task.index}" id="to-do-${
  task.index
}" />${task.description}</label>
    <button class="btn btn-action" type="button"><ion-icon name="ellipsis-vertical-outline"></ion-icon></button>
        </li> 
        `;
    toDoListEl.insertAdjacentHTML('beforeend', markup);
  });
}

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

displayList();
