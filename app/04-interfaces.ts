interface Animal {
  name: string;
  numberOfLegs: number;
}

//cannot instantiate with interfaces.  let a: Animal = new Animal() will not work

// let lassie: Animal = {
//     name: "lassie",
//     numberOfLegs: 4
// }

let lassie: {
  name: "lassie";
  numberOfLegs: 4;
};

function sayHello(name: string): string {
  var someNum = 1 + 2;
  var someOtherNum = 1 + 2;
  return name;
}

interface Product {
  name: string;
  price: number;
  setTimeOfPurchase(d: Date);
}

class Apples implements Product {
  name: "Apples";
  price: 5.5;
  setTimeOfPurchase(d: Date) {
    console.log("Apples purchased on", d);
  }
}

let myApples: Apples = new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()))
