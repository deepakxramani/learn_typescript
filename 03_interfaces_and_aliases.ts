// 3. Interfaces and Types Aliases
//  - Defining Interfaces
//  - Using Interfaces
//  - Extending Interfaces
//  - Type Aliases
//  - Intersection types


//* Defining Interfaces and Using Interfaces

// interface User {
//     name: string,
//     email: string,
//     password: string,
//     gender?: string         // '?' means => optional, will not throw an error if don't pass in arguements
//     age: number         
// }

// function abcd(obj: User) {
//     obj.age                         // you can acces the aobject here also their types methods, here number methods 
//     obj.age.toFixed()          
//     obj.name.toLowerCase()        // you can acces the aobject here also their types methods, here string methods 
// }


// // If any property missing here then it will throw an 
// // error and if any extra property defined here which 
// // doesn't exists in interface then also it'll throw an error.

// abcd({name: "harsh", email: "harsh@gmail.com", password: "harsh", age: 23 })




//* Extending Interfaces

// interface  User {
//     name: string,
//     email: string,
//     password: string
// }

// interface Admin extends User {      
//     admin: boolean,

// }

// function abcd(obj: Admin) {     // can access User properties as well as Admin's
//     obj.admin                   // if Admin interface is empty then only User property will show
//     obj.email
// }


// //& NOTE:- If two interfaces with the same name are created 
// //&        then they will get merged. And properties both
// //&        can be accessible in the function.


// interface Abcd {
//     name: string,
// }

// interface Abcd {
//     email: string,
// }




//* Type Aliases

// type sankhya = number;
// let a: sankhya;

// use case:

// let a: number | string | null;      // this looks weird!
//                                     // so we make our new type with desired data types

// type value = string | number | null;        // And it's reusable
// let b: value;                                   

// // in functions:
// function abcd(obj: value) {
    
// }

// abcd(true)          // will throw an error because it can only accepts string, number or null
// abcd("harsh")       // correct
// abcd(24)           // correct
// abcd(null)        // correct




//*  Intersection types

// let a: string | null;       // this is 'union'. It will either string or null
// let b: string & null;      // this is intersection, it will be a string and null both, but thats not how Intersection works.


// type User = {
//     name: string,
//     email: string,
// }

// type Admin = User & {
//     getDetails(user: string): void
// }

// function abcd(a: Admin) {           // thats how intersection works, similar to interface but there are some key difference
//     a.getDetails
//     a.email
// }

// key differences between interface and intersection.

// type abcd = number;     // doing this will throw us an error but this was
// type abcd = string;     // not happening in the interfaces with same name.



