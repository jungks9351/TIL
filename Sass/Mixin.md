# Mixin
스타일 시트 전체에서 재사용 할 css 선언 그룹을 정의하는 기능이다.

약간의 mixin 으로 다양한 스타일을 만들어 낼 수 있다.

Mixin 은 두가지만 기억하면 된다.
- 선언하기 @mixin
- 포함하기 @includ

## @mixin / @include
@mixin 지시어를 이용하여 스타일을 정의한다.

선언된 mixin을 사용(포함)하기 위해서는 @include가 필요하다.
```scss
//SCSS
@mixin 믹스인 이름 {
    스타일;
}
//Sass
=믹스인이름
    스타일

//SCSS
@mixin large-text {
    font-size: 22px;
    font-weight: bold;
    font-family: sans-self;
    color: red;

    &::after {
        cotente: "!!";
    }

    span.icon {
    background: url("/image/icon.png");
    }
}
h1 {
    @include large-text;
}

//Sass
=large-text
    font-size: 22px
    font-weight: bold
    font-family: sans-serif
    color: red

    &::after
        content: "!!"
    
    span.icon
        background: url("/image/icon.png")
```
mixin은 선택자를 포함 가능하고 상위(부모) 요소 참조 (& 같은)도 할 수 있다.

Compiled to

```css
h1 {
  font-size: 22px;
  font-weight: bold;
  font-family: sans-self;
  color: red;
}

h1::after {
  cotente: "!!";
}

h1 span.icon {
  background: url("/image/icon.png");
}
```