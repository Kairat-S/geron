"use strict";
function getName(humanName) {
    console.log(humanName);
}
// getName("Kairat")
// getName("Kair")
// getName("JasKairat")
function mult(a = 0, b = 0) {
    return a * b;
}
function division(a = 0, b = 0) {
    if (b == 0) {
        return "Error! Na 0 delit nel'zia";
    }
    else
        return a / b;
}
console.log(mult(15, 6));
console.log(division(25));
