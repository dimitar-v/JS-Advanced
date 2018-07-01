function takeACare(worker) {
    if (worker.handsShaking) {
        worker.bloodAlcoholLevel += worker.weight * 0.1 * worker.experience;
        worker.handsShaking = false;
    }
    return worker;
}

console.log(takeACare({
    weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true
}));
console.log();
console.log(takeACare({
    weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true
}));
console.log();
console.log(takeACare({
    weight: 95,
    experience: 3,
    bloodAlcoholLevel: 0,
    handsShaking: false
}));