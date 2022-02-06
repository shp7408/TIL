// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals :
''''
1 + 2 = ${1+2}
`);

console.log('sh\'s \n \t book');

//2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder 나눈 후, 나머지
console.log(2 ** 3); //exponentiation 2의 세 제곱

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; // counter 에 1을 증가시킨 후, preIncrement 에 값을 할당한다.
// counter = counter +1
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++; // postIncrement 에 먼저 3을 할당해두고, counter 에 1을 더한다.
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const pretDecrement = --counter; //
console.log(`pretDecrement: ${pretDecrement}, counter: ${counter}`);
const postDecrement = counter--; 
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let a = 3;
let b = 6;
a += b; // a = a + b;
a -= b; // a = x - y;
a *= b; // a = x * y;
a /= b; // a = x / y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators : || (or), && (and), ! (not)
const valueA = false;
const valueB = 4 < 2; 

// || (or), finds the first truthy value
console.log(`or : ${valueA || valueB || check()}`);
// valueA 에서 true 가 먼저 뜨면, 뒤에 변수, 메서드는 실행되지 않는다.
// 그래서 복잡하고, 헤비한 expression 이나 메서드를 가장 뒤에 처리하도록 한다.

// && (and), finds the irst falsy value
console.log(`and : ${valueA && valueB && check()}`);
// often used to compress long if-statement
// nullableObject && nullableObject.something

// often used to compress long if-statement
// nuullableObject && nullaleObject.something
// if (nullableObject != null) {
//     nullableObject.something;
// }

function check() {
    for (let i = 0 ; i < 10 ; i++) {
        //wasting time
        console.log('😵‍💫');
    }
    return true;
}

// ! (not)
console.log(!valueA);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// obejct equality by reference
const sh1 = { name: 'seohyun' };
const sh2 = { name: 'seohyun' };
const sh3= sh1;
console.log(sh1 == sh2);
console.log(sh1 === sh2);
console.log(sh1 === sh3); // true : sh1 과  같은 ref value 를 가지고 있음

// equality - puzzler
console.log(0 == false);
console.log(0 === false); // type 이 다름
console.log('' == false);
console.log('' === false);// type 이 다름
console.log(null == false); // true
console.log(null === false);// type 이 다름

// 8. Conditional operators : if
// if, else if, else
const name2 = 'sh';
if (name2 === 'sh') {
    console.log("안녕 서현");
} else if (name2 === 'coder') {
    console.log("너는 코더구나");
} else {
    console.log("몰라");
}

//  9. Ternary operator :? 
// condition ? value1 : value2;
console.log (name2 === 'sh' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE' :
        console.log('go away!');
        break;

    case 'Chrome' :
    case 'Firefox':
        console.log('짱이지');
        break;

    default:
        console.log('다 똑가타');
        break;
}

// 11. Loops 
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition. 블럭을 먼저 실행하고, 조건 체크하고 싶다면 사용
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0 ; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i <10; i++) {
    for (let j = 0; j <10; j++) {
        console.log(`i: ${i}, j:${j }`);
    }
}

// break, continue
//  01. iterate from 0 to 10 and print only even numbers
// (use continue)

// for (let i = 0; i<=10; i = i+2) {
//     console.log(`${i}`);
// }
    for(let i = 0; i <11; i++) {
        if(i % 2 !== 0) {
            continue;
        }
        console.log(`q1. ${i}`);
    }

// 02. iterate from 0 to 10 and print numbers until reaching 8
// (use break)
for (let i = 0; i<=10; i++) {
    if (i > 8) {
        break;
    }
    console.log(`${i}`);
}


