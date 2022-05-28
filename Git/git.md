## Git 명령어
: 프로젝트를 새로 만들 때면, 항상 git 연결 관련한 명령어를 검색한다. 그리고 한참 후에, 다른 프로젝트를 시작하려고 하면, 똑같은 검색어를 입력한다. 이러한 시간도 아깝기에, 내가 이해한 git 명령어와, 사용 방법을 하나씩 정리해보려 한다.
<br/>
<br/>
## - 사용자 초기 설정 하기
여기서 user.name 이라기에, 순진하게 github에서 profile의 name인 줄 알았다. 그게 아니라, 사용자 본인의 overview 화면의 url의 https://github.com/{aaa} 에서 {aaa}에 해당한다.


> ``git config --global user.name "{aaa}"``

그리고는 github 로그인 시, 이메일을 아래와 같이 입력한다.

> ``git config --global user.email "{bbb}@example.com"``

마지막으로는 github에서 내 프로필 이미지 클릭 - Settings - Developer settings - Personal access tokens에서 access token을 발급받는다. access token은 영문 대소문자, 숫자 등으로 이루어져 있다. 발급받은 access token을 아래의 {ccc}자리에 넣는다.

> ``git config --global user.password "{ccc}"``

초기 설정 내역을 보려면 아래 명령어로 확인 가능하다.

> ``git config --list``

<br/>

## - git local 저장소
이 개념을 이해하는 데, 애를 좀 먹었다. 처음에는 정말 git, github 차이도 모르고 사용했던 것 같다. 첫 입사했을 때, 사내에서 github을 활용하지 못 하고, 말 그대로 '저장소'로 사용을 하던 적이 있었다.

그 때, 곧 입사하실 PM님이, "git branch가 정립되지 않았으니, remote에는 저장 못하겠군요. git local에라도 저장해두세요."라고 하셨었다. 그 땐, 이해하지 못하고, 그냥 작업내용을 그냥 master에 push, pull 했다. 참고로, 절대 이렇게 하면 안 된다.

여기서 git local 저장소에서 git 을 빼고, 'local 저장소'는 현재 사용 중인 mac 혹은 windows 에 디렉토리를 말한다.
mac 기준으로,
> ``mkdir {디렉토리 경로}``
> 
> ``ex) mkdir /Users/a./instagram``


> ``cd {디렉토리 경로}``
>
> ``ex) cd /Users/a./instagram``

와 같이, 저장할 디렉토리를 만들고, 해당 디렉토리 로 이동 (cd ~) 한다. 여기까지가 바로, 로컬 저장소를 생성하고, 이동하는 작업이다.

그렇다면, git local 저장소는 무엇인가?
저장할 로컬 디렉토리로 이동 후, 아래 명령어를 입력하면, .git 이라는 하위 디렉토리가 생성된다.
> ``git init``

 이 디렉토리에는 저장소에 필요한 뼈대 파일(Skeleton)이 들어 있다.

## git remote 저장소
Git에는 3가지 영역 (Staging Area)이 있다.
- Working Directory : 내가 작업하고 있는 프로젝트의 디렉토리
- Staging Area : 커밋을 하기 위해 $ git add 명령어로 추가한 파일들이 모여있는 공간
- Repository : 커밋들이 모여있는 저장소

## git add
> ``git add``

를 하게 되면, Working Directory에서 작업한 내용이 Staging Area 로 올라가게 된다.

## unstaging

: staging된 파일을 다시 되돌리는 것

> ``git rm --cashed {unstaging시킬 파일 명}``

입력하면, unstaging 된다.