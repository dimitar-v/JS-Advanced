class Entity{
    constructor(name){
        if(new.target === Entity)
            throw new TypeError("Can't do this!!!");

        this.name = name;
    }
}

module.exports = Entity;