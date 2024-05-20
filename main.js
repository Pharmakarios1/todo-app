const todoInput = document.querySelector("#todo-input");
const errMsg = document.querySelector(".error");
const todoItem = document.querySelector(".todo-wrapper");
const doneItem = document.querySelector(".done-wrapper");
const count = document.querySelector("#todo-count");

let counter = 0;

const HandleCount = (counter) => {
  count.innerText = counter;
};

const HandleSubmit = () => {
  if (todoInput.value === "") {
    errMsg.innerHTML = "Sorry! You must enter a task. Try again.";
  } else {
    storeData();
    errMsg.innerHTML = "";
  }
};

data = {};

const storeData = function () {
  data.task = todoInput.value;
  todoTask();
  console.log(data);
};

const todoTask = function () {
  todoItem.innerHTML += `
  <li class="todo-item">
        <p>${data.task}</p>
        <div class="marks">
            <img src="./img/check (2).png" alt="checkmark" onclick = "HandleDone(this)" />
            <img src="./img/delete.png" alt="delete" onclick = "HandleDelete(this)"/>
        </div>
</li>
  `;
  counter += 1;
  HandleCount(counter);
  todoInput.value = "";
};

const doneTask = function () {
  doneItem.innerHTML += `
    <li class="todo-item">
        <p>${data.task}</p>
        <div class="marks">
            <img src="./img/check (2).png" alt="checkmark" onclick = "HandleDone(this)" />
            <img src="./img/delete.png" alt="delete" onclick = "HandleDelete(this)"/>
        </div>
    </li>
    
    `;

  HandleDone();
};

const HandleDelete = (e) => {
  e.parentElement.parentElement.remove();
  counter -= 1;
  HandleCount(counter);
};

const HandleDone = (e) => {
  doneTask();
};
