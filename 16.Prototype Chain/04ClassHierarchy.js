function hierarchy() {
    class Figure{
        constructor(){
            if(new.target === Figure)
                throw new TypeError("Can't do this!!!");
        }

        get area(){
            let figure = {
                Circle: this.radius ** 2 * Math.PI,
                Rectangle: this.width * this.height
            };

            return figure[this.constructor.name]
        }

        toString(){
            let props = Object.getOwnPropertyNames(this).map(p => p + ': ' + this[p]);
            return this.constructor.name + ' - ' + props.join(', ');
        }
    }

    class Circle extends Figure{
        constructor(radius){
            super();
            this.radius = radius;
        }

        //get area(){
        //    return this.radius ** 2 * Math.PI;
        //}
    }

    class Rectangle extends Figure{
        constructor(width, height ){
            super();
            this.width = width;
            this.height = height;
        }

        //get area(){
        //    return this.width * this.height;
        //}
    }

    return {Figure, Circle, Rectangle}
}

let Figure = hierarchy().Figure;
let Circle = hierarchy().Circle;
let Rectangle = hierarchy().Rectangle;

//let f = new Figure();       //Error
let c = new Circle(5);
console.log(c.area);        //78.53981633974483
console.log(c.toString());  //Circle - radius: 5
let r = new Rectangle(3,4);
console.log(r.area);        //12
console.log(r.toString());  //Rectangle - width: 3, height: 4
