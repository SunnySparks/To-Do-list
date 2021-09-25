/* eslint-disable import/no-cycle */
import fillOutList from './index.js';

function createTask(list, input) {
  class Task {
    constructor(description, completed, index) {
      this.description = description;
      this.completed = false;
      this.index = list.length;
    }
  }
  const new1 = new Task(input, false);
  return new1;
}

function taskEdit(task, list, element) {
  task.addEventListener('input', () => {
    element.description = task.value;
  });
  task.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      localStorage.setItem('pushing', JSON.stringify(list));
    }
  });
}

function filter(list) {
  localStorage.setItem('pushing', JSON.stringify(list));
  const container = document.getElementById('listWrapper');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  const obtain = JSON.parse(localStorage.getItem('pushing'));
  fillOutList(obtain);
}

function clicky(element, list, index) {
  element.addEventListener('click', () => {
    list = list.filter((el) => el.index !== index.index);
    filter(list);
  });
}

function deleteCompleted(button, list, index) {
  button.addEventListener('click', () => {
    for (let i = 0; i < list.length; i += 1) {
    }
    list = list.filter((el) => el.completed !== true);

    filter(list);
  });
}

export {
  createTask, taskEdit, clicky, deleteCompleted,
};