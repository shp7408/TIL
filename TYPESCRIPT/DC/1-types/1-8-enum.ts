{
    /*
    Enum
     */
    // JavaScript
    const MAX_NUM = 6;
    const MAX_STUDENT_PER_CLASS = 10;
    // 서로 연관되어 있는 상수 이지만, 묶을 수 있는 방법은 무엇인가? -> enum
    const DAYS_ENUM = Object.freeze({"MON": 0, "TUE": 1, "WED": 2}); // freeze 꽁꽁 얼려서 바꿀 수 없도록한다.
    const dayOfToday = DAYS_ENUM.MON; // 0이 할당 됨

    // TypeScript
    type DaysOfWeek = 'Mon' | 'Tue' | 'Wed' | 'Thu';
    let day2 : DaysOfWeek = 'Tue';
    day2 = 'Wed'; // Union type으로 다시 할당 가능. 타입을 보장하며, 사용 가능.
    // 모바일 클라이언트와 의사소통하는 경우에는 enum 사용. uniion 타입으로는 커뮤니케이션 힘듦
    console.log(day2);

    enum Days { // ts의 enum에서는 앞글자만 대문자, 그 외에는 소문자
        Mon,
        Tue,
        Wed,
        Thu,
        Fri,
        Sat,
        Sun,
    }

    console.log(Days.Sun);
    // 그 외에, 시작하는 번호를 0이 아닌 10으로 하고 싶으면,
    // Days enum에서 Mon = 1 할당
    // -> 그다음 부터는 자동으로 +1 하여 할당된다.

    // 문자열로 할당하고 싶으면,
    // Mon = '월' ~ Sun까지 모두 할당

    // TS에서는 enum을 사용하지 않는 것을 추천한다.
    console.log(Days.Mon);
    let day: Days = Days.Sat;
    day = Days.Thu;
    day = 1000; // ? 이렇게 해도 컴파일 에러가 안 난다고?? 이게 무슨 일 이람? 문자는 또 안되네?
    console.log(day);
}