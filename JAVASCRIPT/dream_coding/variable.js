// 1. Use strict
// added in ES5
// use this for Vanila Javascript
// 자바스크립트는 유연하다. 하지만, 유연하다는 것은 위험하다는 것이라고도 할 수 있다.
// 'use strict'를 사용하면, 엄격한 strict 범위 내에서 js 를 사용할 수 있다.
// 추가적으로, js 엔진을 더 효율적으로 사용할 수 있다
'use strict';

// 2. Variable
// let (added in ES6)

let name = 'ellie';
console.log(name);

name = 'hello';
console.log(name);

let globalName = 'global name';
{
    console.log(globalName);
    let scopeName = 'scope name';
    console.log(scopeName);
}

// console.log(scopeName); // error : can't find varible scopeName
// global 한 변수들은 어플리케이션이 시작되는 순간부터, 끝날 때 까지 
// 항상 메모리에 탑재되어 있으므로,
// if, for, loop 안에서 최소한으로 사용하는 것 이 좋다. 

// var : 쓰지 마세요
// var hoisting : 어디에 선언했는지 상관없이, 항상 제일 위로 선언을 끌어올려주는 것이다.
// var 는 block scope 이 없다. block 을 무시한다.
console.log(age);
age = 4;
console.log(age);
var age;

// 3. Constants
// 값이 절대 바뀌지 않는 변수
// 값을 선언함과 동시에 할당한 후, 값을 변경할 수 없다.
// favor immutable data type always for a few reasons :
//  - security
//  - thread safety
//  - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item : number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function
// 우리 프로그래밍언어는 first-class function이 지원된다. : function 이 다른 변수처럼, 변수에 function 이 변수에 할당된다.
// 함수에 인자로도 전달되고, 함수에서 return 타입으로도 function 을 return 할 수 있다.

// java, c 언어와 다르게, number 로만 숫자 관련 변수 타입으로 사용한다.
const count = 17; //integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric vlaues :
// infinity, -infinity, Nan
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number'/ 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 123456789123456789123456789123456789123456789n;
console.log(`bigInt: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' +  brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false : 0 , null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unige identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false

// 같은 string 의 경우, 같은 식별자로 주고 싶은 경우, for 을 사용한다.
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true

// 값을 출력하고 싶은 경우, description 을 사용한다.
console.log(`value: ${symbol1.description}, type: ${symbol1.description}`);

// 5. Dynamic typeing : dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
// console.log(text.charAt(0)); type error text.charAt is undefined 
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
text = 5 + '7';
console.log(`value: ${text}, type: ${typeof text}`);






