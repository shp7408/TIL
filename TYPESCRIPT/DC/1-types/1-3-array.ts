{
    // Array
    const fruits: string[] = ['🍅', '🍌'];
    const scores: Array<number> = [1, 3, 4]; // Generics 패턴 참고

    function printArray(fruits: readonly string[]) { // readonly 인 경우, string[] 형태로만 쓰임.  Array<number> 제너릭 형태는 지원하지 않음
        // fruits.push fruits배열은 readonly이므로, 변경(push)할 수 없음.
    }

    // Tuple -> interface, type alias, class 로 대체하여 많이 사용한다.
    // index로 접근하는 방식은 가독성이 떨어짐. 어떤 변수인지 명시할 수 있는 것을 추천한다.
    let student: [string, number];
    student = ['name', 123];
    student[0]; // index로 접근 시, 가독성이 떨어짐.
    student[1];

     // object destructuring (구조 분해 할당 : 배열, 객체의 속성을 해체해서, 그 값을 개별 변수에 담을 수 있게하는 js, ts 표현식)
    const [name, age] = student;
    // 그럼에도 불구하고, 여전히, 데이터가 정해진 곳이 아니라, 이 데이터를 사용하는 부분에서 임의로 name, age 를 정해서 사용함;
    // ex) react에서 useState return 받을 때, 튜플 형태로 사용함
}