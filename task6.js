const multi = (a) => (b) => a * b;
console.log(multi(5)(6));

const multiplyBySix = multi(6);
console.log(multiplyBySix(10));

const multiply = (a) => (b) => (c) => (d) => a * b * c * d;
console.log(multiply(4)(5)(6)(10));
