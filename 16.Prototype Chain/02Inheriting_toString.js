function personTeacherAndStudent() {

    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString(){
            let className = this.constructor.name;
            return className + ` (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString(){
            return super.toString().slice(0, -1) + `, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString(){
            return super.toString().slice(0, -1) + `, course: ${this.course})`;
        }
    }

    return {Person, Teacher, Student};
}

let Person = personTeacherAndStudent().Person;
let Teacher = personTeacherAndStudent().Teacher;
let Student = personTeacherAndStudent().Student;

let person = new Person('Maria', 'maria@abv.bg');
let teacher = new Teacher('Ivan', 'ivan@mail.bg', 'Mathematics');
let student = new Student('Kolio', 'kolio@dir.bg', 'PHP');
console.log('' + person);
console.log('' + teacher);
console.log('' + student);
