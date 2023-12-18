enum Colors{
    black,
    red,
    green
}

let color = Colors.black;
console.log(color);

function getColorText(color: Colors){
    switch(color){
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

function getNameCB(callback: (name: string) => void){
    let name: string ="Kairat";
    callback(name);
}

function sayHi(name: string){
    console.log("Privet " + name);
}

function sayBye(name: string){
    console.log("Poka "+ name);
}

getNameCB(sayHi);
getNameCB(sayBye);