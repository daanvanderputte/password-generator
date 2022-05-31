const body = document.querySelector("body");

body.style.backgroundColor = "#6ED4C5"
// body.style.backgroundColor = `${createColor()}`

const button = document.querySelector("button");

// button.style.color = `${createColor()}`;

const label = document.querySelector("label");

// const createColor = () => {
//     let result = ["#"];
//     let numLet = "1234567890abcdefghijklmnopqrstuvwqyz";
//     for (let i = 0; i < 6; i++) {
//         result.push(numLet[Math.floor(Math.random() * numLet.length)])
//     }
//     return result.join("")
// }

// console.log(createColor());

const createColor = () => {
    let result = ["#"];
    let number = "1234567890";
    for (let i = 0; i < 6; i++) {
        result.push(number[Math.floor(Math.random() * number.length)])
    }
    return result.join("")
}

console.log(createColor());


const randomPasswordOne = () => {
    let result = [];
    let numLet = "1234567890abcdefghijklmnopqrstuvwqyz";
    for (let i = 0; i < 7; i++) {
        result.push(numLet[Math.floor(Math.random() * numLet.length)])
    }
    label.innerHTML = result.join("");
    return result.join("");
}

console.log(randomPasswordOne())

const randomPasswordTwo = () => {
    let result = [];
    let numbers = "1234567890";
    let letters = "abcdefghijklmnopqrstuvwqyz";
    for (let i = 0; i < 4; i++) {
        result.push(numbers[Math.floor(Math.random() * numbers.length)] + letters[Math.floor(Math.random() * letters.length)])
    }
    return result.join("");
}

console.log(randomPasswordTwo())

