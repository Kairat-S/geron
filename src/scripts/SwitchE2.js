"use strict";
var Operators;
(function (Operators) {
    Operators["Tele2"] = "Tele2";
    Operators["Beeline"] = "Beeline";
    Operators["Kcell"] = "Kcell";
    Operators["Active"] = "Active";
})(Operators || (Operators = {}));
function getPrice(OperatorName) {
    switch (OperatorName) {
        case Operators.Kcell:
            return 0;
        case Operators.Beeline:
            return 3490;
        case Operators.Tele2:
            return 2590;
        case Operators.Active:
            return 1890;
    }
}
let operatorName = Operators.Active;
console.log(`Цена подключения тарифа для оператора ${operatorName} - составляет ${getPrice(operatorName)} тенге`);
var Сompanies;
(function (Сompanies) {
    Сompanies[Сompanies["Burger"] = 0] = "Burger";
    Сompanies[Сompanies["Bee"] = 1] = "Bee";
    Сompanies[Сompanies["Kfc"] = 2] = "Kfc";
    Сompanies[Сompanies["Actimel"] = 3] = "Actimel";
})(Сompanies || (Сompanies = {}));
// function getIncome(company: Сompanies){
//     switch(company){
//         case Companies.Burger:
//             return 300000;
//         case Companies.Bee:
//             return 500000;
//         case Companies.Kfc:
//             return 1000000;
//         case Companies.Actimel:
//             return 1150000;
//     }
// }
