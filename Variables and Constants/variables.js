/**
 * Variables & Constants
 */

/**
 * @question
 * What are the differences between let, const and var?
 * @answer
 * The three of them are variables, used to save values. The main difference is 
 * that const is a value that is assigned and can't be changed. let and var can
 * be changed, but they are different. The difference is scope.
 */

console.log('====================================');
const myName = "Sebastian";
console.log(myName);

/** Var definition */
var someValue = 40;
let anotherValue = 28;

function theScope(){
    console.log("Get the scope of var");
    var someValue = 20;
    if(true){
        var someValue = 100;
        console.log(someValue); // --> 100
    }
    console.log(someValue); // --> 100
}

function theScopeBlock(){
    console.log("The scope of let");
    let anotherValue = 10;
    if(true){
        let anotherValue = 200;
        console.log(anotherValue); // --> 200
    }
    console.log(anotherValue); // --> 10
}

/**
 * Using the functions
*/
theScope();
theScopeBlock();

/** 
 * Show the global scope for var and let
*/

console.log('====================================');
console.log("Global var & let");
console.log(someValue, anotherValue);
console.log('====================================');


/** 
 * @hoisting
 * Hoisting is the default behavior of JavaScript to move all variable
 * declarations to the top of the scope.
*/

hoistingValue = 1; // not predefined variable
console.log('====================================');
console.log("Hoisting");
console.log(hoistingValue);
var hoisting; // --> Def the variable
console.log('====================================');


console.log('====================================');