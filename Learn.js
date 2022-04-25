function makeCounter() {

  function counter () {
      return counter.count++;
  }  

  counter.count = 0;

  counter.set(num) = num => counter.count = num;

  counter.decrease = () => counter.count--;

  return counter;
}
  
let counter = makeCounter();
  
alert( counter() ); // 0
alert( counter() ); // 1
  
counter.set(10); // set the new count
  
alert( counter() ); // 10
  
counter.decrease(); // decrease the count by 1
  
alert( counter() ); // 10 (instead of 11)
