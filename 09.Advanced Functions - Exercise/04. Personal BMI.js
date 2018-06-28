function personalBMI(name, age, weight, height) {
    let person = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        }
    };
    person.BMI = Math.round(weight / ((height / 100) ** 2));

    switch (true){
        case person.BMI < 18.5 : person.status = 'underweight'; break;
        case person.BMI < 25 : person.status = 'normal'; break;
        case person.BMI < 30 : person.status = 'overweight'; break;
        default : person.status = 'obese'; person.recommendation = 'admission required'; break;
    }
    return person;
}

console.log(personalBMI("Peter", 29, 75, 182));
console.log();
console.log(personalBMI("Honey Boo Boo", 9, 57, 137));