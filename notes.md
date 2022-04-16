# 基础知识

typeof() 结果应加"", 如"number"  
!运算级最高

# 对象

key in object检验  
可以直接functionName() {}  
this指向上一个对象，如this所在的函数为箭头函数，则从外部调取  
在对象中的每个函数最后加return this可使调用可以链接 如：  
ladder.up().up().down().showStep().down().showStep();

for in迭代时整数会被从小到大排序 其他的按创建顺序排序

#数据类型

## 数组方法

arr.indexOf(item)只返回第一个匹配到的index值 => 查重可用  
去重还可以直接Array.from(new Set(arr)) 这样最简洁！！  
输入中有多余的空格可以直接arr.split(" ")  
arr.reduce()最后要有初始值0  
数组中只有splice, sort, reverse可以修改原数组 
sort中(a, b) => a - b是从小到大

## Map

new Map(Object.entries(obj))转换对象为map  
map迭代顺序与插入顺序相同 不像对象受整数排序的影响  
键为字符串时引用要加 ""  
一个具有 [key, value] 键值对的数组 可以用来初始化map 也可以被Object.fromEntries()转为对象  
let obj = Object.fromEntries(map) 从map创建一个普通对象 省去 ".entries"  
set.keys()和set.values()一样  






