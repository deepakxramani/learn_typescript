// Modules:
//  - Exporting and Importing Modules
//  - Default exports

import { getDetails, addPayment } from "./07_payment";

// addPayment(12);
// getDetails("Deepak Ramani");






//* Default EXPORTS -> YOU DON'T NEED CURLY BRACKETS TO IMPORT THAT!

import Payment from "./07_payment";

let a = new Payment(12);
console.log(a)

let b = new Payment(122);
console.log(b)