const todos = require('./todos')

module.exports = {
    todo: ({ id }) => todos.find(todo => todo.id == id),
    todos: ({ status }) => {
        switch (status) {
            case 'COMPLETED': return todos.filter(todo => todo.completed);
            case 'UNCOMPLETED': return todos.filter(todo => !todo.completed);
            default: return todos;
        }
    },
};