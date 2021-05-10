/**
 * Objects
 * Collections of name-value pairs
 */

/** Create objetc */
var myName = { 1 : "John"};
console.log(myName);

/** Object example */
var myObject = new Object();
myObject['1'] = 'John';
myObject['2'] = 'Doe';
console.log(myObject);

/**
 * Object literal sintax
 */
var myOtherObject = {
    1 : "Hello",
    2 : "World",
    3 : "Bye"
};

myOtherObject['4'] = "Bye";

console.log(myOtherObject);

var anotherObj = {
    firstName : "John",
    secondName : "Smith",
    age : 40,
    /** Nested object */
    numbers : {
        mobile : "555-555-555",
        home : "444-444-444"
    },
    address : "123 Fake St.",
    /**
     * To execute this function
     * we can use: anotherObj.sayHi();
     */
    sayHi : function(){
        console.log('Hi again');
    }
};

/**
 * Constructor pattern for creating objs
 */

function PersonConstructor(firstName, secondName, age, numbers, address){
    //Logic
    //Keys
    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;
    this.numbers = numbers;
    this.address = address;
    this.sayHi = function(){
        console.log('Hi again');
    };
}

/**
 * Access object using . or ['key']
 */
console.log(anotherObj);

/**
 * Use the constructor
 */
var person = new PersonConstructor('John', 'Doe', 34, "555-555-555", "123 Fake St.");

console.log(person);
//Use the function
person.sayHi();