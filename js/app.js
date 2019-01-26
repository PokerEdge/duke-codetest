// Questions
    // Does key press have to mean keydown?
        // Performance increases with fewer event handlers and keyup is necessary
    // Can the listener be an onsubmit/submit listener and work properly?
        // Why does click work properly?
    // Be sure to show team the Interactive-Sign-Up-And-Payment-Form project
    // How does one get the reference to the most recently added and in-DOM todo?
        // This value enables usage of document.todos.insertBefore(newElem, currentElem);

+function() {
    'use strict';

    const todoAddButton = document.querySelector('.todo-button');
    const todoField = document.querySelector('.todo-field');
    const todoList = document.querySelector('.todos');
    const todoListItems = []; // Avoid creating array if possible

    todoField.addEventListener('keydown', () => {
        todoAddButton.classList.add('todo-button--active');
    });

    todoField.addEventListener('keyup', () => {
        // console.log('field is active', todoField === document.activeElement);
        if(todoField.value.trim() === '') {
            todoAddButton.classList.remove('todo-button--active');
        }
    });

    // 2) Input value should be added to list when 'return' key is pressed (use SUBMIT handler + PREVENTDEFAULT)
    todoAddButton.addEventListener('click', (event) => {
        event.preventDefault(); // TODO: Replace with request when backend is active
        if(todoField.value.trim() === '') event.preventDefault();
        addTodo(); // TODO: Make asychronous when server backend is active
        todoAddButton.classList.remove('todo-button--active');
        todoField.value = '';
    });

    function addTodo() {
        // fires addTodo(e){...} to populate list properly (append html)

        // TODO: Push entire HTML element after checking if it's first element and appending addition division line if so
        // todoListItems.push(todoField.value.trim());
        // let todoToAdd = document.createElement('input').setAttribute('type', 'checkbox');

        // <label class="container">Two
        //     <input type="checkbox">
        //     <span class="checkmark"></span>
        // </label>
        // Append new element, check button and all, to innerHTML of #todos
            // Append an element with an added click handler that removes it from DOM on check box click
        
        let todoToAdd = document.createElement('p');
        todoToAdd.classList.add('test-class');
        let todoLabel = document.createElement('label');
        todoToAdd.appendChild(todoLabel);
        let todoInput = document.createElement('input');
        todoInput.setAttribute('type', 'checkbox');
        let todoText = document.createTextNode(todoField.value.trim());

        todoLabel.appendChild(todoInput);
        todoLabel.appendChild(todoText); // Use insertBefore() to add to top of list
        

        // todoListItems.push(todoToAdd);
        // todoList.innerHTML = todoListItems;
        todoList.appendChild(todoToAdd);
        
        // Create element with text form value and add to innerHTML
            // Add styled divider above and below element unless it's the first element, then only below
            // <label><input type="checkbox" name="all" id="all"> Main Conference — $200</label>
                // 3) Check icon should display on checkbox mouseover (todo-step4.png)
                // 4) To-do item should be removed when checkbox is checked
                // Add input checkbox element
                    // <input type="checkbox" id="id-checkbox"/>
                // Add class to style element
        // let todoToAdd = document.createElement('label').classList('label-class');
            
        // Use removeChild() on click of check box
    }
}();