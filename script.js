body = document.querySelector("body");

btn = document.getElementById("buttons");

Array.from(document.getElementsByClassName("number")).forEach((num) => (num.addEventListener("click", (a) => {display.innerHTML += a.target.value})));

// Array.from(document.getElementsByClassName("operator")).forEach((operator) => (operator.addEventListener("click", (a) => {display.innerHTML += "Do a thing!"})));

addition = document.getElementById("addB");
let b = "waiting"
addition.onclick = () => { if (a=NaN) {
    a = display.innerHTML
    display.innerHTML = ""
    return a
} else {
    b = display.innerHTML
    add()
}}

subtraction = document.getElementById("subtractB");
subtraction.addEventListener("click", console.log("subtract"));

multiplication = document.getElementById("multiplyB");  
multiplication.addEventListener("click", console.log("multiply"));

dividend = document.getElementById("divideB");
dividend.addEventListener("click", console.log("divide"));

clear = document.getElementById("clearB");
clear.addEventListener("click", console.log("clear"));

backspace = document.getElementById("backSpaceB");
backspace.addEventListener("click", console.log("backspace"));

equals = document.getElementById("equalsB");
equals.addEventListener("click", console.log("equals"));

function add(a, b) {
    let c = a + b;
    display.innerHTML = c;
}

function subtract(a, b) {
    let c = a - b;
    display.innerHTML = c;
}

function multiply(a, b) {
    let c = a * b;
    display.innerHTML = c;
}

function divide(a, b) {
    let c = a / b;
    display.innerHTML = c;
}

function clear (a) {
    a = ""
}