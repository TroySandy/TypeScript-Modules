let username: string = "instructor";
let password: string = "Letmein1234!";
let instructorId: number = 5;

let phoneNumber: number;
let email: string;

let socialSecurity: number;
let isMarried: boolean;

let greeting = "Hello";

let age: number = 40;
let currentYear: number = 2021;
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;

let companyName: string;
companyName = "Eleven Fifty";

let appName: string = "Twitter";
appName = "Instagram";

let isLoggedIn: boolean = true;
let isGoldLevelUser: boolean = true;

let studentList: string[] = ["Tom", "Tracy", "Nikaya"]; //more common array syntax
let allScores: Array<number> = [100, 92, 95, 96]; //less common array syntax
console.log("Student List:", studentList[0]);

let dataFromThirdParty: any = "12345";
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);

dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);

function sayHelloToAll(): void {
  console.log("Hello to all!");
}

let undefinedVariable: undefined = undefined;
let nullVariable: null = null;

let usernameAndId: [number, string]; //declaring a tuple
usernameAndId = [1, 'YouKilledKenny']; //initializing it, must be in same order as declaring it. 

enum WeaponType { Sword, Saber, Spear}
let weapon: WeaponType = WeaponType.Sword
console.log(weapon);

enum CardType { Ace = 1, Two, Three, Four}
let cardType: string = CardType[2]
console.log(cardType);

