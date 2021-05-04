//cannot instantiate with interfaces.  let a: Animal = new Animal() will not work
// let lassie: Animal = {
//     name: "lassie",
//     numberOfLegs: 4
// }
var lassie;
function sayHello(name) {
    var someNum = 1 + 2;
    var someOtherNum = 1 + 2;
    return name;
}
var Apples = /** @class */ (function () {
    function Apples() {
    }
    Apples.prototype.setTimeOfPurchase = function (d) {
        console.log("Apples purchased on", d);
    };
    return Apples;
}());
var myApples = new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()));
//# sourceMappingURL=04-interfaces.js.map