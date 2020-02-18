// import { proxyTarget } from './proxyTarget.js'
// import { proxyHandler } from './proxyHandler.js'

export const symbolDemo = () => {
    console.log(`Sybmol demo module loaded`)
    let firstName = Symbol("first name");
    let person = {};
    person[firstName] = "Nicholas";
    console.log(person[firstName])// "Nicholas"
    
    //Sebugging purposes - notice difference in how implicit vs explicit call renders in console
    //red indicates symbol name here
    console.log(`Implicit .toString()`)
    console.log(firstName) // "Symbol(first name)"
    console.log(`Explicit call to string`)
    console.log(firstName.toString()) // "Symbol(first name)"
}