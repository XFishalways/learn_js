# 基础知识

- typeof() 结果应加"", 如"number"  
- !运算级最高
- 箭头函数没有thisthis 没有arguments

# KEYS!!!

- 可迭代对象： list, set, map, string
- slice既可以用在字符串 也可以用在数组

# 对象

- key in object检验  
- 可以直接functionName() {}  
- this指向上一个对象，如this所在的函数为箭头函数，则从外部调取  
- 在对象中的每个函数最后加return this可使调用可以链接 如：  
ladder.up().up().down().showStep().down().showStep();
- for in迭代时整数会被从小到大排序 其他的按创建顺序排序
- let secret = Symbol("secretMessage") Symbol隐藏属性 其他位置不能访问 不可被遍历
- 对象内创建Symbol: [secretNumber]: 123

#数据类型

## 数组方法

- arr.indexOf(item)只返回第一个匹配到的index值 => 查重可用  
- 去重还可以直接Array.from(new Set(arr)) 这样最简洁！！  
- 输入中有多余的空格可以直接arr.split(" ")  
- arr.reduce()最后要有初始值0  
- 数组中只有splice, sort, reverse可以修改原数组 
- sort中(a, b) => a - b是从小到大

## Map && Set

- new Map(Object.entries(obj))转换对象为map  
- map迭代顺序与插入顺序相同 不像对象受整数排序的影响  
- 键为字符串时引用要加 ""  
- 一个具有 [key, value] 键值对的数组 可以用来初始化map 也可以被Object.fromEntries()转为对象  
- let obj = Object.fromEntries(map) 从map创建一个普通对象 省去 ".entries"  
- set.keys()和set.values()一样  
- map.set时如果key相同则后存储的替换之前存储的 和obj一样  
- map.keys(), .value(), .entries()返回的是可迭代对象(Map-iterator)而非数组 要用Array.from转为数组
- 可迭代对象通过Object.fromEntries转为对象

## WeakMap && WeakSet

- 仅作为键
- 没有.keys(), .value(), .entries()
- 可用作第三方库 额外数据 缓存
- 特性： 作为键的对象离开 也会跟着清除他的数据

## Object.keys, .value, .entries

- Object.keys(obj)而不是 obj.keys() => 防止该对象已经有了keys, value, entries方法而造成引用时的冲突

## 解构赋值

### 数组解构

- 中间的用 "," 忽略 后面的不用管
- let [a, b, c] =, 等号右侧可以是任何可迭代对象
- 等号左侧使用任何“可以被赋值的”东西 包括对象的属性
- 可遍历 和Object.entries(obj) map
- ...rest获取的是数组
- 左边多的话多的为undefined 多的那个可以赋prompt

### 对象解构

- 左侧 冒号表示“什么值：赋值给谁” 格式都完全仿照
- 对象的key是和解构的名对应的 => 可以改变顺序
- 可以只提取需要的变量
- 前面没有let的话就要在最外侧加() 以免被当成代码块
- 做函数参数时赋的值为默认值

## 日期 && 时间

- getFullYear(), getDate(), getDay(), getTime, getTimezoneOffset() 最后两个没有UTC变体 所有Time都没有UTC
- 超过范围会自动校准 自动进位 => 闰年不用管
- Date.now()更快
- 格式化日期可以用数组 然后再对数组做操作 再join起来return

## json

- 单引号会被转为双引号 json中无反引号和单引号
- json会忽略js特有的对象属性 如：
  函数属性（方法） Symbol 类型的键和值 存储 undefined 的属性
- 支持嵌套限制 但不能有循环引入
- JSON.stringify(user, null, 2) 最后一个值是表示缩进空格数量 { }内换行这种 仅用于日志记录和美化输出
- toJSON会优先被调用 toJSON中要return 可用this
- json不支持注释
- 使用使用 reviver 就是括号中的第二个 通过写function来转换字符串为正常Date
- stringify的function内如果有if 注意`key != ""` (第一个调用时 value 是对象本身)
- 可以用json来比较内容

# 函数进阶

## 递归 && 堆栈

- 递归深度 递归深度为上下文最大值
- 当前上下文被“记录”在堆栈的顶部 为子调用创建新的上下 当子调用结束后 前一个上下文被从堆栈中弹出，并继续执行
- 上下文占用内存

## 链表

- 通过递归定义 使用value: 和next: {}
- 使用next: null结束 list = {value: , next: anotherList}在头部插入
- 把想要改位置的接口赋给目标接口 如 list.next = list.next.next 原位置的value会被移除
- 链表无法直接通过编号获取元素

## Rest参数

- 获取的是数组
- 不能写在中间位置

## Spread语法

- 将可迭代对象转为参数 => 用于数组和字符串都可以
- 用法: Math.max(1, ...arr1, 2, ...arr2, 25)
- 可以用来合并数组 or 将字符串转换为字符数组 [0, ...arr, 2, ...arr2], [...str]
- [...str] 和 Array.from(str) 基本相同 但Array.from()还可以用于类数组对象 更通用
- 浅拷贝 对数组和对象都可 [...array] or {...obj}

## 闭包

闭包 是指内部函数总是可以访问其所在的外部函数中声明的变量和参数，即使在其外部函数被返回（寿命终结）了之后。在某些编程语言中，这是不可能的，或者应该以特殊的方式编写函数来实现。但是如上所述，在 JavaScript 中，所有函数都是天生闭包的（只有一个例外，将在 "new Function" 语法 中讲到）。也就是说：JavaScript 中的函数会自动通过隐藏的 [[Environment]] 属性记住创建它们的位置，所以它们都可以访问外部变量。

## 变量作用域

- 如果从代码中可以明显看出有未使用的外部变量，那么就会将其删除 如: 
function f() {
  let value = Math.random();
  function g() {
    debugger; // 在 Console 中：输入 alert(value); No such variable!
  }
  return g;
}
let g = f();
g();

- 在一个函数中return一个function 再用一个变量引用大的函数 return的那个function就成了新变量中的一个独立空间 如: 
function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}
let counter = makeCounter();
alert( counter() ); // 0
alert( counter() ); // 1
alert( counter() ); // 2

首先 counter 对 makeCounter 的引用使counter.[[Environment]] 有对 {count: 0} 词法环境的引用
随后调用 counter() 时，会为该调用创建一个新的词法环境 而当 counter() 中的代码查找 count 变量时，它首先搜索自己的词法环境 但为空 因为那里没有局部变量 然后查找到外部 makeCounter() 的词法环境 从而因 makeCounter() 中的 return function 而修改自身词法环境中的 count 变量 从而使 counter() 达到计数器的作用

