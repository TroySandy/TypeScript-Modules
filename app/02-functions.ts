function addNumbers(numOne: number, numTwo: number){
    return numOne + numTwo;
}

//works
addNumbers(1,2);

//errors
// addNumbers(1,2,3)
// addNumbers(1,2,3,'foo')

function addName(firstName: string, lastName: string){
    console.log(firstName, lastName);  
}

addName('Troy', "Sandy")

function addNumbersWithOptional(numOne: number, numTwo: number, someString?: string){
    console.log(someString);    
    return numOne + numTwo;
}

addNumbersWithOptional(1,2)
addNumbersWithOptional(1,2, 'This is optional')//optional params go last

function fullName(firstName: string, lastName: string, middleName?: string,){
    if(middleName == undefined){
        console.log(firstName, lastName);
        
    } else {
        console.log(firstName, middleName, lastName);
        
    } 
}

fullName('Troy', 'Sandy', 'Redacted')