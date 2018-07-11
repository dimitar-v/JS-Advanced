let extensible = (function () {
    let id = 0;
    return class Extensible{
        constructor () {
            this.id = id++;
        }

        extend (template) {
        for (const templateKey in template) {
        let element = template[templateKey];
        typeof element === "function" ? Extensible.prototype[templateKey] = element : this[templateKey] = element;
    }
}
    }
})();

let obj1 = new extensible();
let obj2 = new extensible();
let obj3 = new extensible();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);

let temp = {
    extensionMethod: function () {
        console.log('test');
    },
    extensionProperty: 'test'
};

let myObj = new extensible();
myObj.extend(temp);

console.log(myObj.__proto__);
console.log(myObj);
