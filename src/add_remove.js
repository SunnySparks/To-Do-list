import { fillOutList } from './index.js';
export default createTask;


function createTask(list, input){
    class Task {
        constructor(description, completed, index) {
          this.description = description;
          this.completed = false;
          this.index = index;
        }
    }
    const new1 = new Task(input, false);
    return new1
}