function sortArray(arr, order) {
    switch (order){
        case 'asc': return arr.sort((a,b) => a - b);
        case 'desc': return arr.sort((a,b) => b - a);
    }
}

function sortArray2(arr, order) {
    let sortStrategy = {
        'asc': (a,b) => a - b,
        'desc': (a,b) => b - a
    };
    return arr.sort(sortStrategy[order]);
}


console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log();
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));
console.log();
console.log();
console.log(sortArray2([14, 7, 17, 6, 8], 'asc'));
console.log();
console.log(sortArray2([14, 7, 17, 6, 8], 'desc'));
