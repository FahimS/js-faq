class Person{
    constructor(firstName, lastName, salary){
        this.firstName=firstName;
        this.lastName=lastName;
        this.salary=salary;
    }
}

const heroPerson=new Person('Hero', 'Alam', 30000);
console.log(heroPerson);
const friendlyPerson=new Person('Hero', 'Alam', 23000);
console.log(friendlyPerson);