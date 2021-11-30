// 별찍기4

let tree = '';

for (let i = 0; i < 5; i++) {
  for (let j = i; j < 5; j++) {
    tree += ' ';
  }

  tree += '*';

  for (let k = 0; k < i; k++) {
    tree += '**';
  }

  tree += '\n';
}
console.log(tree);

//      *
//     ***
//    *****
//   *******
//  *********
