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


document.getElementById('box').addEventListener('click', sendEmail2);
function sendEmail2(){
    var getValue4 = document.getElementById("message");
    var inputs = document.getElementsByTagName("input");

}


