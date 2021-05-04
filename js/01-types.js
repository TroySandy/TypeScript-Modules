var username = "instructor";
var password = "Letmein1234!";
var instructorId = 5;
var phoneNumber;
var email;
var socialSecurity;
var isMarried;
var greeting = "Hello";
var age = 40;
var currentYear = 2021;
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var companyName;
companyName = "Eleven Fifty";
var appName = "Twitter";
appName = "Instagram";
var isLoggedIn = true;
var isGoldLevelUser = true;
var studentList = ["Tom", "Tracy", "Nikaya"]; //more common array syntax
var allScores = [100, 92, 95, 96]; //less common array syntax
console.log("Student List:", studentList[0]);
var dataFromThirdParty = "12345";
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
function sayHelloToAll() {
    console.log("Hello to all!");
}
var undefinedVariable = undefined;
var nullVariable = null;
var usernameAndId; //declaring a tuple
usernameAndId = [1, 'YouKilledKenny']; //initializing it, must be in same order as declaring it. 
var WeaponType;
(function (WeaponType) {
    WeaponType[WeaponType["Sword"] = 0] = "Sword";
    WeaponType[WeaponType["Saber"] = 1] = "Saber";
    WeaponType[WeaponType["Spear"] = 2] = "Spear";
})(WeaponType || (WeaponType = {}));
var weapon = WeaponType.Sword;
console.log(weapon);
var CardType;
(function (CardType) {
    CardType[CardType["Ace"] = 1] = "Ace";
    CardType[CardType["Two"] = 2] = "Two";
    CardType[CardType["Three"] = 3] = "Three";
    CardType[CardType["Four"] = 4] = "Four";
})(CardType || (CardType = {}));
var cardType = CardType[2];
console.log(cardType);
//# sourceMappingURL=01-types.js.map