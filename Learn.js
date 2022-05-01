function f(x) {
  alert(x);
}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // 在 1000ms 后显示 "test"
f1500("test"); // 在 1500ms 后显示 "test"

function delay(f, ms) {

  return function(...args) {
    let savedThis = this; // 将 this 存储到中间变量
    setTimeout(function() {
      f.apply(savedThis, args); // 在这儿使用它
    }, ms);
  };

}