(() => {
  'use strict';

  const todoForm = document.querySelector('#todo-form');
  const todoInput = document.querySelector('#todo-input');
  const todoList = document.querySelector('#todo-list');

  todoForm.addEventListener('submit', handleAddTodo);

  function handleAddTodo(event) {
    event.preventDefault();

    const taskText = todoInput.value.trim();
    if (!taskText) {
      todoInput.focus();
      return;
    }

    const todoItem = createTodoItem(taskText);
    todoList.appendChild(todoItem);

    todoInput.value = '';
    todoInput.focus();
  }

  function createTodoItem(text) {

    const listItem = document.createElement('li');
    listItem.classList.add('todo-item');

    const leftWrap = document.createElement('div');
    leftWrap.classList.add('todo-left');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('todo-checkbox');

    const textSpan = document.createElement('span');
    textSpan.classList.add('todo-text');
    textSpan.textContent = text;

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = '🗑️';

    leftWrap.appendChild(checkbox);
    leftWrap.appendChild(textSpan);

    listItem.appendChild(leftWrap);
    listItem.appendChild(deleteButton);

    checkbox.addEventListener('change', () => {
      listItem.classList.toggle('is-done', checkbox.checked);
    });

    deleteButton.addEventListener('click', () => {
      todoList.removeChild(listItem);
    });

    return listItem;
  }
})();