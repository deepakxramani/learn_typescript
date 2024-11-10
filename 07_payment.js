"use strict";
// Modules:
//  - Exporting and Importing Modules
//  - Default exports
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPayment = addPayment;
exports.getDetails = getDetails;
function addPayment(val) {
    console.log(val);
}
function getDetails(val) {
    console.log(val);
}
//*  Default Exports:
var Payment = /** @class */ (function () {
    function Payment(price) {
        this.price = price;
    }
    return Payment;
}());
exports.default = Payment;
