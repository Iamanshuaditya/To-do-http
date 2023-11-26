const submitButton = document.querySelector(".submit");
const List = document.querySelector("ul");
const Todoitems = [];
export default Todoitems;
let todoCounter = 1;

function addTask() {
  const todoInput = document.querySelector("#todo").value;

  if (todoInput === "") {
    return alert("Please enter Your task");
  } else {
    const listItem = document.createElement("li");
    const delbtn = document.createElement("button");
    const Donebtn = document.createElement("button");
    const btnspan = document.createElement("span");
    delbtn.type = "button";
    Donebtn.type = "button";
    delbtn.textContent = "delete";
    Donebtn.textContent = "Done";
    listItem.textContent = todoInput;
    List.appendChild(listItem);
    btnspan.appendChild(Donebtn);
    btnspan.appendChild(delbtn);
    listItem.appendChild(btnspan);
    document.querySelector("#todo").value = "";

    Donebtn.addEventListener("click", function () {
      listItem.style.textDecoration = "line-through";
      newTask.completed = true;
    });
    delbtn.addEventListener("click", function () {
      listItem.style.display = "none";
      Todoitems.pop(newTask);
    });
    const RenameBtn = document.createElement("button");
    RenameBtn.type = "button";
    RenameBtn.textContent = "Rename";
    btnspan.appendChild(RenameBtn);

    RenameBtn.addEventListener("click", function () {
      const newTask = prompt("Enter the new task:");
      if (newTask === null || newTask === "") {
        alert("Enter a valid task.");
      } else {
        listItem.querySelector("span").previousSibling.textContent = newTask;
      }
    });

    const newTask = {
      title: todoInput,
      id: generateUniqueId(),
      completed: false,
    };

    Todoitems.push(newTask);
    console.log(Todoitems);
    todoCounter++;
  }
}

function generateUniqueId() {
  const timestamp = new Date().getTime();
  const random = Math.floor(Math.random() * 1000);
  return `${timestamp}_${random}`;
}

submitButton.addEventListener("click", addTask);

document.querySelector("#todo").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
