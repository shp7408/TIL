{
    /**
     * Let's make a calculator 🧮
     */

    type CalcMethod = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

    function calculate(method : CalcMethod, num1: number, num2:number): number {
        switch (method) {
            case 'add':
                return num1 + num2;
            case 'substract':
                return num1 - num2;
            case 'multiply':
                return num1 * num2;
            case 'divide':
                return num1 / num2;
            case 'remainder':
                return num1 % num2;
            default:
                throw Error('Invalid method!');
        }
    }

    console.log(calculate('add', 1, 3)); // 4
    console.log(calculate('substract', 3, 1)); // 2
    console.log(calculate('multiply', 4, 2)); // 8
    console.log(calculate('divide', 4, 2)); // 2
    console.log(calculate('remainder', 5, 2)); // 1
}
