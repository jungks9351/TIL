# Transition

**transition은 CSS 프로퍼티의 값이 변화할 때, 표시의 변화에 즉시 영향을 미치게 하는 대신 그 프로퍼티 값의 변화가 일정 시간(duration)에 걸쳐 일어나도록 하는것이다.**

상태 변화에 따라 CSS 프로퍼티가 변경되면 프로퍼티 변경에 따른 표시의 변화(transition)는 즉시 발생한다.
transition은 상태 변화에 동반하여 변경되는 CSS프로퍼티 값에 의한 표시의 변화를 부드럽게 하기 위해 애니메이션 속도를 조절한다.

Transition의 프로퍼티

프로퍼티|설명|기본값
:---:|:---|:---:
transition-property|트랜지션의 대상이 되는 CSS 프로퍼티를 지정한다. | all
transition-duration|트랜지션이 일어나는 지속시간(duration)을 초 단위(s) 또는 밀리 포 단위(ms)로 지정한다.|0s
transition-timing-function|트랜지션 효과를 위한 수치 함수를 지정한다.|ease
transition-delay|프로퍼티가 변화한 시점과 트랜지션이 실제로 시작하는 사이에 대기하는 시간을 초 단위(s) 또는 밀리 초 단위(ms)로 지정한다.|0s
transition|모든 트랜지션 프로퍼티를 한번에 지정한다. shorthand syntax

## 1, transition-property

트랜지션의 대상이 되는 CSS 프로퍼티 명을 지정한다. 복수의 프로퍼티를 지정하는 경우 ,쉼표로 구분한다.

모든 CSS 프로퍼티를 지정할 수는 없다.
트랜지션의 대상이 될 수 있는 CSS프로퍼티는 다음과 같다.
```
- Box model
width height max-width max-height min-width min height
padding margin
border-color border-width border-spacing

- Background
background-color background position

- 좌표
top left right bottom

- 텍스트
color font-size font-weight letter-spacing line-height
text-indent text-shadow vertical-align word-spacing

- 기타
opacity outline-color outline-offset outline-width
visibility z-index
```
요소의 프로퍼티 값이 변화하면 브라우저는 프로퍼티 값의 변화에 영향을 받는 모든 요소의 기하값(위치와 크기)를 계산하여 layout 작업을 수행한다.

layout에 영향을 주는 트랜지션 효과는 회피하는 것이 좋다.

latout에 영향을 주는 프로퍼티
```
width hight padding margin border
display position float overflow
top left right bottom
font-size font-family font-weight
clear white-space
```
