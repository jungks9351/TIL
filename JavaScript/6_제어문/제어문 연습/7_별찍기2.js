// 별찍기2

let tree = '';

for (let i = 0; i < 5; i++) {
  for (let j = i; j < 5; j++) {
    tree += '*';
  }
  tree += '\n';
}

console.log(tree);

// *****
// ****
// ***
// **
// *
