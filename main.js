function changeText() {
    document.getElementById("myText1").innerHTML = "[ 000 ]";
    document.getElementById("myText2").innerHTML = "[ 00 ]";
}

function executeAction() {
// Execute your action here...

// Return to previous state after 3 seconds
setTimeout(function() {
    window.history.back();
}, 3000);
}