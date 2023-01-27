var input = document.getElementById("todo-input");
var addButton = document.getElementById("add-button");
var todoList = document.getElementById("todo-list");

addButton.addEventListener("click", function() {
    var todo = input.value;
    input.value = "";
    var newLi = document.createElement("li");
    newLi.innerHTML = todo;
    todoList.appendChild(newLi);
});
