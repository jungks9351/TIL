// 별찍기4

let tree = '';

for (let i = 0; i < 5; i++) {
  tree += '*';

  for (let j = 4; j > i; j--) {
    tree += '**';
  }

  tree += '\n';

  for (let k = 0; k <= i; k++) {
    tree += ' ';
  }
}

console.log(tree);

//  *********
//   *******
//    *****
//     ***
//      *
