{
    // JavaScript
    // function jsAdd(num1, num2) {
    //     return num1 + num2;
    // }

    // TypeScript
    function add(num1: number, num2: number): number {
        return num1 + num2;
    }

    // JavaScript
    // function jsFetchNum(id) {
    //     // code ...
    //     // code ...
    //     return new Promise(((resolve, reject) => {
    //         resolve(100);
    //     }));
    // }

    // TypeScript
    function fetchNum(id: string): Promise<number>{ // string형태의 id를 받아서, number 타입의 Promise를 반환한다.
        // Promise<number> -> 제너릭
        // code ...
        // code ...
        return new Promise(((resolve, reject) => {
            resolve(100);
        }));
    }

    // JavaScript => TypeScript
    // JS, TS 둘 다에서 사용할 수 있는 타입이 더해진 함수 정의 방법

    // 1. Optional parameter
    function printName(firstName: string, lastName?: string) {
        console.log(firstName);
        console.log(lastName);
    }

    function printName2(firstName: string, lastName: string | undefined) { // 이 경우 보다는 Optional parameter를 더 자주 사용함
        console.log(firstName);
        console.log(lastName);
    }

    printName('Steve', 'Jobs');
    printName('Ellie');
    printName('Anna', undefined);

    // Default parameter
    function printMessage(message: string = 'default message') {
        console.log(message);
    }

    printMessage();

    // Rest parameter
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((a, b) => a + b);
    }

    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2, 3, 4));
    console.log(addNumbers(1, 2, 3, 4, 5, 0));
}