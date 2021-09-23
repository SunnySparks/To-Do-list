export { statusToggler };
export { statusUpdater };

//Selectors
const taskToggler = document.querySelector('.form-check-input')

//Functions
let statusToggler = (button) => {
    button.addEventListener("click", statusUpdater);
}

let statusUpdater = (list) => {
    list.forEach((task) => {
        console.log(task);
    })
}

