function mapSort(map, sortMethod) {
       if (sortMethod)
           return new Map([...map.entries()].sort(sortMethod));

        return new Map([...map.entries()].sort((a,b) => a[0] > b[0]));
}

module.exports = mapSort;