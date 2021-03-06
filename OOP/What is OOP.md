### 인프런 강좌 김영한님의 스프링 핵심 원리 - 기본편
### 멧 와이스펠드의 객체지향 사고 프로세스

****
## 좋은 객체 지향이란?

> ### 로버트 마틴에 의하면, *재사용할 수 없는 코드*를 하기와 같이 정의내렸다.
> - **경직성(rigidity)** : 프로그램의 한 부분을 변경하면, 다른 부분까지 변경해야 하는 경우
> - **취약성(fragility)** : 관련이 없는 곳에서 요류가 발생하는 경우
> - **부동성(immobility)** : 원래 맥락에서 벗어나 코드를 재사용할 수 없는 경우

> ## 이러한 문제들을 해결하고, 목표를 달성하기 위해 **SOLID** 가 도입되었다.
> : 로버트 마틴이 '소프트웨어 설계를 더 이해하기 쉽고, 더 유연하며, 더 유지보수 가능하게 만들기 위해, 도입한 5가지 설계 원칙을 SOLID로 정의한다.
>****
 ## 객체 지향 프로그래밍
> - 객체 지향 프로그래밍은 컴퓨터 프로그램을 명령어의 목록으로 보는 시각에서 벗어나 여러 개의 독립된 단위, 즉  **"객체"** 들의 모임으로 파악하고자 하는 것이다. 각각의 **객체**는 메시지를 주고 받고, 데이터를 처리할 수 있다. **(협력)**
> - 객체 지향 프로그래밍은 프로그램을 **유연**하고 **변경**이 용이하게 만들기 때문에, 대규모 소프트웨어 개발에 많이 사용된다.
> ****
> ### 유연하고, 변경이 용이하다는 것은 무엇을 의미할까?
>   - 레고 블럭 조립하듯이,
>   - 키보드, 마우스를 갈아 끼우듯이
>   - 컴퓨터 부품을 갈아 끼우듯이
>   - 컴퓨터를 쉽고 유연하게 변경하면서 개발할 수 있는 방법
>   - -> **다형성** 
****
 ## : 다형성 (Polymorphism)
 ### 객체 지향의 핵심
> ****
> ### 다형성을 실세계에 비유해보자
> - 컴퓨터 세계와 실세계 1:1 매칭은 물론 어려우나, 이해하기 용이하다
> - 이 세상을 **역할** 과 **구현**(: 역할을 직접 행하는) 으로 구분해 볼 것이다.
> #### 자동차의 역할이 있고, 자동차 역할을 행하는 구현인, K3, 아반떼, 테슬라 모델3 등 이 있다.
>    운전자는 K3를 운전하다가, 테슬라 모델3로 바꾸어도, 운전이 가능하다.
    클라이언트에 영향을 주지 않고, 새로운 기능을 줄 수 있다.
    새로운 자동차가 나와도, 클라이언트는 새로운 것을 배울 필요가 없다. 
    
****
> #### 역할과 구현을 분리
>    -  **역할**과 **구현**으로 구분하면, 세상이 **단순**해지고, **유연**해지며, **변경**도 편리해진다.
>   - **클라이언트**는 대상의 역할(인터페이스)만 알면 된다.
>   - **클라이언트**는 구현 대상의 **내부 구조를 몰라도** 된다.
>   - **클라이언트**는 구현 대상의 **내부 구조가 변경**되어도 영향을 받지 않는다.
>   - **클라이언트**는 구현 **대상 자체를 변경**해도 영향을 받지 않는다.
> 내부 구조가 기름차에서 전기차로 바뀌어도 클라이언트는 운전할 수 있다.
> K3를 타다가, 테슬라로 자동차가 바뀌어도 운전할 수 있다.
> 역할과 구현을 분리함으로써 오는 장점이라 할 수 있다.
****
> #### 객체의 협력이라는 관계부터 생각
>   - 혼자 있는 객체는 없다.
>   - 클라이언트 : **요청**, 서버 : **응답**
>   - 수 많은 객체 클라이언트와 객체 서버는 서로 협력 관계를 가진다.