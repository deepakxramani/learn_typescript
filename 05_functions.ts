// Functions:
//  - Function types
//  - Optional and Default parameters
//  - Rest parameters
//  - Overloads


//* 1. Function types

// 1

// function abcd(): string{        // function will return string!
//     return "a";
// }

// function efgh(): void{        // function will return nothing!

// }


// 2

// function jkil(name: string, callback: (value: string) => void){

// }

// jkil("harsh",  (value: string) => {
//     console.log(value);
// })


// 3

// function abcdfg(name: string, age: number, callback: () => void) {  // returning nothing thats why void

// }

// abcdfg("harsh", 25, () => {
//     console.log("abcd")
// })



// 4 (with arguements)

// function abcdfg(name: string, age: number, callback: (arg: string) => void) {  // returning nothing thats why void
//   callback("hey")
// }

// abcdfg("harsh", 25, (arg: string) => {
//     console.log("abcd")     // abcd
//     console.log(arg)        // arg
// })



//* 2. Optional and default parameters

// function abcd(name: string, age: number, gender?: string) {     // gender is optional parameter

// }

// abcd("harsh", 25, "male")
// abcd("LagBataq", 22)



// function abcd(name: string, age: number, gender: string = "not to be disclosed") {     // gender is default parameter
//     console.log(name, age, gender)
// }

// abcd("harsh", 25, "male")
// abcd("LagBataq", 22)



//* 3. Rest Parameters  (... rest/spread)

//& rest

// function abcd(...args: number[]) {

// }


// abcd(1,2,3,4,5,5,6,6,4345,9,0)


// function sum(...arr: number[]) {
//     // console.log(arr)
//     let arrSum = 0; 
//     arrSum = arr.reduce((a,b) => {
//         return a+b
//     },0)
//     console.log(arrSum)
// }

// sum(1,2,3,4,5,6,7,8,9,10);


// function friends(...args: string[]) {
//     console.log(args)
//     console.log(args[0])
// }

// friends("aman", "abhay", "samay");


//& spread

// let arr = [1,2,3,4,5]

// // cloned array
// let newArray = [...arr]
// console.log(newArray)



//* Function overloading    -> a feature of object-oriented programming where two or more functions can have the same name but different parameters.

// TypeScript funtion signature
// function abcd(a: string): void;
// function abcd(a: string, b: number): number;

// function abcd(a: string, b?: number) {
//     if(typeof a === "string" && b === undefined) {
//         console.log("hey")
//     }
//     if(typeof a === "string" && typeof b === "number"){
//         return 123;
//     }

//     else throw new Error("Something went wrong!")
// }

// abcd("hey")
// abcd("hey", 12)