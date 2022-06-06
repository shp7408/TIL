{
    /*
    Type Assertion 💩
    */

    function jsStrFunc(): any {
        return 10;
    }

    const result = jsStrFunc();
    // result.length 명백하게 result는 string인데, any 타입으로 명시되어 있어서,
    // string에서 제공되는 메서드를 사용할 수 없다.

    console.log((result as string).length); // 그 때, 사용하는 것이 as[타입] 이다.
    console.log((<string>result).length); // 동일함
    // 변수 as[타입]은 명확하게 변수가 [타입]인 경우에만 사용한다.
    // 그렇지 않은 경우에는 컴파일 에러, exception이 발생하지는 않는다.
    // 그저... undefined가 뜰 뿐이다.

    // assertion 잘못 사용하여, app이 죽는 경우도 있음
    const wrong:any = 5;
    console.log((wrong as Array<number>).push(1)); // 배열이 아닌데, 배열 메서드를 사용하면, 에러가 뜬다. 💩

    // 그래서, type assertion은 정말 정말 명확한 경우가 아니라면, 사용하지 않는다.

    function findNumbers(): number[] | undefined {
        return undefined;
    }

    const numbers = findNumbers();
    numbers!.push(2); // 정말 명확하게 numbers가 배열인 경우에 해당한다.
    // !가 없으면, numbers가 undefined 일 수도 있다고 컴파일 에러 발생
    // !가 있으면, 컴파일 에러 발생 X

    // 그러면 정말, assertions를 사용언제 하는가?
    const button = document.querySelector('class')!; // 정말 정말 존재하는 경우, !를 사용합니다.
    if(button) {
        button.nodeValue;
    }
}