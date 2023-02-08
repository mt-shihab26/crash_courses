/*
* Title: To Do Application using vanilla JS DOM
* Description: This JS file has all the JS functions necessary to control the to do application.
* Author: Shihab Mahamud (github.com/shihab4t)
* Date: 03/09/2022
*/

// select element
const newTaskFrom = document.querySelector("#new-task-from");
const newTaskText = document.querySelector("#new-task-text");
const itemsUl = document.querySelector("#items");
const completeUl = document.querySelector(".complete-list ul");


// Utils function
const createItem = value => {
    const itemLi = document.createElement("li");
    const checkbox = document.createElement("input");
    const labelText = document.createElement("label");

    itemLi.className = "item";
    checkbox.type = "checkbox";
    labelText.innerText = value;

    itemLi.appendChild(checkbox);
    itemLi.appendChild(labelText);
    return itemLi;
}

const createCompletedItem = value => {
    const itemLi = document.createElement("li");
    itemLi.innerText = value;
    const button = document.createElement("button");
    button.className = "delete";
    button.innerText = "Delete";
    itemLi.appendChild(button);
    return itemLi;
}

// main program flow
const addTask = event => {
    event.preventDefault();
    const newItem = createItem(newTaskText.value);
    newTaskText.value = "";
    itemsUl.appendChild(newItem);
    bindComplateTask(newItem)
}

const bindComplateTask = item => {
    const checkbox = item.querySelector("input[type='checkbox']");
    checkbox.onchange = completeTask;
}

const completeTask = event => {
    const value = event.target.nextElementSibling.textContent;
    const item = createCompletedItem(value);
    completeUl.appendChild(item);
    event.target.parentElement.remove();
    bindDeleteButton(item);
}

const bindDeleteButton = item => {
    const deleteButton = item.querySelector(".delete");
    deleteButton.onclick = deleteTask
}

const deleteTask = event => {
    event.target.parentElement.remove();
}

newTaskFrom.addEventListener("submit", addTask);

for (let i = 0; i < itemsUl.children.length; i++) {
    bindComplateTask(itemsUl.children[i]);
}

for (let i = 0; i < completeUl.children.length; i++) {
    bindDeleteButton(completeUl.children[i]);
}
