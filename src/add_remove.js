import { fillOutList } from './index.js';
export { createTask, taskEdit, clicky };


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

function taskEdit(task, list, element) {
    task.addEventListener("input", function(event) {
        element.description = task.value;
    });
        task.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            //console.log("enter description", list.description);
            //console.log("enter value", task.value);
            console.log("enter");
            localStorage.setItem('pushing', JSON.stringify(list));
          }
    });

}

function clicky(element, list, index) {
    element.addEventListener("click", function(event){
        console.log("click");
        //console.log(list);
        //console.log(index.index);
        //console.log(index.description);
        //console.log('indexOf', list.indexOf(index));
       list = list.filter((el) => el.index != index.index);
        localStorage.setItem('pushing', JSON.stringify(list));
        //console.log('reasigned values', list);
        //console.log('deleted', list);
        //console.log('deleted', filtered);
        parent = element.parentElement;
        //console.log(parent);
        parent.classList.add('d-none');
    });
}