"use strict";
let com = {
    comIncome: 3200000,
    numberEmployees: 416,
    firedEmployees: 60,
    newEmployees: 45,
};
console.log(com.comIncome, com.numberEmployees, com.firedEmployees, com.newEmployees);
com.numberEmployees = 400;
com.firedEmployees = 44;
com.newEmployees = 64;
console.log(com.comIncome, com.numberEmployees, com.firedEmployees, com.newEmployees);
