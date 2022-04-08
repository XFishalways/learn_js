function Accumulator (value) {
  this.value = +value;
  this.read = function () {
    this.addValue = +prompt ("type a number", "");
    this.value += this.addValue;
  };
}

let accumulator = new Accumulator(1); // 初始值 1

accumulator.read(); // 添加用户输入的 value
accumulator.read(); // 添加用户输入的 value

alert(accumulator.value); // 显示这些值的总和
