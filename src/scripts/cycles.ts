// let num = 0;
// while (num <5) {
//     console.log(num);
//     num++;
// }

let grades: number[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

let goodgrades: number[] = [];
for(let i = 0; i < grades.length; i++) {
    if (grades[i]>5) {
        goodgrades.push(grades[i]);
    }
}
console.log(goodgrades);

type TMonths = {
    title: string,
    days: number
}

let months: TMonths[] = [
    {title: "Jan", days: 31}, {title: "Feb", days: 28}, {title: "Mar", days: 31}, {title: "Apr", days: 30}, {title: "May", days: 31}
]

months.push({title: "June", days: 30});

console.log(months);

let sumOfDays = 0;
let minDays = months[0].days;
let maxDays = months[0].days;


for(let i=0; i<months.length; i++) {
    if(months[i].days < 30) {
        console.log(months[i]);
    }

    if (months[i].days > maxDays) {
        maxDays = months[i].days;
    }

    if (months[i].days < minDays){
        minDays = months[i].days;
    }

    sumOfDays += months[i].days;
}

console.log("Summa vseh dnei v mesiacah " + sumOfDays);
console.log("Max dnei " + maxDays);
console.log("Min dnei " + minDays);
