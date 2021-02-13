const hashmap = {
  sum: (arr) => arr.reduce((acc, e) => acc += e),
  sub: (arr) => arr.reduce((acc, e) => acc -= e),
  mult: (arr) => arr.reduce((acc, e) => acc *= e),
  div: (a, b) => [a, b].includes(0) ? '0 not allowed' : a / b,
};

console.log(hashmap.sum([2, 4]));
console.log(hashmap.sub([2, 6]));
console.log(hashmap.mult([2, 3, 7]));
console.log(hashmap.div(2, 0));
console.log(hashmap.div(14, 7));
