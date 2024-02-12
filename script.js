const body = document.querySelector("body");

const btn = document.getElementById("buttons");

const numbers = Array.from(document.getElementsByClassName("number"));

const operators = Array.from(document.getElementsByClassName("operator"));

const formats =Array.from(document.getElementsByClassName("format"));

//Switches for functions
let triggerA = "off"; //Reset number input after operator is used
let triggerB = "off";
let first = "first";
let operator = "operator";
let second = "second";
let third = "third";

//AC Clear button reset
document.getElementById("clearB").onclick = () => {
    display.innerHTML = ""
    triggerA = "off";
    first = "first";
    operator = "operator";
    second = "second";
    third = "third";
};

//Back Space button removes one character
document.getElementById("backSpaceB").onclick = () => {
    display.innerHTML = display.innerHTML.slice(0, -1);
};

//     document.getElementById("periodB").onclick = () => {

// };

//Displays results and repeats addition of second value
// document.getElementById("equalsB").onclick = () => {
//     display.innerHTML = second
//     calc(first, operator, second)
// }

//Operates number buttons
numbers.forEach((num) => (num.addEventListener("click", (a) => {
    if (triggerA === "on") {
        display.innerHTML = ""
        triggerA = "off"
        display.innerHTML += a.target.value
    } else {
        display.innerHTML += a.target.value
    };
})));

//Operates operator buttons
operators.forEach((operator) => (operator.addEventListener("click", (a) => {
    if (first != "first") {
        numSave(operator);
        display.innerHTML = third
        triggerA = "on"
        opChange(a.target.value)
    } else {
        opChange(a.target.value)
        numSave(operator);
        triggerA = "on";
};
})))

//Records number entries
function  numSave (operator) {
    if (first === "first") {
        first = display.innerHTML
    } else if (second === "second") {
        second = display.innerHTML
        third = calc(first, operator, second)
    } else {
        first = third
        second = display.innerHTML
        third = calc(first, operator, second)
}}

//calculates manually
function calc (first, operator, second) {
    let operation = ""
    if (operator === "+") {
        operation = +first + +second
    } else if (operator === "-") {
        operation = +first - +second
    } else if (operator === "*") {
        operation = +first * +second
    } else if (operator === "/" && second != 0) {
        operation = +first / +second
    } else {
        operation = 666
        triggerA = "off";
        first = "first";
        operator = "operator";
        second = "second";
        third = "third";
    }
    return operation
}

function opChange (a) {
    operator = a
}

function cl () {
    console.log(first)
    console.log(second)
    console.log(operator)
    console.log(third)
}