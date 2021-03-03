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
   li.className = "todo-item"

   if (x == 13 ) {
      if (inputValue === '') {
         alert("You must write something!");
      } else {
         document.getElementById("todoItems").appendChild(li);
      }
      document.getElementById("todoInput").value = "";
   }
 
   var span = document.createElement("SPAN");
   span.className = "close";
   li.appendChild(span);
 
   for (i = 0; i < close.length; i++) {
     close[i].onclick = function() {
       var div = this.parentElement;
       div.style.display = "none";
     }
   }
 }