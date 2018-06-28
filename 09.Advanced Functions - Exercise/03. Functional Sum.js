let result = (function () {
    let sum = 0;

    return function add(num) {
        sum += num;
        add.toString = () => sum;
        return add;
    }
})();

console.log(result(1).toString());
console.log();
console.log(result(1)(6)(-3).toString());