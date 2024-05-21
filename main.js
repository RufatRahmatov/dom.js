// console.log(window.document);

// let value;
// value = document.location.host;
// value = document.location.hostname;
// console.log(value);

// let link = document.links.item(2);
// console.log(link);

// let form = document.form[0].children[2].getAttribute("name");
// let form = document.form[0].children[2].getAttribute("id");
// let form = document.form[0].children[2].classList;
// let form = Array.form(document.forms[0].childreen[2].classList);
// console.log(form);

// form.forEach((className) => {
//   console.log(className);
// });

// getElementByid
// const input = document.getElementById("email");
// console.log(input);

// geltElementsByClassName
// const inputs = document.getElementsByClassName("input");
const inputs = Array.from(document.getElementsByClassName("input"))[0];
console.log(inputs);

// let btn = document.getElementsByClassName("btn")[0].getAttribute(type);
// console.log(btn);

// getElementByTagname

const ul = document.getElementsByTagName("li");
// console.log("inputs");

// querySelector
const input = document.querySelector(".input");
// const btn = document.querySelector(".btn").classList;
console.log(btn);

// const btn = document.querySelector(".btn");
// console.log(btn.previousElementSibling);
console.log(btn.parentNode.firstElementChild.nextElementSibling);

const btn = document.querySelector("li:nth-child (1");
console.log(btn);
