function carOrder(order) {
    let engines = [{power: 90, volume: 1800}, {power: 120, volume: 2400}, {power: 200, volume: 3500}];

    function setEngine(hp) {
        for (const engine of engines) {
            if (engine.power >= hp)
                return engine;
        }
    }

    function setWeelsize(size) {
        if (size % 2 === 0)
            size--;

        return [size, size, size, size]
    }

    return {
        model: order.model,
        engine: setEngine(order.power),
        carriage: {
            type: order.carriage,
            color: order.color
        },
        wheels: setWeelsize(order.wheelsize)
    };
}

// version 2

function carOrder2(order) {
    let engines = [{power: 90, volume: 1800}, {power: 120, volume: 2400}, {power: 200, volume: 3500}];

    return {
        model: order.model,
        engine: engines.filter(e => e.power >= order.power)[0],
        carriage: {
            type: order.carriage,
            color: order.color
        },
        wheels: new Array(4).fill(order.wheelsize % 2 === 0 ? order.wheelsize - 1 : order.wheelsize)
    };
}


console.log(carOrder({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));
console.log();
console.log(carOrder({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));
console.log();
console.log(carOrder2({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));
console.log();
console.log(carOrder2({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));