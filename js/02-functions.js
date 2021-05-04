function addNumbers(numOne, numTwo) {
    return numOne + numTwo;
}
//works
addNumbers(1, 2);
//errors
// addNumbers(1,2,3)
// addNumbers(1,2,3,'foo')
function addName(firstName, lastName) {
    console.log(firstName, lastName);
}
addName('Troy', "Sandy");
function addNumbersWithOptional(numOne, numTwo, someString) {
    console.log(someString);
    return numOne + numTwo;
}
addNumbersWithOptional(1, 2);
addNumbersWithOptional(1, 2, 'This is optional'); //optional params go last
function fullName(firstName, lastName, middleName) {
    if (middleName == undefined) {
        console.log(firstName, lastName);
    }
    else {
        console.log(firstName, middleName, lastName);
    }
}
fullName('Troy', 'Sandy', 'Redacted');
//# sourceMappingURL=02-functions.js.map