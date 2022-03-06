'use strict';
// 객체지향 프로그래밍
// class : template
// object : instance of a class
// Javascript classes
// - intruduced in ES6
// - syntactical sugar over prototype-based inheritance
// 클래스가 도입되기 전 에는, 바로 object를 만들었다.

// 1. Class declarations
class Person {
    //constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const sh = new Person('sh', 29);
console.log(sh.name);
console.log(sh.age);
sh.speak();


// 2. Getter and Setter
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative!');
        // }
        this._age = value < 0 ? 0 : value; 
    }
}

const user1 = new User('hs', 'u', -1);
console.log(user1.age);

// 3. Fields (public, private)
class Experiment {
    publicField = 2;
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// 여러 데이터, 만들어진 붕어빵(class 객체) 상관없이 동일하게, 반복적으로 사용하는 method
// ts 에서도 많이 사용한다.
class Article {
    static publisher = 'shsh';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    // 오버라이딩이 가능하다.
    draw() {
        super.draw(); // 부모의 메서드, 변수를 사용하고싶을 때, super 사용
        console.log("========");
    }
    getArea() {
        return (this.width * this.height) /2;
    }
    
    toString() {
        return `Triangle: color:${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking : instanceOf
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
// -> 즉, object 에서 사용하는 method를 오버라이딩 할 수 있다.
console.log(triangle.toString());