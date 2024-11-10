// Modules:
//  - Exporting and Importing Modules
//  - Default exports

export function addPayment(val: number) {
    console.log(val)
}

export function getDetails(val: string) {
    console.log(val)
}


//*  Default Exports:

export default class Payment {
    constructor(public price: number) {}
}

