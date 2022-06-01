const randomColor = () => {
    let result = [];
    let numLet = "1234567890ABCDEF";
    for (let i =0; i < 6; i++) {
        result.push(numLet[Math.floor(Math.random() * numLet.length)])
    }
    return result.join("")
}

console.log(randomColor());

const body = document.querySelector("body");

body.style.display = "flex"
body.style.flexDirection = "column"
body.style.alignItems = "center"
body.style.backgroundColor = `#${randomColor()}`

const title = document.querySelector("h1");

title.style.fontSize = "110px"
title.style.color = `#${randomColor()}`

const label = document.querySelector("label");

label.style.alignSelf = "center"
label.style.fontSize = "100px"
label.style.color = `#${randomColor()}`
label.style.height = "30vh"

const button = document.querySelector("button");

button.style.width = "15rem"
button.style.height = "7rem"
button.style.fontSize = "70px"
button.style.backgroundColor = `#${randomColor()}`
button.style.color = `#${randomColor()}`
button.style.border = "none"
button.style.borderRadius = "40px"

const randomPassword = () => {
    let result = [];
    let numLet = "1234567890abcdefghijklmnopqrstuvwqyz";
    for (let i = 0; i < 7; i++) {
        result.push(numLet[Math.floor(Math.random() * numLet.length)])
    }
    label.innerHTML = result.join("");
    return result.join("");
}

console.log(randomPassword());

const randomColors = () => {
    body.style.backgroundColor = `#${randomColor()}`
    title.style.color = `#${randomColor()}`
    label.style.color = `#${randomColor()}`
    button.style.backgroundColor = `#${randomColor()}`
    button.style.color = `#${randomColor()}`
}