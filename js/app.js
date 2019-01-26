// Questions
    // Does key press have to mean keydown?
        // Performance increases with fewer event handlers and keyup is necessary

+function() {
    'use strict';
    // Add event listener to the button in the form that
        //prevents default form action
        // fires addTodo(e){...} to populate list properly (append html)
    
    // document.getElementById('todoButton').addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     console.log('submit handler');
        
    //     // addTodo(e);
    //     // document.getElementById('todos').innerHTML = "Hello World";
    // });
    const todoAddButton = document.querySelector('.todo-button');
    const todoField = document.querySelector('.todo-field');
    const todoList = document.querySelector('.todos');
    const todoListItems = [];

    // 2) Input value should be added to list when 'return' key is pressed (use SUBMIT handler + PREVENTDEFAULT)
    todoField.addEventListener('keydown', () => {
        
        // console.log('keydown handler fired ', event.target.value);
        
        
        // TODO: Find action set that requires removing active button class
        todoAddButton.classList.add('todo-button--active');
        // document.getElementById("todos").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
        // event.preventDefault();
    });

    todoField.addEventListener('keyup', () => {
        // console.log('is element active? ', document.activeElement);
        console.log('field is active', todoField === document.activeElement);
        if(todoField.value === '') {
            todoAddButton.classList.remove('todo-button--active');
        }
    });

    todoAddButton.addEventListener('click', (event) => {
        event.preventDefault(); // TODO: Replace with request when backend is active
        if(todoField.value.trim() === '') event.preventDefault();
        addTodo(); // TODO: Make asychronous when server backend is active
        todoAddButton.classList.remove('todo-button--active');
        todoField.value = '';
    });

    function addTodo() {

        // TODO: Push entire HTML element after checking if it's first element and appending addition division line if so
        todoListItems.push(todoField.value.trim());
        todoList.innerHTML = todoListItems;

        // Create element with text form value and add to innerHTML
            // Add styled divider above and below element unless it's the first element, then only below
            // <label><input type="checkbox" name="all" id="all"> Main Conference — $200</label>
                // 3) Check icon should display on checkbox mouseover (todo-step4.png)
                // 4) To-do item should be removed when checkbox is checked
                // Add input checkbox element
                    // <input type="checkbox" id="id-checkbox"/>
                // Add class to style element

        // Append new element, check button and all, to innerHTML of #todos
            // Append an element with an added click handler that removes it from DOM on check box click
        
    }
}();