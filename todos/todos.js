const fs = require('fs');

let todoList = [];

const saveDB = () => {
  let data = JSON.stringify(todoList);
  fs.writeFile('db/data.json', data, (error) => {
    if (error) {
      throw new Error('Error trying to save', error);
    }
  })
};

const loadDB = () => {
  try {
    todoList = require('../db/data.json');
  } catch (error) {
    todoList = [];
  }
};

const create = (description) => {
  loadDB();
  let todo = {
    description,
    completed: false
  };
  todoList.push(todo);
  saveDB();
  return todo;
};

const remove = (description) => {
  loadDB();
  const newTodoList = todoList.filter(todo => todo.description !== description);
  if (todoList.length === newTodoList.length) {
    return false
  } else {
    todoList = newTodoList;
    saveDB();
    return true;
  }
};

const getList = () => {
  loadDB();
  return todoList;
};

const update = (description, completed) => {
  loadDB();
  let index = todoList.findIndex(todo => todo.description === description);
  if (index > -1) {
    todoList[index] = {
      ...todoList[index],
      completed
    };
    saveDB();
    return true;
  } else {
    return false;
  }
};

module.exports = {
  create,
  remove,
  getList,
  update
};
