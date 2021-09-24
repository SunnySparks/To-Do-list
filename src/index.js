import './style.css';
import 'bootstrap';
import statusToggler from './updates.js';
import createTask from './add_remove.js';
import { indexOf } from 'lodash';


let todoTasks = [

];

// Functions
const searchID = (id) => document.getElementById(id);

const todoInput = document.querySelector('.todoInput');
var input = searchID("todoInput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13 && todoInput.value != '') {
    //fillOutList(todoTasks);
    filler(todoTasks);
  }
});

function filler(list){
  const listWrapper = searchID('listWrapper');
  let taskFiller = createTask(list, todoInput.value);
  console.log(taskFiller, typeof taskFiller);
  //console.log(taskFiller.description, typeof taskFiller.description);
  //console.log(list.length);
//  list.forEach((task) => {
    //console.log('list', list);
    
    const listElement = document.createElement('li');
    listElement.classList.add('list-group-item', 'pl-5', 'pt-4', 'pb-4', 'clearfix');

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.classList.add('form-check-input', 'float-left');
    listElement.appendChild(checkBox);
    statusToggler(checkBox, list);

    const listText = document.createElement('span');
    listText.innerText = taskFiller.description;
    console.log(taskFiller.description);
    //listText.innerText = todoInput.value;
    listElement.appendChild(listText);

    const dragIcon = document.createElement('span');
    dragIcon.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
    dragIcon.classList.add('float-right');
    listElement.appendChild(dragIcon);

    listWrapper.appendChild(listElement);
    const pushing = { description: taskFiller.description, completed: false, index: list.length };
    todoTasks.push(pushing);
    console.log(todoTasks);
    localStorage.setItem('pushing', JSON.stringify(todoTasks));
  //console.log(localStorage.getItem('pushing'));
//  }); 
}

function fillOutList(list) {
  const listWrapper = searchID('listWrapper');
  let taskFiller = createTask(list, todoInput.value);
  //console.log(taskFiller, typeof taskFiller);
  //console.log(taskFiller.description, typeof taskFiller.description);
  //console.log(list.length);
//  list.forEach((task) => {
  for (let i = 0; i < list.length; i += 1) {
    //console.log('list', list);
    
    const listElement = document.createElement('li');
    listElement.classList.add('list-group-item', 'pl-5', 'pt-4', 'pb-4', 'clearfix');

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.classList.add('form-check-input', 'float-left');
    listElement.appendChild(checkBox);
    statusToggler(checkBox, list);

    const listText = document.createElement('span');
    listText.innerText = list[i].description;
    console.log(taskFiller.description);
    //listText.innerText = todoInput.value;
    listElement.appendChild(listText);

    const dragIcon = document.createElement('span');
    dragIcon.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
    dragIcon.classList.add('float-right');
    listElement.appendChild(dragIcon);

    listWrapper.appendChild(listElement);

    var description = listText.innerText;
    //console.log(i);
    var currentIndex = i;
    //console.log(currentIndex);
  }
  //console.log(localStorage.getItem('pushing'));
//  }); 
}


window.onload = () => {
  const retrieve = JSON.parse(localStorage.getItem('pushing'));
  //console.log('retrieve', retrieve);
  if (retrieve !== null) {
    todoTasks = retrieve;
  }
  if (todoTasks.length > 0) {
  fillOutList(todoTasks);
  } else {
    console.log(todoTasks.length);
  }
};
