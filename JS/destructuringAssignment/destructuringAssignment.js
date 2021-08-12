// 배열 디스트럭처링 할당

// const arr = [1, 2, 3];

// var one = arr[0];
// var two = arr[1];
// var three = arr[2];

// console.log(one, two, three); 1 2 3

// 변수 one two three 를 선언하고 배열 arr를 디스트럭처링하여 할당한다.
//할당 기준은 배열의 인덱스다.

// const [one, two, three] = arr;

// console.log(one, two, three); // 1 2 3


const fruits = [ "apple", "banana", "orange"];

const [사과, 바나나, 오렌지] = fruits;

console.log(사과, 바나나, 오렌지); // apple banana orange

// 객체 디스트럭팅 할당

// 배열 디스트럭팅 처리와 객체 디스트럭팅 처리를 혼용할 수 있다.

const icecreams = [
  { id: 1, taste: 'choco' , color: 'brown'},
  { id: 2, taste: 'milk' , color: 'white'},
  { id: 3, taste: 'strawberry' , color: 'pink'},
  { id: 4, taste: 'melon' , color: 'green'},
];

// icecreams 배열의 세 번째 요소인 객체로부터 taste 프로퍼티만 추출한다.
const [, , {taste}] = icecreams;

console.log(taste); // strawberry

const [{id}] = icecreams;

console.log(id); // 1

// 중첩 객체 사용벌

const cat = {
  name: 'mango',
  information: {
    gender: 'female',
    weight: '13kg'
  }
};

//information 프로퍼티 키로 객체를 추출하고 이 객체의 weight 프로퍼티로 값을 추출한다.

const { information:{weight} } = cat;
console.log(weight);
