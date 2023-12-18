function getName(humanName: string){
    console.log(humanName);
}

// getName("Kairat")
// getName("Kair")
// getName("JasKairat")

function mult(a: number =0, b: number = 0){
    return a*b
}

function division(a: number =0, b: number = 0){
    if (b==0) {
        return "Error! Na 0 delit nel'zia";
    }
    else 
        return a/b;
}

console.log(mult(15,6));
console.log(division(25))
