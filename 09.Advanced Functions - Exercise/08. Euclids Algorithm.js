function euclidsAlgorithm(a, b){

    while (b !== 0) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}

function euclidsAlgorithm2(a, b){
    while (b !== a)
        a > b ? a -= b : b -= a;

    return a;
}

let result = (a, b) => b === 0 ? a : result(b, a % b);

console.log(euclidsAlgorithm(252, 105));
console.log();
console.log(euclidsAlgorithm2(252, 105));
console.log();
console.log(result(252, 105));