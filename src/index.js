import './style.css';
import 'bootstrap';
import statusToggler from './updates.js';
import { createTask, taskEdit, clicky } from './add_remove.js';
import { indexOf } from 'lodash';
export { fillOutList };


let todoTasks = [

];

// Functions
const searchID = (id) => document.getElementById(id);

const todoInput = document.querySelector('.todoInput');
var input = searchID("todoInput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13 && todoInput.value != '') {
    filler(todoTasks);
  }
});

function filler(list){
  const listWrapper = searchID('listWrapper');
  let taskFiller = createTask(list, todoInput.value);
  //console.log(taskFiller, typeof taskFiller);
    
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
    //listText.contentEditable;
    //console.log(taskFiller.description);
    listElement.appendChild(listText);

    const trashcan = document.createElement('span');
    trashcan.innerHTML = '<i class="fas fa-trash-alt"></i>';
    trashcan.classList.add('trashcan', 'float-right', 'pl-3', 'pr-3', 'text-danger');
    listElement.appendChild(trashcan);


    const dragIcon = document.createElement('span');
    dragIcon.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
    dragIcon.classList.add('float-right', 'pl-3', 'pr-3');
    listElement.appendChild(dragIcon);

    list.forEach(element => {
      taskEdit(listText, list, element);
      clicky(trashcan, list, element);
    });

    listWrapper.appendChild(listElement);
    const pushing = { description: taskFiller.description, completed: false, index: list.length };
    todoTasks.push(pushing);
    //console.log(todoTasks);
    localStorage.setItem('pushing', JSON.stringify(todoTasks));
}

function fillOutList(list) {
  const listWrapper = searchID('listWrapper');
  let taskFiller = createTask(list, todoInput.value);
  for (let i = 0; i < list.length; i += 1) {
    list[i].index = list.indexOf(list[i]);
    localStorage.setItem('pushing', JSON.stringify(list));
    const listElement = document.createElement('li');
    listElement.classList.add('list-group-item', 'pl-5', 'pt-4', 'pb-4', 'clearfix');

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.classList.add('form-check-input', 'float-left');
    listElement.appendChild(checkBox);
    statusToggler(checkBox, list);

    const listText = document.createElement('input');
    listText.setAttribute('type', 'text');
    listText.value = list[i].description;
    //console.log('value', listText.value);
    //listText.contentEditable;
    //console.log(taskFiller.description);
    listElement.appendChild(listText);
    taskEdit(listText, list, list[i]);
    //console.log('text now in main document', list[i].description)
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

    var description = listText.innerText;
    var currentIndex = i;
  }
}


window.onload = () => {
  const retrieve = JSON.parse(localStorage.getItem('pushing'));
  if (retrieve !== null) {
    todoTasks = retrieve;
  }
  if (todoTasks.length > 0) {
  fillOutList(todoTasks);
  } else {
    console.log(todoTasks.length);
  }
};
