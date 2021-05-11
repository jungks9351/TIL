# Git 사용법

## 1. git init
- 새로운 Git 저장소(repository)를 생성할 때 사용하는 Git 명렁어이다.

## 2. git satatus
- 명령어를 이용해 현재 저장소내 파일들의 상태를 확인할 수 있다.

## 3. git add
- 작업 디렉토리(work directory) 상의 변경 내용을 스테이징 역역(staging area)에 추가하기 위해서 사용하는 Git 명령어이다.

## 4. git commit
- 수정한 파일을 추가한 후, 수정 사항에 대해 기록을 남기는 명령어이다.

- Git commit 메시지 작성시 : xdocs/feat/conf 등 용도 구분할 것
    - feat : features (특징들)
    - docs : documentations (문서화)
    - fix : bug-fix(오류수정)
    - refoctor : refactoring(다시 만들기)
    - deploy : deoloy(배치)
    - conf : configurations(구성)
- git commit -m '수정사항(문자열)' 입력으로 사용한다.

## 5. git branch -M main
- Git은 바로 'master'라는 이름의 브렌치를 만든다. Black Lives Matter 운동에 맞추어 'master', 'slave'를 다른 단어로 대체하기 위해 master대신 main을 사용한다

## 6. git remote
- 프로젝트의 리모트 저장소를 관리하는 명령어이다.
    - 리모트 저장소는 인터넷이나 네트워크 어딘가에 있는 저장소이다.

- git remote add origin 링크주소
    - origin이라는 이름으로 리모트 저장소가 등록되었다는 의미이다.

- git remote -v 
    - 현재 연결되어 있는 원격 레퍼지토리를 확인한다.
    - 원격저장소의 URL을 확인할 수 있다.

## 7. git push
- 원격 저장소(remote repository)애 코드 변경분을 업로드하기 위해 사용하는 Git 명령어이다.

- git push 명령어는 기본적으로 원격 저장소명과 브렌치 명을 인자로 받는다. <br>

    - git push <저장소명> <브렌치명>

- git push -u origin main <br>
매번 저장소명과 브렌치명을 입력하는 것보다 -u 옵션을 사용하여 최초에 한번만 저장소명과 브렌치명을 입력하고 모든 인자를 생략할 수 있다.<br>
ex. git push origin

## 8. git branch
- git branch : branch 확인

- git checkout <브렌치명> : 사용할 branch로 전환

- git push origin <원하는 브렌치명>

## 9. git pull
- git pull <저장소명> <브렌치명> <br>
branch에서 수정한 파일을 가져오는것




