let data = require('./data');

function sort(property) {
    return [...data].sort((a,b) => a[property].localeCompare(b[property]));
}

function filter(property, value) {
    return [...data].filter(a => a[property] === value);
}

//console.log(sort('status'));
//console.log(filter('shipTo', 'London'));

result.sort = sort;
result.filter = filter;
