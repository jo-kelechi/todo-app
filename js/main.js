// Toggle dark mode
function setDark() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

// Add new Todo and remove todo when x is clicked
function newTodo(event) {
   var li = document.createElement("li");
   var inputValue = document.getElementById("todoInput").value;
   var p = document.createElement("p");
   var t = document.createTextNode(inputValue);
   var x = event.keyCode;

   p.appendChild(t);
   li.appendChild(p);
   li.className = "todo-item";

   if (x == 13 ) {
      if (inputValue === '') {
         alert("You must write something!");
      } else {
         document.getElementById("todoItems").appendChild(li);
      }
      document.getElementById("todoInput").value = "";
   }
 
   var span = document.createElement("span");
   span.className = "close";
   span.onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      div.remove();
      countTodos();
   };
   li.appendChild(span);
   countTodos();
}

// Get the number of uncompleted todos
function countTodos() {
   var e = document.getElementsByClassName("todo-item");

   for (var i = 0; i < e.length; i++) {
      if (e[i].className == "checked") {
         e[i].remove();
      }
   }
   document.getElementById('todoCounter').innerText = e.length;
}