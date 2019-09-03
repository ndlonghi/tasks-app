const {CREATE, LIST, REMOVE, UPDATE} = require('./commands');

const description = {
  demand: true,
  alias: 'd',
  desc: 'Description of the TODO task'
};

const completed = {
  alias: 'c',
  default: true,
  desc: 'Marks task as completed or pending'
};

const argv = require('yargs')
  .command(CREATE, 'Creates a TODO element', {
    description
  })
  .command(LIST, 'Displays TODO list')
  .command(REMOVE, 'Removes an item from the list', {
    description
  })
  .command(UPDATE, 'Updates the completed status of a TODO element', {
    description,
    completed
  })
  .help()
  .argv;

module.exports = {
  argv
};
