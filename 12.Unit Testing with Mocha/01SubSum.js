function subsum (arr, startI, endI) {
    if (startI < 0) startI = 0;
    if (endI > arr.length - 1)  endI = arr.length - 1;
    let result = 0;
    for (let i = startI; i <= endI; i++) {
        result += +arr[i];
    }
    return result;
}

console.log(subsum([10, 20, 30, 40, 50, 60], 3, 300));	//150
console.log(subsum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));	//3.3
console.log(subsum([10, 'twenty', 30, 40], 0, 2));	//NaN
console.log(subsum([], 1, 2));	//0
console.log(subsum('text', 0, 2));	//NaN
