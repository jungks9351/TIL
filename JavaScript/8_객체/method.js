const counter = {
  num: 0,
  increase: function () {
    return (this.num += 1);
  },
  decrease: function () {
    return (this.num -= 1);
  },
};

console.log(counter.increase()); // 1
console.log(counter.increase()); // 2
console.log(counter.increase()); // 3
console.log(counter.decrease()); // 2
console.log(counter.decrease()); // 1
console.log(counter.decrease()); // 0
