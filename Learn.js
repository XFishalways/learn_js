let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

function topSalary(object) {
    let {John, Pete, Mary} = salaries;
    return Math.max(John, Pete, Mary);
}

alert(topSalary(salaries));