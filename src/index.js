import _ from 'lodash';
import './style.css';
import 'bootstrap';

var todoTasks = [
  {
    "description": "Do the dishes / Sample element",
    "completed": false,
    "index": 0,
  },
  {
    "description": "Do the laundry / Sample element",
    "completed": false,
    "index": 1,
  },
  {
    "description": "Walk the dog / Sample element",
    "completed": false,
    "index": 2,
  }
];

//elements
var input = searchID("todoInput");

//Selectors
const todoButton = document.querySelector(".todo-button");
const todoInput = document.querySelector(".todoInput");

//Event Listeners
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
      fillOutList(todoTasks);
  }
});

//Functions
function searchID(id) {
  return document.getElementById(id);
}

function fillOutList(list) {
  const bookObjects = list;

  bookObjects.forEach((element) => {
    const taskIndex = bookObjects.indexOf(element);
    return taskIndex;
  });

  const listWrapper = searchID("listWrapper");

  const listElement = document.createElement('li');
  listElement.classList.add('list-group-item', 'pl-5', 'pt-4', 'pb-4', 'clearfix');

  const checkBox = document.createElement('input');
  checkBox.type = "checkbox";
  checkBox.classList.add('form-check-input', 'float-left');

  const listText = document.createElement('span');
  listText.innerText = todoInput.value;

  const dragIcon = document.createElement('span');
  dragIcon.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
  dragIcon.classList.add('float-right');

  listElement.appendChild(checkBox);
  listElement.appendChild(listText);
  listElement.appendChild(dragIcon);
  listWrapper.appendChild(listElement);

  const pushing = {description : todoInput.value, completed: false, index : bookObjects.length}
  bookObjects.push(pushing);

  todoTasks = bookObjects;
  

  todoInput.value = "";
}



