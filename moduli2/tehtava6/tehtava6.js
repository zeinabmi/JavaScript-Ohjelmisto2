
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

let result = 0;
let list = "";

while (result !== 6) {
    result = rollDice();
    list += "<li>" + result + "</li>";
}

document.getElementById("results").innerHTML = list;
