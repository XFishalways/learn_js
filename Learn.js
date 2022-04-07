let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

function multiplyNumeric(obj) {
  for (value in obj) {
    if (typeof obj[value] != "number") return;
    obj[value] *= 2;
  }
}

for (key in menu) {
  alert(key);
  alert(menu[key]);
}