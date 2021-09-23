import './style.css';
import 'bootstrap';


class Task {
  constructor(description, index) {
    this.description = description;
    this.index = index;
    this.completed = false;
  }
}

let todoTasks = [
  new Task('Do the dishes', 0, false), new Task('Do the laundry', 1, false), new Task ('Walk the dog', 2, false)
];


// Selectors
const todoInput = document.querySelector('.todoInput');


// Functions
function searchID(id) {
  return document.getElementById(id);
}

function fillOutList(list) {
  //console.log(list);
  const listWrapper = searchID('listWrapper');
  list.forEach((task) => {
  const listElement = document.createElement('li');
  listElement.classList.add('list-group-item', 'pl-5', 'pt-4', 'pb-4', 'clearfix');

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.classList.add('form-check-input', 'float-left');
  listElement.appendChild(checkBox);

  const listText = document.createElement('span');
  //listText.innerText = todoInput.value;
  listText.innerText = task.description;
  listElement.appendChild(listText);

  const dragIcon = document.createElement('span');
  dragIcon.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
  dragIcon.classList.add('float-right');
  listElement.appendChild(dragIcon);

  listWrapper.appendChild(listElement);
  });

  const pushing = { description: todoInput.value, completed: false, index: list.length };
  const result = todoTasks.push(pushing);

  console.log(todoTasks);
  todoInput.value = '';
}


window.onload = () => {
  fillOutList(todoTasks);
};
