body = document.querySelector("body");

btn = document.getElementById("buttons");

Array.from(document.getElementsByClassName("number")).forEach((num) => (num.addEventListener("click", (a) => {display.innerHTML += a.target.value})));

Array.from(document.getElementsByClassName("operator")).forEach((num) => (num.addEventListener("click", (a) => {display.innerHTML += "Do a thing!"})));

// btn.addEventListener("click",(a) => 
//     {if (a.target.class = "number") 
//         {display.innerHTML += a.target.value}
//     else {display.innerHTML = "WhoopsieDoodle"}}
// );

// if (btn.target.class = "number") {
//     btn.addEventListener ("click", (a)=> {display.innerHTML += a.target.value})
//}