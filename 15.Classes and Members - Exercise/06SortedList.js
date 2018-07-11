class sortedList {
    constructor () {
        this.list = [];
        this.size = 0;
    }

    add(element) {
        this.list.push(element);
        this.list = this.list.sort((a,b) => a-b);
        this.size++;
    }

    remove(index) {
        if (index >= 0 && index < this.list.length){
            this.list.splice(index, 1);
            this.size--;
        }
    }

    get(index) {
        return this.list[index];
    }

}

let myList = new sortedList();

myList.add(1);
myList.add(3);
myList.add(2);
myList.add(4);
console.log('Size: ' + myList.size);
console.log(myList.list);
myList.remove(2);
myList.remove(-5);
console.log(myList.list);
console.log('Get: ' + myList.get(2));
console.log('Get: ' + myList.get(-5));
console.log('Size: ' + myList.size);
console.log(myList.list);
