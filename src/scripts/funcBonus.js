"use strict";
let N = 200000;
function getBonus(salary) {
    let bonus = 0;
    if (salary > 400000) {
        bonus = salary * 10 / 100;
    }
    else if (salary > 300000) {
        bonus = salary * 15 / 100;
    }
    else {
        bonus = salary * 20 / 100;
    }
    return salary + bonus;
}
function determineEffectiveness(quality) {
    if (quality >= 4) {
        console.log(`Effectiven! Zarplata s bonusom ${getBonus(N)} tenge`);
    }
    else if (quality >= 3) {
        console.log(`Ulutshit resultat! Zarplata bez bonusa ${N} tenge`);
    }
    else {
        console.log(`Perekvalifikacia! Zarplata bez bonusa ${N} tenge`);
    }
}
let experience1 = 10;
let projects1 = 40;
let qualityOfWorking1 = projects1 / experience1;
console.log(qualityOfWorking1);
determineEffectiveness(qualityOfWorking1);
