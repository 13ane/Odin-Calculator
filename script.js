const body = document.querySelector("body");

const btn = document.getElementById("buttons");

const numbers = Array.from(document.getElementsByClassName("number"));

const operators = Array.from(document.getElementsByClassName("operator"));

const formats =Array.from(document.getElementsByClassName("format"));

document.getElementById("clearB").onclick = () => {
    display.innerHTML = ""
    rigger = "off";
    first = "first";
    operator = "operator";
    second = "second";
    third = "third";
}

numbers.forEach((num) => (num.addEventListener("click", (a) => {
    if (trigger === "on") {
        display.innerHTML = ""
        trigger = "off"
        display.innerHTML += a.target.value
    } else {
        display.innerHTML += a.target.value
    };
})));

let trigger = "off";
let first = "first";
let operator = "operator";
let second = "second";
let third = "third";

operators.forEach((ops) => (ops.addEventListener("click", (a) => {
    if (first != "first") {
        numSave(operator);
        display.innerHTML = third
        trigger = "on"
        operator = a.target.value;
    } else {
        operator = a.target.value;
        numSave(operator);
        trigger = "on";
};
})))

function  numSave (ops) {
    if (first === "first") {
        first = display.innerHTML
    } else if (second === "second") {
        second = display.innerHTML
        third = calc(first, ops, second)
    } else {
        first = third
        second = display.innerHTML
        third = calc(first, ops, second)
}}

function calc (first, ops, second) {
    let operation = ""
    if (ops === "+") {
        operation = +first + +second
    } else if (ops === "-") {
        operation = +first - +second
    } else if (ops === "*") {
        operation = +first * +second
    } else if (ops === "/") {
        operation = +first / +second
    }

    return operation
}