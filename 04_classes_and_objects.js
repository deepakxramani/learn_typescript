// 4. Classes & Objects
//  - Class definition
//  - Constructors
//  - this keyword
//  - Access modifiers (public, private, protected)
//  - Readonly properties
//  - Optional properties
//  - Parameter properties
//  - Getters and Setters
//  - Static members
//  - Abstract classes and methods
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//* 1. Class definition
// class Device {
//     name = "lg";
//     price = "12000";
//     category = "digital";
// }
// let d1 = new Device()
// console.log(d1)
// let d2 = new Device()
// console.log(d1)
// class Bottle {
//     radius = 120;
//     price = 100;
//     color = "white";
// }
// let b1 = new Bottle()
// console.log(b1)
//* 2. Constructors -> A constructor is a method within a class that's automatically called when an object of that class is created.
//*                    Constructor Ek aisi machine hai jo ki produce kr rhi hai final consumable product.
//*                    It will not be a biscuit but a biscuit maker, 
//*                    It will not be a bottle but a bottle maker.
//*                    Access modifiers likhna zaruri hai declaration se pehle
// Ex 1.
// class BottleMaker {
//     constructor(public name: string, public price: number) {
//     }
// }
// let b1 = new BottleMaker("Milton", 1200);
// console.log(b1)
// Ex 2.
// class HumanMaker {           // When a human is born their age always is 0 but their names are different from each other
//     age = 0;                // So here we can reuse this constructor for creating many humans but their age will remain 0.
//     constructor(public name: string, public isHandsome: boolean) {
//     }
// }
// let h1 = new HumanMaker('Harsh', true)
// console.log(h1) 
// Ex 3.
// class HumanMaker {
//     constructor(public a: string, public age: number = 0) {
//     }
// }
// let h1 = new HumanMaker('Harsh', true)      // this will throw an error because it demands string
// let h2 = new HumanMaker('Harsh')               // correct 
// let h3 = new HumanMaker('Harsh')              // if age is not sent then it is by default 0
// console.log(h3)
// let h4 = new HumanMaker('Harsh', 20)         // now becomes 20
// console.log(h4)
//! So why age was written in the class in Ex. 2 instead of in constructor
//! In example 3 its because a human can't aged 20  directly
//& Constructor sirf wo mang rha hai jo hume set karna hai.
//& To understand this see Example 4:
// Ex. 4
// class BottleMaker {
//     constructor(public brand: string, public price: number, public color: string, public material: string){
//     }
// }
// let b1 = new BottleMaker("Milton", 1200, "yellow", "metal")
// console.log(b1)
// let b2 = new BottleMaker("Cello", 120, "blue", "plastic")
// console.log(b2)
// Ex. 5   (Music Player)
// class Music {
//     constructor(public name: string, public artist: string, public thumbnail: string = "something.jpg", public lenght: number, public free: boolean){
//         if(!thumbnail){
//             this.thumbnail = "something.jpg"
//         }
//     }
// }
// let M1 = new Music("Chal Chhaiya Chaiya", "Harsh Sharma", "", 1200, false);
// let M2 = new Music("Kab Tak", "Harsh Sharma", "Yondu.jpg", 3, true);
// M2.name = "Koi dusra song";
// OR can be written like this both serves same purpose
// TypeScript provides the above feature
// class Music {
//     public name;
//     public artist;
//     public thumbnail;
//     public length;
//     public free;
//     constructor(name: string, artist: string, thumbnail: string = "something.jpg", length: number, free: boolean) {
//         this.name = name;
//         this.artist = artist;
//         this.thumbnail = thumbnail;
//         this.length = length;
//         this.free = free;  
//     }
// }
//* 3. 'this' keyword -> When you are inside a class you can create different methods
//*                      So if you want to touch a particular variable we have to give 'this' reference to that varibale
//*                      which helps us accessing that varibale from its memory location where it stored.
// class Abcd {
//     name = "Harsh";
//     changeSomeStuff(){          // Agr is method/function mein tum koi variable access karna chahte ho
//                                 // Jo ki is method ka part nahi hai so tum "this" ka use karoge!
//         console.log(this.name)
//         this.changeSomeMoreStuff()
//         let a = 12;     // here "this" is not required because its the part of this function
//         this.ghij       // you can't create properties inside functions 
//     }
//     changeSomeMoreStuff() {
//         console.log("hey")
//     }
// }
// class BottleMaker {
//     // public name;
//     constructor(public name: string){       // this name parameter value
//         this.name = name;                   // is stored here in this.name variable
//     }
// }
// let b1 = new BottleMaker("milton")
// Shorthand
// class BottleMaker {
//     constructor(public name: string) { }                      
// }
// let b1 = new BottleMaker("milton")
//* 4. Access modifiers (public, private, protected)
// class BottleMaker {
//     constructor(public name: string) {
//         this.name = name;
//     }
//     changing() {
//         this.name = "harsh";
//     }
// }
// let b1 = new BottleMaker("Milton")
// b1.changing()
// class BottleMaker {
//     // public halua: string = "halua";
//     private halua: string = "halua";               // cannot be used outside this class
//     constructor(public name: string) { } 
//    // constructor(private name: string) { }       // will console the result but TypeScript will
// }                                               // give us the error on private as it only accessible in the same class.
// class MetalBottleMaker extends BottleMaker {
//     constructor(name: string) {
//         super(name)                             // this super will the name value to base class BottleMaker
//     }
//     getValue(){
//         console.log(this.name);
//         //console.log(this.halua);            // cannot be accessible if declared private base class.
//     }
// }
// let b1 = new MetalBottleMaker("Milton");
// b1.getValue()
//* Protected
// class BottleMaker {
//     // public name = "Milton";
//     // private name = "Milton";     // private -> can be used in this class only
//     protected name = "Milton";      // protected -> can be used in this class as well as if any other class extends this class then its also accessible there. 
// }
// class MetalBottleMaker extends BottleMaker {
//     public material = "Metal";
//     changeName(){
//         this.name = "some other name";      // will change the name but TypeScript will give you warning
//                                             // that property name is private and only accessible within class BottleMaker
//         this.name = "some other name";      // you can change the name in case of protected.
//     }                                      
// }
// let b1 = new MetalBottleMaker()
// b1.changeName()
// b1.name = "some othet name"                 // Warning -> Property 'name' is protected and only accessible within class 'BottleMaker' and its subclasses.
//* 5. Readonly properties And Optional properties
//& Readonly
// class User {
//     constructor(public readonly name: string) {
//     }
//     changeName() {
//         this.name = "hellyow";      // if 'readonly' used then you cannot change the property 
//     }                               // though it will change the value but TypeScript will warning.
// }
// let u1 = new User("Harsh")
// u1.changeName()
//& Optional
// class User {
//     constructor(public name: string, public age: number, public gender?: string) { }
// }
// let u1 = new User("Harsh", 25, "Male")
// let u2 = new User("LaqBataq", 18)               // will not throw an error if gender is not provided
//                                                 // as it was declared optional... "gender: undefined"
//* 6. Parameter properties
// Noraml way:
// class User {
//     public name;
//     public age;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }
// Parameter properties way:    initialize and declare at the same time.
// class User {
//     constructor(public name: string, public age: number) { }
// }
//* 7. Getters and Setters
// Normal Way:
// class User {
//     constructor(public name: string, public age: number) { }
//     getName() {
//         return this.name;
//     }
//     setName(value: string) {
//         this.name = value
//     }
// }
// let u1 = new User("harsh", 25);
// console.log(u1.getName());
// u1.setName("Harshita")
// console.log(u1.getName());
// TypeScript way:  'get' and 'set' keyword
// class User {
//     constructor(public _name: string, public _age: number) { }
//     get name(){
//         return this._name
//     }
//     set name(value: string){
//         this._name = value;
//     }
//     get age() {
//         return this._age
//     }
// }
// let u1 = new User("Harsh", 25);
// console.log(u1.name);               // Harsh
// console.log(u1.age)                 // 25
// // setting value
// u1.name = "harshita";
// console.log(u1.name);              // harshita
//* 8. Static Members
var Hero = /** @class */ (function () {
    function Hero() {
    }
    // static members will not be included in your instances.
    Hero.getRandomNumber = function () {
        return Math.random();
    };
    Hero.version = 1.0; // you can access them without creating an object instance, without 'static' keyword you'll get undefined...
    return Hero;
}());
//* 9. Abstract Classes and Methods     -> Abstract - Chhupa hua arth
// This Payment class should not be instantiated with new keyword 
//  Q.1 kya instantiate kar skte hain? Ans - yes
//  Q2. Instantiate karna chaiye? Ans - nahi
//  Q.3 Kyun? Ans - Because this class is esssentials not a complete class, holds base data only.
// Ex.1
var Payment = /** @class */ (function () {
    function Payment(amount, account) {
        this.amount = amount;
        this.account = account;
    }
    Payment.prototype.isPaymentValid = function () {
        return this.amount > 0;
    };
    return Payment;
}());
var Paytm = /** @class */ (function (_super) {
    __extends(Paytm, _super);
    function Paytm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Paytm;
}(Payment));
// Ex.2     // Gas is essential if you want to cook anything
var CookingEssentials = /** @class */ (function () {
    function CookingEssentials(gas, gasKaName) {
        this.gas = gas;
        this.gasKaName = gasKaName;
    }
    return CookingEssentials;
}());
var Sabji = /** @class */ (function (_super) {
    __extends(Sabji, _super);
    function Sabji() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Sabji;
}(CookingEssentials));
var Cake = /** @class */ (function (_super) {
    __extends(Cake, _super);
    function Cake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cake;
}(CookingEssentials));
