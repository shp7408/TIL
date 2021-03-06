### 인프런 강좌 김영한님의 스프링 핵심 원리 - 기본편
### 멧 와이스펠드의 객체지향 사고 프로세스

****
 ## 좋은 객체 지향 설계의 5가지 원칙 (SOLID)
> 클린 코드로 유명한 로버트 마틴이 좋은 객체 지향 설계의 5가지 원칙을 정리
> - **SRP** : 단일 책임 원칙 (Single responsibility principle)
> - **OCP** : 개방-폐쇄 원칙 (Open/closed principle)
> - **LSP** : 리스코프 치환 원칙 (Liskov suvstitution principle)
> - **ISP** : 인터페이스 분리 원칙 (Interface segregation principle)
> - **DIP** : 의존관계 역전 원칙 (Dependency inversion principle)
****
 ## SRP 단일 책임 원칙
> Single responsibility principle
> - 한 클래스는 하나의 책임만 가져야 한다.
>> - 단일 책임 원칙에 따르면, 클래스를 변경한 이유가 단일해야 한다.
>> - 같은 클래스 안에 다른 이유 때문에 변경될 메서드를 넣지 않도록 해야 한다. 
>> - 클래스를 설명하는 글에, '그리고'라는 단어가 포함된다면, SRP가 깨질 수 있다.
>> - 즉, 모든 모듈이나, 클래스는 소프트웨어가 제공하는 기능의 단일 부분에 대해서만 책임을 져야 하며, 그 책임을 클래스로 완전히 **캡슐화**해야 한다. 
> - 하나의 책임이라는 것은 모호하다. 클 수도 있고, 작을 수도 있다.
> - 문맥과 상황에 따라 다르다.
> - **중요한 기준은 변경** 이다. 변경이 있을 때 파급 효과가 적으면, 단일 책임 원칙을 잘 따른 것이다. *ex) ui 변경, 객체의 생성과 사용을 분리*

> - 프로그램의 각 클래스와 모듈은 단일 작업에 중점을 두어야 한다. 
 
****
 ## OCP 개방-폐쇄 원칙
> Open/closed principle
>   - 소프트웨어 요소는 **확장에는 열려** 있으나,**변경에는 닫혀** 있어야 한다.
>   - 확장을 하려면, 당연히 기존 코드를 변경해야 하는데, 이게 무슨 말인지?
>   - 이에 대해, **다형성**이 중요한 답이 된다.
>   - 즉, 클래스를 수정하지 않고, 클래스의 행위를 확장할 수 있어야 한다.
> >*ex) OCP 원칙을 잘 지켰다는 전제 하에, 도형 class 를 상속받은 삼각형 class 를 만들었다고 가정하자. 이때, 도형 class 자체를 수정하지 않고, 삼각형 class 를 만들 수 있으면, 도형 class가 폐쇄되었다.(closed)라고 말할 수 있다.*

****
 ## LSP 리스코프 치환 원칙
> Liskov suvstitution principle
>   - 부모 클래스의 인스턴스를 해당 자식 클래스 중 하나의 인스턴스로 교체할 수 있게 설계해야 한다.
>   - *Q)*'직사각형'은 '도형'의 일종이므로, '도형'을 상속받으면 된다. 그러면, '정사각형' 또한 '직사각형'의 일종이므로, '정사각형'은 '직사각형'을 상속받으면될까? 많은 사람들은, '정사각형'이 '직사각형'의 일종이라고 한다. 그러나, '도형'-'직사각형' 의 관계처럼, '직사각형'-'정사각형' 과의 관계가 유사하진 않다. '직사각형'은 '사각형'이기도 하지만, '평행사변형'이기도 하다. 한편, '정사각형'은 '마름모'이지만, '직사각형'은 그렇지 않다. 따라서 '직사각형'과 '정사각형 간에는 약간 다른 점이 있다.*
>   - 다형성에서 하위 클래스는 인터페이스 규약을 다 지켜야 한다는 것, 다형성을 지원하기 위한 원칙, 인터페이스를 구현한 구현체는 믿고 사용하려면, 이 원칙이 필요하다.
>   - *ex) 자동차 인터페이스의 엑셀은 앞으로 가라는 기능, 뒤로 가게 구현하면 LSP 위반, 느리게 가더라도 앞으로 가야함*

****
 ## ISP 인터페이스 분리 원칙
> Interface segregation principle
>   - 몇 개의 큰 인터페이스가 있는 편 보다는, 작은 인터페이스가 많은 편이 바람직하다.
>   - 자동차 인터페이스 -> 운전 인터페이스, 정비 인터페이스로 분리
>   - 사용자 클라이언트 -> 운전자 클라이언트, 정비사 클라이언트로 분리
>   - 분리하면 정비 인터페이스 자체가 변해도, 운전자 클라이언트에 영향을 주지 않음
> 인터페이스가 명확해지고, 대체 가능성이 높아진다.
****
 ## DIP 의존관계 역전 원칙
> Dependency inversion principle
>   - 프로그래머는 "추상화에 의존해야지, 구체화에 의존하면 안 된다." 의존성 주입은 이 원칙을 따르는 방법 중 하나다.
>   - 쉽게 이야기 해서, 구현 클래스에 의존하지 말고, 인터페이스에 의존하라는 뜻
>   - 앞에서 이야기한 **역할(Role)에 의존하게 해야 한다는 것과 같다.** 객체 세상도 클라이언트가 인터페이스에 의존해야 유연하게 구현체를 변경할 수 있다. 구현체에 의존하게 되면, 변경이 아주 어려워진다.