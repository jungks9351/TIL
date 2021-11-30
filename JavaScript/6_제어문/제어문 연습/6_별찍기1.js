// 별찍기1

let tree = '';

for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    tree += '*';
  }
  tree += '\n';
}
console.log(tree);

// *
// **
// ***
// ****
// *****
