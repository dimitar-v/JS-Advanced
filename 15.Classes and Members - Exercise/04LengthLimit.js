class Stringer {
    constructor(innerString , length){
        this.innerString  = innerString ;
        this.innerLength = 0;
        this.length = length;
    }
    get length() {
        return this.innerLength;
    }

    set length(value) {
        this.innerLength += value;
        if ( this.innerLength < 0)
            this.innerLength = 0;
    }
    increase(num) {
        this.length = +num;
    }

    decrease(num){
        this.length = -(+num);
    }

    toString(){
        if(this.innerString.length <= this.length)
            return this.innerString ;
        return this.innerString.slice(0,this.length) + '...';
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString(), test.length); //Test

test.decrease(3);
console.log(test.toString(), test.length); //Te...

test.decrease(5);
console.log(test.toString(), test.length); //...

test.increase(4);
console.log(test.toString(), test.length); //Test
