let getFibonacci = () => {
    [f1, f2] = [0,1];
    return () => {
        [f1, f2] = [f2, f1+f2];
        return f1;
    }
};

let fib = getFibonacci();

console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());

