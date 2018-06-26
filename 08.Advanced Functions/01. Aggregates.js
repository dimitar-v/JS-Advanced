function aggregates(array) {

    function reducer (arr, func){
        let result = arr[0];
        arr.slice(1).forEach(a => result = func(result, a));
        return result;
    }

    console.log('Sum = ' + reducer(array, (a, b) => a + b));
    console.log('Min = ' + reducer(array, (a, b) => a > b ? b : a));
    console.log('Max = ' + reducer(array, (a, b) => a < b ? b : a));
    console.log('Product = ' + reducer(array, (a, b) => a * b));
    console.log('Join = ' + reducer(array, (a, b) => '' + a + b));
}


aggregates([2,3,10,5]);
console.log();
aggregates([5, -3, 20, 7, 0.5]);