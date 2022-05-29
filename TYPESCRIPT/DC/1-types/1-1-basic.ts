{
    /**
     * JavaScript
     * Primitive(원시 타입): number, string, boolean, bigint, symbol, null, undefined
     * Object: function, array...
     **/

    // old : var => hoisting 과 관련한 많은 문제들 발생 -> 사용X
    // var age =5;
    // age = 1;

    // let es6 : 선언 후, 재할당 가능
    let name = "sh";
    name = 'hi';
    // const : 선언 후, 재할당 불가능
    const age = 10;
    // age = 3; // 재할당 시, 에러 발생

    // TS
    // - number
    const num:number = -6;

    // string
    const str:string = 'hello';

    // boolean
    const boal:boolean = false;

    // undefined : 값이 비었는지, 안 비었는지 결정되지 않은 상태
    // let name2: undefined; (X)
    let age2: number | undefined;
    age2 = undefined;
    age2 = 1;
    function find(): number |  undefined {
        return undefined;
    }

    // null : 이미 비었다고 결정이 난 상태
    // let person: null
    let person: string | null; // < let person: string | undefined; 방식을 더 자주 사용한다.

    // unknown : 어떤 타입인지 알 수 없음, 잘 사용하지 않음. js->ts 로 바꾸어 쓸 때, 주로 사용
    let notSure: unknown=9;
    notSure = 'he';
    notSure = true;

    // any : 어떤 것을 담을 수 있는 변수, 잘 사용하지 않음.
    let anything: any = 0;
    anything = 'hello';

    // void
    function print(): void { // void 생략 가능함. 팀 규칙에 따라, 선언/생략함
        console.log('hello');
        return;
    }
    // let unusable: void = undefined; // 사용X

    // never : 절대 리턴하는 값이 없음.
    function throwError(message: string): never {
        // message -> server (log)
        // throw new Error(message); // 어플리케이션에서 에러 핸들링 시, 자주 사용하는 변수
        // while(true) {
        // }
    }
}
