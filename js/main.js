// Toggle dark mode
function setDark() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

// Add active class to the current button (highlight it)
var todoFilter = document.getElementById("todoFilter");
var filters = todoFilter.getElementsByTagName("span");
for (var i = 0; i < filters.length; i++) {
  filters[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("filter");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
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
   li.onclick = function() {
      this.classList.toggle("checked");
      if (this.classList.contains("checked")) {
         removeClass(this, "todo-item");
         addClass(this, "completed");
         countTodos();
      } else {
         removeClass(this, "completed");
         addClass(this, "todo-item");
         countTodos();
      }
   };
   addClass(li, "show");
   addClass(li, "active");
   countTodos();
}

// Get the number of todos
function countTodos() {
   var li = document.getElementsByClassName("todo-item");
   document.getElementById('todoCounter').innerText = li.length;
}

// Added filter methods
filterTodos('all');
function filterTodos(t) {
   var x, i;
   x = document.getElementsByTagName("li");
   if (t == "all") t = "";
   for (i = 0; i < x.length; i++) {
      removeClass(x[i], "show");
      removeClass(x[i], "todo-item");
      countTodos();
      if (x[i].className.indexOf(t) > -1) {
         addClass(x[i], "show");
         addClass(x[i], "todo-item");
         countTodos();
      }
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

// Added function to clear completed Todos
function clearTodos() {
   var et, i;
   et = document.getElementsByTagName("li");
   
   for (i = 0; i < et.length; i++) {
      if (et[i].classList.contains("checked")) {
         et[i].remove();
      }
   }
   countTodos();
}

