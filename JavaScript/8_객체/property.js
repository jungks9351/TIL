const cat = {
  name: '망고',
  age: '11살',
  weight: '12kg',
  description: '뚱냥이',
};

const Symbol1 = Symbol('Symbol1');
cat.Symbol1 = 123;

console.log(cat);
/*
{
  name: '망고',
  age: '11살',
  weight: '12kg',
  description: '뚱냥이',
  Symbol1: 123
}
*/
console.log(cat.name, cat.age, cat.weight); // 망고 11살 12kg
console.log(cat.description); // 뚱냥이

console.log(cat.Symbol1); // 123
