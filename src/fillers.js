import { fillOutList } from './index.js';
export { createTask };


function Task(description, index) {
      this.description = description;
      this.index = index;
      this.completed = false;
}

function createTask(value, index){
    const new1 = new Task(value, index, false);
    console.log('this is the task', new1);
}


