function elemelons() {
    class Melon{
        constructor(weight, melonSort){
            if(new.target === Melon)
                throw new TypeError('Abstract class cannot be instantiated directly');
            this.weight = +weight;
            this.melonSort = melonSort;
            this.element = '';
            this._elementIndex = this.weight * this.melonSort.length;
        }

        get elementIndex(){
            return this._elementIndex
        }

        toString(){
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Watermelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = 'Water';
        }
    }

    class Firemelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = 'Fire';
        }
    }

    class Earthmelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = 'Earth';
        }
    }

    class Airmelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = 'Air';
        }
    }

    class Melolemonmelon extends Watermelon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = 'Water';
            this.elements = ['Fire', 'Earth', 'Air', 'Water'];
            this.elIndex=0;
        }

        morph(){
            this.element = this.elements[this.elIndex++%4];
        }
    }

    return {Melon, Watermelon, Firemelon, Earthmelon, Airmelon, Melolemonmelon};
}

let melon = elemelons().Watermelon;

let m = new melon(20, 'A de');
console.log('' + m);

console.log();

let lemon = elemelons().Melolemonmelon;

let l = new lemon(10, 'Lemon');
console.log('' + l);
console.log();
l.morph();
l.morph();
l.morph();
console.log('' + l);
