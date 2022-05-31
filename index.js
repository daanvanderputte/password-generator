const body = document.querySelector("body");

body.style.display = "flex"
body.style.flexDirection = "column"
body.style.alignItems = "center"
body.style.backgroundColor = "#6ED4C5"

const title = document.querySelector("h1");

title.style.fontSize = "120px"

const label = document.querySelector("label");

label.style.alignSelf = "center"
label.style.fontSize = "100px"
label.style.height = "30vh"
label.style.color = "red";

const button = document.querySelector("button");

button.style.width = "15rem"
button.style.height = "7rem"
button.style.fontSize = "70px"
button.style.backgroundColor = "blue"
button.style.color = "white"
button.style.border = "none"
button.style.borderRadius = "40px"

const randomPasswordOne = () => {
    let result = [];
    let numLet = "1234567890abcdefghijklmnopqrstuvwqyz";
    for (let i = 0; i < 7; i++) {
        result.push(numLet[Math.floor(Math.random() * numLet.length)])
    }
    label.innerHTML = result.join("");
    return result.join("");
}

console.log(randomPasswordOne());

