import './style.css';
import 'bootstrap';
import { createTask } from './fillers.js';
import { statusUpdater } from './updates.js';
import { statusToggler }  from './updates.js';;
export { fillOutList };



class Task {
  constructor(description, index) {
    this.description = description;
    this.index = index;
    this.completed = false;
  }
}


const todoTasks = [
  
];

// Selectors

// Functions
let searchID = (id) => {
  return document.getElementById(id);
}

const todoInput = document.querySelector('.todoInput');
var input = searchID("todoInput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
      filler(todoTasks);
  }
});

let filler = (list) => {
  const listWrapper = searchID('listWrapper');
  const listElement = document.createElement('li');
    listElement.classList.add('list-group-item', 'pl-5', 'pt-4', 'pb-4', 'clearfix');

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.classList.add('form-check-input', 'float-left');
    listElement.appendChild(checkBox);

    const listText = document.createElement('span');
    listText.innerText = todoInput.value;
    listElement.appendChild(listText);

    const dragIcon = document.createElement('span');
    dragIcon.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
    dragIcon.classList.add('float-right');
    listElement.appendChild(dragIcon);

    listWrapper.appendChild(listElement);

    console.log('it finally entered');
    const pushing = { description: todoInput.value, completed: false, index: list.length };
    todoTasks.push(pushing);
   
    todoInput.value = '';
    console.log('list', list);
}

let fillOutList = (list) => {
  list.forEach((task) => {
    createTask(task);
    console.log('task', task);
    console.log('description', task.description);
    filler(list);
  });
}

window.onload = () => {
  fillOutList(todoTasks);
  statusUpdater(todoTasks);
};
