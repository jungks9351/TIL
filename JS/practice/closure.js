const counterObj = (function () {
  // 카운트를 유지하기 위한 자유 변수
  let counter = 0;

  // 클로저
  return {
    increaesr: function increaser() {
      return ++counter;
    },
    decreaser: function decreaser() {
      return --counter;
    },
  };
})();

console.log(counterObj);

console.log(counterObj.increaesr());
console.log(counterObj.decreaser());
console.log(counterObj.decreaser());
