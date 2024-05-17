const todoInput = document.querySelector("#todo-input");
const todoSectionOne = document.querySelector(".section-one");

function HandleAdd() {
  if (todoInput.value == "") {
    alert("You must write something");
  } else {
    const todoWrapper = document.createElement("div");
    todoWrapper.classList.add("todo-wrapper");
    const todoList = document.createElement("ul");
    const counter = document.createElement("p");
    todoList.classList.add("todo-item__wrapper");
    counter.classList.add("counter");
    let li = document.createElement("li");
    li.classList.add("todo-item");
    li.innerText = todoInput.value;
    todoSectionOne.appendChild(todoWrapper);
    todoSectionOne
      .appendChild(todoWrapper)
      .appendChild(todoList)
      .appendChild(li);
  }
  todoInput.value = "";
}
