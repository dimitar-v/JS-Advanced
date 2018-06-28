let breakfastRobot = function () {
    let robot = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
        recipes: {
            apple: {
                carbohydrate: 1,
                flavour: 2
            },
            coke: {
                carbohydrate: 10,
                flavour: 20
            },
            burger: {
                carbohydrate: 5,
                fat: 7,
                flavour: 3
            },
            omelet: {
                protein: 5,
                fat: 1,
                flavour: 1
            },
            cheverme: {
                protein: 10,
                carbohydrate: 10,
                fat: 10,
                flavour: 10
            },
        },
        cook: function (product, quantity) {
            for (const ingr in this.recipes[product]) {
                if (this[ingr] < this.recipes[product][ingr] * quantity) {
                    return `Error: not enough ${ingr} in stock`;
                }
            }
            for (const ingr in this.recipes[product]) {
                this[ingr] -= this.recipes[product][ingr] * quantity;
            }
            return 'Success';
        }
    };

    return function (input) {

        [command, product, quantity] = input.split(' ');
        switch (command) {
            case 'restock':
                robot[product] += +quantity;
                return 'Success';
            case 'prepare':
                return robot.cook(product, +quantity);
            case 'report':
                return `protein=${robot.protein} carbohydrate=${robot.carbohydrate} fat=${robot.fat} flavour=${robot.flavour}`;
        }
    }
};

let manager = breakfastRobot();

console.log(manager('restock carbohydrate 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare burger 1'));
console.log(manager('report'));
//===================
//console.log(manager('prepare cheverme 1'));
//console.log(manager('restock protein 10'));
//console.log(manager('prepare cheverme 1'));
//console.log(manager('restock carbohydrate 10'));
//console.log(manager('prepare cheverme 1'));
//console.log(manager('restock fat 10'));
//console.log(manager('prepare cheverme 1'));
//console.log(manager('restock flavour 10'));
//console.log(manager('prepare cheverme 1'));
//console.log(manager('report'));