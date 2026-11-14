
let number = Number(prompt("How many participants?"));

let names = [];

for (let i = 0; i < number; i++) {
    let name = prompt("Enter participant name:");
    names.push(name);
}

names.sort();

let list = "";

for (let i = 0; i < names.length; i++) {
    list += "<li>" + names[i] + "</li>";
}

document.getElementById("participants").innerHTML = list;
