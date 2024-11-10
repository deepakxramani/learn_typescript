// Type Guards (type narrowing) and TypeScript Utility Types
//  -  Using typeof and instanceof
//  -  Partial,  Required, Readonly 
//* 1. Type Guards (type narrowing) using typeof :
// function abcd(arg: string | number | any) {
//     //arg.                                // So when you want use methods you wil
//                                         // see only see those methods which are common in both the types.
//     if(typeof arg === "number"){
//         arg.toFixed();                             // you will see only number methods
//         return "number";
//     }
//     else if(typeof arg === "string") {
//         arg.toLowerCase();                           // you will see only string methods
//         return "string";
//     }
//     else {
//         throw new Error("something went wrong!")
//     }
// }
// console.log(abcd(12))
// console.log(abcd("hello"));
// console.log(abcd(true));
//* Type Guards (type narrowing) using instanceof :
var TvRemote = /** @class */ (function () {
    function TvRemote() {
    }
    TvRemote.prototype.switchTvOff = function () {
        console.log("switcing off tv");
    };
    return TvRemote;
}());
var CarRemote = /** @class */ (function () {
    function CarRemote() {
    }
    CarRemote.prototype.switchCarOff = function () {
        console.log("switcing off car");
    };
    return CarRemote;
}());
var tv = new TvRemote();
var car = new CarRemote();
function switchOffKaro(device) {
    if (device instanceof TvRemote) {
        device.switchTvOff();
    }
    else if (device instanceof CarRemote) {
        device.switchCarOff();
    }
}
switchOffKaro(tv);
switchOffKaro(car);
