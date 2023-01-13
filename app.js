let outputDisplay = document.getElementById("output-Display");
let icon = document.getElementById("icon")

icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
}
function display(num){
    outputDisplay.value += num;
}

function calculate(num){
    try{
        outputDisplay.value = eval(outputDisplay.value);
    }
    catch(error){
        outputDisplay.value = "Invalid Input!!"
    }
}

function cle(){
    outputDisplay.value = " ";
}
function del() {
    outputDisplay.value = outputDisplay.value.slice(0,-1);
}
