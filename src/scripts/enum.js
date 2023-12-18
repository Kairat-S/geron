"use strict";
var Colors;
(function (Colors) {
    Colors[Colors["black"] = 0] = "black";
    Colors[Colors["red"] = 1] = "red";
    Colors[Colors["green"] = 2] = "green";
})(Colors || (Colors = {}));
let color = Colors.black;
console.log(color);
function getColorText(color) {
    switch (color) {
        case Colors.black:
            return "black";
        case Colors.red:
            return "red";
        case Colors.green:
            return "green";
        default:
            return "такого цвета нет";
    }
}
console.log(getColorText(Colors.black));
console.log(getColorText(Colors.red));
console.log(getColorText(Colors.green));
function getNameCB(callback) {
    let name = "Kairat";
    callback(name);
}
function sayHi(name) {
    console.log("Privet " + name);
}
function sayBye(name) {
    console.log("Poka " + name);
}
getNameCB(sayHi);
getNameCB(sayBye);
