let Counter = (() => {
  let count = 0;

  return {
    increase() {
      return ++count;
    },
    decrease() {
      return --count;
    },
    reset() {
      count = 0;
      return `reset count : ${count}`;
    },
  };
})();

// 자바스크립트는 접근 제한자를 제공하지 않지만 노출하고 싶지 않은 변수나 함수는 반환하는 객체에 추가하지 않으면 정보은닉이 가능하다.

console.log(Counter.num); // undefined

console.log(Counter.increase()); // 1
console.log(Counter.increase()); // 2
console.log(Counter.increase()); // 3
console.log(Counter.decrease()); // 2
console.log(Counter.decrease()); // 1
console.log(Counter.decrease()); // 0
console.log(Counter.decrease()); // -1
console.log(Counter.reset()); //
