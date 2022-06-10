> ## Docker(도커)란?
**"Docker"는 Linux 컨테이너를 만들고 사용할 수 있도록 하는 컨테이너화 기술**

<br>

> ## Linux 컨테이너
**표준화된 소프트웨어 유닛** 코드를 실행하기 위한 코드 패키지와 그 코드를 실행하는데 필요한 종속성을 의미한다.

A standardized unit of software. A package of code and dependencies to run that code (e.g. NodeJS code + the NodeJS runtime)

동일한 컨테이너 -> 완전히 동일한 application, execution behavior!

The same container always yields **the exact same application and execution behavior!** No matter where or by whom it might be executed.

<br>

> ## 왜, Containers를 사용하는가?

즉, 왜 independent, standardized "application package"가 필요한걸까?
- prod 환경과 같은 환경에서 테스트를 해야 하기 때문
- 팀/ 회사 동료들과 같은 환경에서 작업하기 위해
- 같은 로컬 환경에서 각기 다른 프로젝트의 환경들 간에 충돌을 막기 위해 ex) python2 / python3

<br>

> ## Image (이미지)
**서비스 운영에 필요한 서버 프로그램, 소스코드 및 라이브러리, 컴파일된 실행 파일을 묶는 형태** 즉, 컨테이너 생성 및 실행에 필요한 모든 파일과 설정값을 지닌 것으로, 더 이상의 의존성 파일을 컴파일하거나, 이것 저것 설치할 필요 없는 상태의 파일을 의미한다.

<br>

> ## Layer (레이어)
레이어란, 기존 이미지에 추가적인 파일이 필요할 때, 다시 전체를 다운받는 방식이 아닌, 해당 파일을 추가하기 위한 개념.
이미지는, 여러 개의 읽기 전용(read only) layer 로 구성되고, 파일이 추가되면, 새로운 layer가 생성된다.

<br>

> ## 도커 파일 작성하기
Node.js 애플리케이션을 도커 환경에서 실행하려면 먼저 이미지를 생성하고, 생성된 이미지를 이용해 컨테이너를 실행한 다음, 그 컨테이너 안에서 Node.js 애플리케이션을 실행해야 한다.

> - 이미지 생성을 위한 Dockerfile 작성
> - 이미지 생성
> - 생성된 이미지를 이용하여, 컨테이너 실행
> - 컨테이너 안에서 Node.js 애플리케이션 실행

## 도커파일의 기본 구조
### FROM
> - 이미지 생성 시, 기반이 되는 이미지 레이어를 명시합니다.
> - <이미지 이름>:<태그> 형식으로 작성
> - 태그를 붙이지 않으면, 자동으로 가장 최신 버전으로 내려받는다.
> - ex) ubuntu:14.04

### RUN
> - 도커 이미지가 생성되기 전에 수행할 셸 명령어입니다.

### CMD
> - 컨테이너가 시작됐을 때, 실행할 파일 또는 셸 스크립트입니다.
> - 이 명령어는 도커 팡리 내에서 한 번만 사용할 수 있다.