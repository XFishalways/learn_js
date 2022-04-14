function unique(arr) {
  return arr.filter((item, index) => {
    console.log(item, index);
    // console.log(arr.indexOf(item)+'---'+index
    // 第一次 cc 索引2 过滤后的索引2
    // 第二次 cc 索引2 过滤后的索引3
    // 后面去重以此类推
    return arr.indexOf(item) == index;
  });
}

let strings = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O',
];

alert(unique(strings)); // Hare, Krishna, :-O
