const {CREATE, LIST, REMOVE, UPDATE} = require('./config/commands');

const argv = require('./config/yargs').argv;
const colors = require('colors');
const todos = require('./todos/todos');

let command = argv._[0];

switch (command) {
  case CREATE: {
    let todo = todos.create(argv.description);
    console.log(todo);
    break;
  }
  case REMOVE: {
    let result = todos.remove(argv.description);
    console.log(result);
    break;
  }
  case LIST: {
    let todoList = todos.getList();
    for (let todo of todoList) {
      console.log('========Por Hacer======='.green);
      console.log(todo.description);
      console.log('Estado: ', todo.completed ? 'Listo' : 'Pendiente');
      console.log('========================'.green);
    }
    break;
  }
  case UPDATE: {
    todos.update(argv.description, argv.completed);
    break;
  }
  default: {
    console.log('Unrecognized command');
  }
}
