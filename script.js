const todoInput = document.querySelector("#todo-input");
const todoSectionOne = document.querySelector(".section-one");
const todoWrapper = document.querySelector(".todo-wrapper");
const totalCount = document.querySelector("#todo-count");

totalCount.textContent = 0;

function HandleDelete() {
  todoList.removeChild(li);
}

function HandleAdd() {
  if (!todoInput.value) {
    alert("Please add your todo(s)!");
  } else {
    var todoList = document.createElement("ul");
    const buttons = document.createElement("div");

    buttons.className = "marks";
    buttons.innerHTML = `<img src="./img/check (2).png" alt="checkmark" onclick="HandleAddToDone"/>
    <img src="./img/delete.png" alt="delete" onclick="HandleDelete()" />`;

    todoList.classList.add("todo-item__wrapper");
    let li = document.createElement("li");
    li.classList.add("todo-item");
    li.innerText = todoInput.value;

    todoWrapper.appendChild(todoList).appendChild(li).appendChild(buttons);

    totalCount.textContent = todoWrapper.childElementCount;
  }

  todoInput.value = "";
}

function HandleAddToDone() {}
