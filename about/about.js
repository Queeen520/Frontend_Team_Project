
var navbar = document.getElementById("mainNavigation");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}




document.getElementById('box').addEventListener('click', sendEmail);


function sendEmail() {
    var getValue1 = document.getElementById("name");
    var getValue2 = document.getElementById("email");
    var getValue3 = document.getElementById("subject");
    var getValue4 = document.getElementById("message");
    var inputs = document.getElementsByTagName("input");
    
  
    if (getValue1.value != "") {
        getValue1.value = "";
    }
    else if(getValue1.value ===""){
        alert("MESSAGE ERROR, NOT SENT. NAME FIELD EMPTY!")
    }
   
    if (getValue2.value != "") {
        getValue2.value = "";
    }
    else if(getValue2.value ===""){
        alert("ERROR, NOT SENT. E-MAIL FIELD EMPTY!")
    }
   
   
    if (getValue3.value != "") {
        getValue3.value = "";
    }
    else if(getValue3.value ===""){
        alert("ERROR, NOT SENT. SUBJECT FIELD EMPTY!")
    }
   
    
    if (getValue4.value != "") {
        getValue4.value = "";
    }
    else if(getValue4.value ===""){
        alert("ERROR, NOT SENT. MESSAGE FIELD EMPTY!")
    }

}




