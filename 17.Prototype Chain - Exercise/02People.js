function company() {
    let counter = 0;
    class Employee{
        constructor(name, age, salary = 0, tasks = []){
            if(new.target === Employee)
                throw new TypeError('This class is Abstract');

            this.name = name;
            this.age = age;
            this.salary = salary;
            this.tasks = tasks.slice();
        }

        work(){
            let tasksCount = this.tasks.length;
            console.log(this.name + this.tasks[counter++%tasksCount]);
        }

        collectSalary(){
            console.log(this.name + ' received ' + this.calcSalary() + ' this month.');
        }

        calcSalary(){
            return this.salary;
        }
    }

    class Junior extends Employee{
        constructor(name, age, salary) {
            let tasks = [' is working on a simple task.'];
            super(name, age, salary, tasks);
        }
    }

    class Senior extends Employee{
        constructor(name, age, salary) {
            let tasks = [' is working on a complicated task.',
                ' is taking time off work.',
                ' is supervising junior workers.'];
            super(name, age, salary, tasks);
        }
    }

    class Manager extends Employee{
        constructor(name, age, salary, dividend = 0) {
            let tasks = [' scheduled a meeting.',
                ' is preparing a quarterly report.'];
            super(name, age, salary, tasks);
            this.dividend = dividend;
        }

        calcSalary(){
            return this.salary + this.dividend;
        }
    }

    return {Employee, Junior, Senior, Manager};
}

let junior = company().Junior;
let senior = company().Senior;
let manager = company().Manager;

let ivan = new junior('Ivan', 23);
ivan.salary = 2000;
console.log(ivan);
console.log();

let stoian = new senior('Stoyan', 35, 3500);
console.log(stoian);
console.log();

let mitko = new manager('Mitko', 39, 5000, 15);
mitko.dividend = 250;
console.log(mitko);
console.log();
mitko.work();
mitko.work();
mitko.work();
mitko.work();
stoian.work();
ivan.work();
ivan.work();
stoian.work();
stoian.work();
stoian.work();
mitko.collectSalary();
stoian.collectSalary();

