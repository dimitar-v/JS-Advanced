let extensibleObject = () => {
    return {
        extend: function (template) {
            for (const templateKey in template) {
                let element = template[templateKey];
                typeof element === "function" ? this.__proto__[templateKey] = element : this[templateKey] = element;
            }
        }
    };
};

let temp = {
    extensionMethod: function () {
        console.log('test');
    },
    extensionProperty: 'test'
};

let myObj = extensibleObject();
myObj.extend(temp);

console.log(myObj.__proto__);
console.log(myObj);

