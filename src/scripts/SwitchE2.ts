enum Operators{
    Tele2 = "Tele2",
    Beeline = "Beeline",
    Kcell = "Kcell",
    Active = "Active"
}

function getPrice(OperatorName:Operators){
    switch(OperatorName){
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

let operatorName: Operators = Operators.Active;
console.log(`Цена подключения тарифа для оператора ${operatorName} - составляет ${getPrice(operatorName)} тенге`)

enum Сompanies{
    Burger,
    Bee,
    Kfc,
    Actimel
}

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