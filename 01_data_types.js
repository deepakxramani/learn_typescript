"use strict";
//  Basic Types
//  - Primitive types (number string, boolean)
//  - Arrays
//  - Tuples
//  - Enums
//  - Any, Unknown, Void, Null, Undefined, Never
//* Primitive Types:
// let a = 12;
// a = 'string';        // you can't change the type once it's declared 
// as number or any other data type in typescript.
// let  b = true;
// b = 12;      
//* Arrays:
// let arr1 = [1, 2, 3, "harsh", {name: "harsh",}, {name: 18}];     // array of number or string or object
// here you'll not get any error as type isn't mentioned
// so if you don't want in this way below is another way doing that:
// let arr2: number[] = [1, 2, 3, 4, "harsh"];           // here we'll face an error at index 4
// because we especially mentioned it's an array
// of numbers, so logicaly we can't store strings in it.
//* Tuples
// let arr: [string, number] = ["string", 22]      // This is a tuple. Fixed position of data types 
// and values must be in order.
// let arr: [string, number] = [22, "string"]       // This will throw an error/warning.
//* Enums - enumerations (like an object in JavaScript but with more other powers).
// Syntax
// enum UserRoles {
//     ADMIN = "admin",
//     GUEST = "guest",
//     SUPER_ADMIN = "super_admin"
// }
// enum StatusCodes {
//     ABANDONED = "abondoned status code 500",
//     NOTFOUND = "not found status code 404"
// }
// Usage
// StatusCodes.NOTFOUND         // can access values like this
// UserRoles.SUPER_ADMIN
//* Any:
// let a;         // by default its type set to 'any' if no value is assigned.
// let b = 12;   // if assigned a value, then its type automatically gets assigned.
//* Unknown
// let a;      // by default type - 'any'
// a = 12;
// a = "harsh"; 
// a.toUpperCase()          // you can use methods if string is present
// if(typeof a === "string"){      
//     a.toLowerCase()             
// }
// let a: unknown;
// a = 12;
// a = "harsh";
// a.toUpperCase()                 // here you can't use a method even though the string is present...
// you have to first define if it's a string or not then you can only use it.
// Below is the example of it.
// if(typeof a === "string")                                  
// {
//     a.toLowerCase()
// }
//* void: --> if a function returns nothing then you have to use - ":void" after the function name
// function abcd(): void {
//     console.log()
// }
//! Note:- if its returning something then you have to use - ":dataType" after the funciton name
// function efgh(): number {
//     return 0;
// }
// function ijkl(): boolean {
//     return true;
// }
//* Null: when you find something but it doesn't exist then you'll get 'null'
// let a = null;     // if assign null here, it'll set its type to 'any'
// if you want to set 'null' then define it:
// let a: null;
// In future if you reassign a value to null then it'll give you an error, 
// because you have setted its type to null
// a = 12;     // error
// solution:
// let a: string | null;       // now it can be a string or null
// a = "harsh";
// a = null;
//* undefined:
let a; // when you don't assign a value to a variable then it's undefined.
//* never: --> when function never returns something or after execution of the function 
//* it'll not move to the next line of execution when set to never
function abcd() {
    while (true) { } // infinite loop
}
abcd();
console.log(); // you can see this part of code got faded when mention :never after the function name.
