const createTask = require('./add_remove');

describe('It creates a new object to be stored inside the localStorage'), () => {
    let list = [];
    let input = document.getElementById('todoInput');
    
    test('it creates a set of HTML elements to be inserted inside the localStorage'), () => {
        expect(createTask(list, 'hello').description.toBe(
            Task.description = 'hello'
        ))
    }
}
