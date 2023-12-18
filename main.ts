// импорт по умолчанию
// import{addTest, test} from "./src/scripts/geron";

// addTest();
// console.log(test);

// импорт как объект
// import * as geron from "./src/scripts/geron";
// geron.addTest();

// import name from "./src/scripts/geron";
// console.log(name);

// const office = {
//     tech: {
//         employersCount: 10,
//         avgSallary: 400000
//     },
//     design:{
//         employersCount: 50,
//         avgSallary: 200000
//     }
// }
// let avgSallaryOffice = 0
// // превращение объекта в массив
// Object.entries(office).forEach(([part, partInfo]) => {
//     console.log(part, partInfo.avgSallary);
// })

import {finishMaxSeason} from "./src/scripts/lesson8/working";
console.log("Самый  прибыльный сезон", finishMaxSeason);