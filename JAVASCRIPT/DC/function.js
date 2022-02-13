// Fuction
//  - fundamental building block in th program
//  - subprogram can be used multiple times
//  - performs a task or calculates a value

//  1. Function declasration
// function name(parm1, param2) { body... return }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCarAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
    console.log('Hello');
}

printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);

//  2. Parameters
// premitive parameters : passed by balue
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const sh = { name: 'seohyun'};
changeName(sh);
console.log(sh);

//  3. Default parameters (added in ES6)
function showMessage(message, from = 'unkown') {
    console.log(`${message} by ${from}`);
}
showMessage("hi");

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i<args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll(1, 2, 3);

// 5. Local scope
let globalMessage = 'global' // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
} 
printMessage();

// 6. Return a value
function sum(a, b) {
    return a+b;
}
const result = sum(1, 2);
console.log(`sum ${result}`);

//  7. Early return,  early exit
// bad
function upgradeUserB(user) {
    if(user.point > 10) {
        // long upgrade logic.. 
    }
}

// good
function upgradUserG(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

//  1. Function expression
// a function declaration can be called earlier than it is defined. 
// (hoisted) hoisting 이 가능하다.
// a function expression is created when the execution reaches it.
const print = function() { // anonymous function 익명함수
    console.log('print');
}
print();

const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuize(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes(answer);
    } else {
        printNo(answer);
    }
}

// anonymous function
const printYes = function(answer) {
    console.log('Yes!' + answer);
};

// named function
// better debugging in debegger's stack traces
// recursions : 함수 안에서 자신의 함수를 실행시킬 때, 사용하면 좋다.
const printNo = function print(answer) {
    console.log('no!' + answer);
};

randomQuize('wrong', printYes, printNo);
randomQuize('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint1 = function () {
    console.log('simplePrint!');
};

const simplePrint2 = () => console.log('simplePrint!');

const add1 = (a, b) => a + b;

const add2 = function(a, b) {
    return a + b;
}

console.log(add2(100, 1000));

//블럭으로 사용하고 싶은 경우, return 으로 값을 보내주어야 함
const simpleMultiply = (a, b) => {
    //do something more
    return a * b;
}

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})(); 

// Fun quiz time
// function calculate(command, a, b)
// command (add, substract, divide, mulipley, remainder);

function calculate (command, a, b) {
    switch (command) {
        case "add":
            return a + b;
            break;
        case "substract":
            return a - b;
            break;
        case "divide":
            return a / b;
            break;
        case "muliple":
            return a * b;
            break;
        case "remainder":
            return a % b;
            break;
        default:
            throw Error('unkonwn command');
    }
}

console.log(calculate("add", 1, 3));