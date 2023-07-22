// sync flow

// a = 10;

// console.log("first");

// b = 20;
// console.log("second");

// c = a + b;
// console.log("third");

// console.log(c);

// async flow

console.log("first");

setTimeout(() => {
  console.log("second");
}, 0);

console.log("third");

console.log("fourth");
