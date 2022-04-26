let user = {
  name: "John"
};

Object.defineProperty(user, "name", {
  configurable: false
});

Object.defineProperty(user, "name", {configurable: true});

const des = Object.getOwnPropertyDescriptor(user, "name");

console.log(des.writable);