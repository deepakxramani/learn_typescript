// Type Assertions:
//  - Type casting
//  - Non-null assertion operator
//* Meaning --> Type assertion ka matalab batana TS ko ki particular cheej ka type kya hai,
//*             yeh aap tab karte ho jab aap TS se jyaada us value ka type ka type jante ho.
// let a: any;
//(a as string).          // placing (.) after parenthesis gives all the methods related to that particular type of variable
//(a as number).         // placing (.) after parenthesis gives all the methods related to that particular type of variable
// another way
// (<number>a).            // placing (.) after parenthesis gives all the methods related to that particular type of variable.
//* Typecasting
// let a = Number("12")
// console.log(typeof a)
//* Non-null assertion operator
// let a: null | undefined | string;
// a = "hey";
// a!.toLowerCase()                    // placing !(not) after variables guarantees that variable will not be a null or undefined
