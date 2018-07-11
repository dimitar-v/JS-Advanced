function personAndTeacher() {

    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

    }

    return {Person, Teacher};
}

let Person = personAndTeacher().Person;
let Teacher = personAndTeacher().Teacher;

let person = new Person('Maria', 'maria@abv.bg');
let teacher = new Teacher('Ivan', 'ivan@mail.bg', 'Mathematics');

console.log(person);
console.log(teacher);