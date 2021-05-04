class Person { 
    firstName: string; 
    lastName: string;

    sayHello(){
        console.log('Hello', this.firstName);
        
    }

    sayHelloToFullName(){
        console.log('Hello', this.firstName, this.lastName);
        
    }
}

let phil: Person = new Person();

phil.firstName = 'Phil'
phil.lastName = 'Donahue'

console.log(phil);

let someVariableName: Person = new Person();

let kenn: Person = new Person();
kenn.firstName = 'Kenn';
kenn.sayHello();

let andy: Person = new Person();
andy.firstName = 'Sheriff';
andy.lastName = 'Holler'
andy.sayHelloToFullName();

class Game { 
    constructor(name: string, maker: string){
        this.gameName = name;
        this.gameMaker = maker
    }
    gameName: string;
    gameMaker: string;
}

let battleShip: Game = new Game('Battleship', 'Hasbro');
console.log(battleShip);

class Vehicle {
    type: string;
    make: string;
    model: string;
    manufactureYear: number;
    runs: boolean;
    topSpeed: number;
}

class Automobile extends Vehicle {
    isSelfDriving: boolean;
}

let myCar: Automobile = new Automobile();
myCar.isSelfDriving = false;
myCar.topSpeed = 200;
myCar.make = 'Volvo';

class Motorcycle extends Vehicle{
    easyToDoWheelie: boolean;
}

let myMotorcycle: Motorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true;
myMotorcycle.topSpeed = 180;

class Animal { 
    diurnal: boolean;
    predator: boolean;
    territory: string;
}

class Bear extends Animal{
    hiberates: boolean;
}

class Tiger extends Animal{
    shouldBePet: boolean;
}

let whinnyThePooh: Bear = new Bear();
whinnyThePooh.hiberates = true;
whinnyThePooh.predator = true;

let tigger: Tiger = new Tiger();
tigger.shouldBePet = true;

class Store { //same as below
    constructor(name: string, city: string){
        this.name = name;
        this.city = city;
    }
    name: string;
    city: string;
}

let ikea: Store = new Store('Ikea', 'Fishers');

class Store2 { //dry version of above
    constructor(public name: string, public city: string){}
}

let apple: Store = new Store('Apple', 'Keystone Mall')

class Employee extends Person{
    private _salary: number;

    getSalary(): string{
        return this._salary.toString();
    }

    setSalary(newSalary: number) {
        this._salary = newSalary;
    }
}

let newEmployee: Employee = new Employee();
newEmployee.setSalary(30000);
//newEmployee._salary = 0 //will not work
let salaryResults: string = newEmployee.getSalary();
console.log('The salary is:', salaryResults);
