const todoInput = document.querySelector("#todo-input");
const todoSectionOne = document.querySelector(".section-one");
const todoWrapper = document.querySelector(".todo-wrapper");

function HandleAdd() {
  if (todoInput.value == "") {
    alert("Please add your todo(s)!");
  } else {
    const todoList = document.createElement("ul");
    const buttons = document.createElement("div");

    buttons.className = "marks";
    buttons.innerHTML = ` <img src="./img/check (2).png" alt="checkmark" />
    <img src="./img/delete.png" alt="delete" />`;

    todoList.classList.add("todo-item__wrapper");
    let li = document.createElement("li");
    li.classList.add("todo-item");
    li.innerText = todoInput.value;

    todoWrapper.appendChild(todoList).appendChild(li).appendChild(buttons);
  }
  todoInput.value = "";
}
