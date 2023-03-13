function changeText() {
    document.getElementById("myText1").innerHTML = "HLB";
    document.getElementById("myText2").innerHTML = "55%";
}

function executeAction() {
// Execute your action here...

// Return to previous state after 3 seconds
setTimeout(function() {
    window.history.back();
}, 3000);
}