let N: number = 200000;

function getBonus(salary: number){
    let bonus: number = 0;
    if (salary>400000) {
        bonus=salary*10/100;
    }
    else if (salary>300000){
        bonus=salary*15/100;
    }
    else {
        bonus=salary*20/100;
    }
    return salary+bonus;
}

function determineEffectiveness(quality: number){
    if (quality>=4) {
        console.log(`Effectiven! Zarplata s bonusom ${getBonus(N)} tenge`);
    }
    else if (quality>=3) {
        console.log(`Ulutshit resultat! Zarplata bez bonusa ${N} tenge`);
    }
    else {
        console.log(`Perekvalifikacia! Zarplata bez bonusa ${N} tenge`);
    }
}

let experience1: number = 10;
let projects1: number = 40;
let qualityOfWorking1: number = projects1/experience1;
console.log(qualityOfWorking1);

determineEffectiveness(qualityOfWorking1);