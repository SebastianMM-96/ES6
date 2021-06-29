/**
 *  If Statements and Operations
 */

/**
 * All men are mortal
 * Socrates is a man.
 * Therefore, socrates is mortal.
 * 
 * Using "if statements" and any other logical operators and 
 * data-types you see fit, recreate this logical argument. 
 * Your code should make clear that "socrates" is part of a collection of 
 * items referred to as "men", and that all members of this collection are mortal. 
 * You should also then demonstrate that since Socrates is part of this collection, 
 * it follows that he is mortal as well.
 */

const name_ = 'Socrates';
const nameArr = [
    'Jhon',
    'Bob',
    'Socrates'
];

function isThisAMan(name_) {
    return nameArr.indexOf(name_);
}

/**
 * @test function
 */
if (isThisAMan(name_) !== -1) {
    console.log('All men are mortal, ' + name_ + 'is a man. Therefore, ' + name_ + 'is a mortal.');
} else {
    console.log(name_ + 'is not a man.');
}


/**
 * Extra Credit:
 * Got the hang of creating a logical argument? Want to try another one? Try this one as well:
 * 
 * This cake is either vanilla or chocolate.
 * This cake is not chocolate
 * Therefore, this cake is vanilla.
 */

const cake = 'chocolate';

function typeOfCake() {
    switch (cake) {
        case 'chocolate':
            console.log('The cake is chocolate.');
            break;
        case 'vanilla':
            console.log('The cake is not chocolate. It is vanilla.');
            break;
        default:
            console.log('The cake is neither chocolate nor vanilla.');
            break;
    };
}

console.log('Test 1:');
typeOfCake(cake);

console.log('Test 2:');
typeOfCake('vanilla');

console.log('Test 3:');
typeOfCake();


/**
 * Extra Credit:
 * If/Else statement
 * 
 * This cake is either vanilla or chocolate.
 * This cake is not chocolate
 * Therefore, this cake is vanilla.
 */
