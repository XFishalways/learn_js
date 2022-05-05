let reverse = function(x) {
  let arr = x.split("");
  let rev = arr.reverse();
  let join = rev.join("");
  return join;
};

let str = "123";

alert(reverse(str));