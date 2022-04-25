alert(sum(1)(2))
alert(sum(1)(2)(3)); // 1 + 2 + 3

let s = function sum(num1) {
  let a = function add(num1) {
    add.sum += num1;
    return add();
  }
  add.sum = 0;
  return s;
}