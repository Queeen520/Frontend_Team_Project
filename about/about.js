document.getElementById('box').addEventListener('click', sendEmail);

function sendEmail() {
    var getValue= document.getElementById("name");
        if (getValue.value !="") {
            getValue.value = "";
        }
        var getValue= document.getElementById("email");
        if (getValue.value !="") {
            getValue.value = "";
        }
        var getValue= document.getElementById("subject");
        if (getValue.value !="") {
            getValue.value = "";
        }
        var getValue= document.getElementById("message");
        if (getValue.value !="") {
            getValue.value = "";
        }

        alert('Message has been sent!');
}

