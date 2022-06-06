{
    /* 
    Type Inference
    */
    let text = 'hello';
    //    text = 1 //에러
    text = 'bye'; // 에러 안 남

    function print(message: any) { // message에 타입을 명시하지 않으면, any로 타입 결정 -> any 보다는 = 'hello' 와 같이 default를 사용하는 것 추천. default를 'hello'로 하는 경우, 타입을 명시하진 않았지만, string으로 타입 결정
        console.log(message);
    }

    print('hi');
    print(1231); // 타입이 any이므로, 문자열 할당 -> 숫자 할당해도 에러 안 남

    function add(x: number, y: number) :number { //:number 를 넣지 않아도, 타입을 추론함
        return x+y;
    }

    const result2 = add(1, 2); // 자동으로 숫자 타입으로 명시

    // 타입 추론, 정말 좋은 것 인가?
    // 예제는 간단해서, 이 것이 return되는 구나. 하지만, 플젝에서는 이렇게 간단하지 않다.
    // 원시타입읙 경우를 제외하고, 함수에서는 정확하게 타입을 명시하는 것을 추천합니다~
}