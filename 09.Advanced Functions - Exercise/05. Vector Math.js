let solution = (function () {
    return {
        add: ([xa, ya], [xb, yb]) => [xa + xb, ya + yb],
        multiply: ([x, y], s) => [x * s, y * s],
        length: ([x, y]) => Math.sqrt(x ** 2 + y ** 2),
        dot: ([xa, ya], [xb, yb]) => xa * xb + ya * yb,
        cross: ([xa, ya], [xb, yb]) => xa * yb - ya * xb
    }
})();

//let solution = vectorMath;
console.log(solution.add([1, 1], [1, 0]));
console.log();
console.log(solution.multiply([3.5, -2], 2));
console.log();
console.log(solution.length([3, -4]));
console.log();
console.log(solution.dot([1, 0], [0, -1]));
console.log();
console.log(solution.cross([3, 7], [1, 0]));