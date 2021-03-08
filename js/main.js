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
   addClass(li, "show");
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

// Added filter methods
filterTodos('all');
function filterTodos(t) {
   var x, i;
   x = document.getElementsByclassName("todo-item");
   if (t == "all") t = "";
   for (i = 0; i < x.length; i++) {
      removeClass(x[i], "show");
      if (x[i].className.indexOf(t) > -1) addClass(x[i], "show");
   }
}

function addClass(element, name) {
   var i, arr1, arr2;
   arr1 = element.className.split(" ");
   arr2 = name.split(" ");
   for (i = 0; i < arr2.length; i++) {
     if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
   }
}

function removeClass(element, name) {
   var i, arr1, arr2;
   arr1 = element.className.split(" ");
   arr2 = name.split(" ");
   for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
         arr1.splice(arr1.indexOf(arr2[i]), 1);     
      }
   }
   element.className = arr1.join(" ");
}

