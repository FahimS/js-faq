const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount, tips, tax) {
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }

}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000
}

const friendlyPerson = {
    firstName: 'Fahim',
    lastName: 'Shahriar',
    salary: 30000
}

// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// heroChargeBill(3000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);

// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(1500);
// friendlyChargeBill(1500);
// console.log(friendlyPerson.salary);


normalPerson.chargeBill.call(heroPerson, 900, 100, 10);
console.log(heroPerson.salary);

normalPerson.chargeBill.apply(friendlyPerson,[3000, 300, 30]);
console.log(friendlyPerson.salary);