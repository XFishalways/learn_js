# 基础知识

typeof() 结果应加"", 如"number"  
!运算级最高

# 对象

key in object检验  
可以直接functionName() {}  
this指向上一个对象，如this所在的函数为箭头函数，则从外部调取  
在对象中的每个函数最后加return this可使调用可以链接 如：  
ladder.up().up().down().showStep().down().showStep();

#数据类型

## 数组方法

arr.indexOf(item)只返回第一个匹配到的index值 => 查重可用  
去重还可以直接Array.from(new Set(arr)) 这样最简洁！！  
输入中有多余的空格可以直接arr.split(" ")  
arr.reduce()最后要有初始值0  
数组中只有splice, sort, reverse可以修改原数组 
sort中(a, b) => a - b是从小到大

## 可迭代对象Iterable object






