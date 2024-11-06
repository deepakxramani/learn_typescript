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
var BottleMaker = /** @class */ (function () {
    function BottleMaker(name) {
        this.name = name;
    }
    return BottleMaker;
}());
var b1 = new BottleMaker("milton");
