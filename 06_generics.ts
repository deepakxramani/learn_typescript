// Generics
//  - Generic Functions
//  - Generic Interfaces
//  - Generic classes


//* 1. Generic Functions


// humein ek function banana hai jo ki accept karega koi bhi value mad usey print karega

// hum ek function ko ko use karte waqt bata skte hain ki function arguemnet ko kis type se treat kar sakte hain


// function abcdr<T>(a: T) { }

// abcdr<string>("harsh");
// abcdr<number>(12);


// function abcdr<H>(a: H, b: string, c: number) { }

// abcdr<string>("halua", "pudi", 4);


// function log<T>(val: T){
//     console.log(val);
// }

// log<string>("hey");
// log<number>(34);

// // also
// // when you define a function is compulsory to mention generic but mandotry when calling a function

// log(12)     // typescript will automatically infere that its type will be of "T (generic)" type




//* 2. Generic Interfaces   -> Har object ka roop kya hoga? yeh hum interface mein bta sakte hain

// interface Halua<T> {
//     name: string;
//     age: number;
//     key: T;
// }

// function abcd(obj: Halua<string>) {
//     obj.key     // string!
// }

// abcd({name: "foo", age: 25, key: "abcdfttg"})



//* 3. Generic classes

// class BottleMaker<T> {
//     constructor(public key: T) {}
// }

// let b1 = new BottleMaker<string>("hey");
// console.log(b1)

// let b2 = new BottleMaker("hey");            // will automatically infere no need to write <string>
// console.log(b2)

// let b3 = new BottleMaker<number>(12);
// console.log(b3)



//& Extra:

//! Note:-> In TypeScript "Hello" is not just regular string it's a 'string literal' 

// function abcd<T>(a: T, b: T): T {   // will accept string and return also a string <generic>
    
    
//     // return "hey";                // then typescript is giving an error?
//     // return "hey" as T;           // solution 1
//     return <T>"hey";                // solution 2

    
// }

// abcd<string>("hey", "hello");


//! Note:-> If you want to use intellisense you have to put minor check...


function abcd<T>(a: T, b: T): T {  
    // a.                            // here you can notice when using dot for methods, methods are not showing
    if(typeof a === "string") {
        return (a as string).toLowerCase() as T;            // now you can use methods after the check
    }
    return a;
}

console.log(abcd<string>("hey", "hello"))