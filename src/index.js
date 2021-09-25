/* eslint-disable import/no-cycle */
import './style.css';
import 'bootstrap';
import statusToggler from './updates.js';
import {
  createTask, taskEdit, clicky, deleteCompleted,
} from './add_remove.js';

let todoTasks = [

];

// Functions
const searchID = (id) => document.getElementById(id);
const deleteButton = searchID('delete-all');

const todoInput = document.querySelector('.todoInput');
const input = searchID('todoInput');

function filler(list) {
  const listWrapper = searchID('listWrapper');
  const taskFiller = createTask(list, todoInput.value);

  const listElement = document.createElement('li');
  listElement.classList.add('list-group-item', 'pl-5', 'pt-4', 'pb-4', 'clearfix');

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.classList.add('form-check-input', 'float-left');
  listElement.appendChild(checkBox);
  statusToggler(checkBox, list);

  const listText = document.createElement('input');
  listText.setAttribute('type', 'text');
  listText.value = taskFiller.description;
  listElement.appendChild(listText);

  const trashcan = document.createElement('span');
  trashcan.innerHTML = '<i class="fas fa-trash-alt"></i>';
  trashcan.classList.add('trashcan', 'float-right', 'pl-3', 'pr-3', 'text-danger');
  listElement.appendChild(trashcan);

  const dragIcon = document.createElement('span');
  dragIcon.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
  dragIcon.classList.add('float-right', 'pl-3', 'pr-3');
  listElement.appendChild(dragIcon);

  list.forEach((element) => {
    taskEdit(listText, list, element);
    clicky(trashcan, list, element);
    deleteCompleted(deleteButton, list, element);
  });

  listWrapper.appendChild(listElement);
  const pushing = { description: taskFiller.description, completed: false, index: list.length };
  todoTasks.push(pushing);
  localStorage.setItem('pushing', JSON.stringify(todoTasks));
}

input.addEventListener('keyup', (event) => {
  if (event.keyCode === 13 && todoInput.value !== '') {
    filler(todoTasks);
    input.value = '';
  }
});

function fillOutList(list) {
  const listWrapper = searchID('listWrapper');
  for (let i = 0; i < list.length; i += 1) {
    // console.log('indexof', list.indexOf(list[i]));
    console.log('hard index', list[i].index);
    list[i].index = list.indexOf(list[i]);
    console.log('After', list[i].index);
    localStorage.setItem('pushing', JSON.stringify(list));
    const listElement = document.createElement('li');
    listElement.classList.add('list-group-item', 'pl-5', 'pt-4', 'pb-4', 'clearfix');

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.classList.add('form-check-input', 'float-left');
    if (list[i].completed === true) {
      checkBox.checked = true;
    }
    listElement.appendChild(checkBox);
    statusToggler(checkBox, list);

    const listText = document.createElement('input');
    listText.setAttribute('type', 'text');
    listText.value = list[i].description;
    listElement.appendChild(listText);
    taskEdit(listText, list, list[i]);

    const trashcan = document.createElement('span');
    trashcan.innerHTML = '<i class="fas fa-trash-alt"></i>';
    trashcan.classList.add('trashcan', 'float-right', 'pl-3', 'pr-3', 'text-danger');
    listElement.appendChild(trashcan);
    clicky(trashcan, list, list[i]);

    const dragIcon = document.createElement('span');
    dragIcon.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
    dragIcon.classList.add('float-right', 'pl-3', 'pr-3');
    listElement.appendChild(dragIcon);

    listWrapper.appendChild(listElement);

    deleteCompleted(deleteButton, list, list[i]);
  }
}

window.onload = () => {
  const retrieve = JSON.parse(localStorage.getItem('pushing'));
  if (retrieve !== null) {
    todoTasks = retrieve;
  }
  if (todoTasks.length > 0) {
    fillOutList(todoTasks);
  }
};

export default fillOutList;