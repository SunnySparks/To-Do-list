import { fillOutList } from './index.js';
export { createTask, taskEdit, clicky, deleteCompleted };



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
            console.log("enter");
            localStorage.setItem('pushing', JSON.stringify(list));
          }
    });

}

function clicky(element, list, index) {
    element.addEventListener("click", function(event){
        list = list.filter((el) => el.index != index.index);
        filter(list);

    });
}

function deleteCompleted(button, list, index){
    button.addEventListener("click", function(event){
        //console.log("deleteAll");
        for (let i = 0; i < list.length; i += 1) {
            console.log("completed", list[i].completed);
        }
        console.log(index.completed);
            console.log('before', list);
            list = list.filter((el) => el.completed != true);

            filter(list);
    });
}

function filter(list){
    localStorage.setItem('pushing', JSON.stringify(list));
    var container = document.getElementById("listWrapper");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    const obtain = JSON.parse(localStorage.getItem('pushing'));
    fillOutList(obtain);
}