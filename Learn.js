let base = prompt("type number x", "");
let time = prompt("type number n", "");

function mi(base, time){
  let result = base;
  for(let i = 1; i<time; i++){
    result *= base;
  }
  alert(result);
}

mi(base, time);

