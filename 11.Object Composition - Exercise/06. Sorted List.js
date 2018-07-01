function sortedList() {
    return {
        list: [],
        size: 0,
        add: function(element) {
            this.list.push(element);
            this.list = this.list.sort((a,b) => a-b);
            this.size++;
        },
        remove: function(index) {
            if (index >= 0 && index < this.list.length){
                this.list.splice(index, 1);
                this.size--;
            }
        },
        get: function(index) { return this.list[index];},
        print: function() { console.log(this.list) }
    };
}

let myList = sortedList();

myList.add(1);
myList.add(3);
myList.add(2);
myList.add(4);
console.log('Size: ' + myList.size);
myList.print();
myList.remove(2);
myList.remove(-5);
myList.print();
console.log('Get: ' + myList.get(2));
console.log('Get: ' + myList.get(-5));
console.log('Size: ' + myList.size);
myList.print();