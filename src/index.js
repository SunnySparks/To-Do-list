import './style.css';
import 'bootstrap';

let todoTasks = [
  {
    description: 'Do the dishes / Sample element',
    completed: false,
    index: 0,
  },
  {
    description: 'Do the laundry / Sample element',
    completed: false,
    index: 1,
  },
  {
    description: 'Walk the dog / Sample element',
    completed: false,
    index: 2,
  },
];

// elements

// Selectors
const todoInput = document.querySelector('.todoInput');

// Event Listeners

// Functions
function searchID(id) {
  return document.getElementById(id);
}

function fillOutList(list) {
  list.sort((a, b) => a.index - b.index);

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

  const pushing = { description: todoInput.value, completed: false, index: list.length };
  list.push(pushing);

  todoTasks = list;

  todoInput.value = '';
}

window.onload = () => {
  fillOutList(todoTasks);
};
