const user = {
  name: 'jungjin',
  age: 20,
  nickName: 'jungks',
  func: function () {
    return console.log(this.name, this.age, this.nickName);
  },
};

user.func(); // jungjin 20 jungks
