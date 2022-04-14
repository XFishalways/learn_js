function Calculator() {
    this.method = {
        "+": (a, b) => +a + +b,
        "-": (a, b) => a - b,
    }
    this.addMethod = function (way, func) {
        this.method[way] = func;
    }
    this.calculate = function (str) {
        let realstr = str.split(" ");
        if(!this.method[realstr[1] || isNaN(a) || isNaN(b)]) {
            return "invalid calculate";
        }
        return this.method[realstr[1]](realstr[0], realstr[2]);
    }
}

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8

alert((powerCalc.calculate("3 ^ 0")));