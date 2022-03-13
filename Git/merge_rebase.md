### merge 와 rebase 차이
merge : branch 를 통합하는 것
rebase : branch의 base를 옮긴다

>  **Rebase?**
branch의 base를 재설정한다는 의미
branch는 base 지점을 가지고 있어, base에서부터 코드를 수정한다.
git history를 살펴보면, branch의 base가 어디에 있는지 확인할 수 있다.

<img width="599" alt="스크린샷 2022-03-13 오후 11 49 42" src="https://user-images.githubusercontent.com/62336151/158065274-289380df-ef64-4f4e-b4f1-53fd94a72693.png">

- B지점을 가진 branch가 D, E 커밋을 진행한다.
- C지점으로 base를 이동하기 위해 branch에서 C지점으로 rebase를 한다.
- C지점으로 rebase 되면, 기존 D, E 커밋은 새롭게 정렬되어 C지점 이후로 변경된다.
- 