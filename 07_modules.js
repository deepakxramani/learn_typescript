"use strict";
// Modules:
//  - Exporting and Importing Modules
//  - Default exports
Object.defineProperty(exports, "__esModule", { value: true });
// addPayment(12);
// getDetails("Deepak Ramani");
//* Default EXPORTS -> YOU DON'T NEED CURLY BRACKETS TO IMPORT THAT!
var _07_payment_1 = require("./07_payment");
var a = new _07_payment_1.default(12);
console.log(a);
var b = new _07_payment_1.default(122);
console.log(b);
