import './style.css';
import 'bootstrap';
import statusToggler from './updates.js';

class Task {
  constructor(description, index, completed = false) {
    this.description = description;
    this.index = index;
    this.completed = completed;
  }
}

let todoTasks = [
  new Task('Do the dishes', false, 0),
  new Task('Do the laundry', false, 1),
  new Task('Walk the dog', false, 2),
];

// Functions
const searchID = (id) => document.getElementById(id);

function fillOutList(list) {
  console.log(list, typeof list);
  const listWrapper = searchID('listWrapper');
  list.forEach((task) => {
    const listElement = document.createElement('li');
    listElement.classList.add('list-group-item', 'pl-5', 'pt-4', 'pb-4', 'clearfix');

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.classList.add('form-check-input', 'float-left');
    listElement.appendChild(checkBox);
    statusToggler(checkBox, list);

    const listText = document.createElement('span');
    listText.innerText = task.description;
    listElement.appendChild(listText);

    const dragIcon = document.createElement('span');
    dragIcon.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
    dragIcon.classList.add('float-right');
    listElement.appendChild(dragIcon);

    listWrapper.appendChild(listElement);

    const pushing = { description: task.description, completed: false, index: task.index };
    todoTasks.push(pushing);
    localStorage.setItem('pushing', JSON.stringify(todoTasks));
  });
}

window.onload = () => {
  const retrieve = JSON.parse(localStorage.getItem('pushing'));
  if (retrieve !== null) {
    todoTasks = retrieve;
  }
  fillOutList(todoTasks);
};
