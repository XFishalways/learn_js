# 基础知识

- typeof() 结果应加"", 如"number"  
- !运算级最高

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

- 