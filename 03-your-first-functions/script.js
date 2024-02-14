//01) Greet function
function welcomeMsg(name) {
  return "Welcome " + name;
}

console.log(welcomeMsg("dear visitor!"));
console.log(welcomeMsg("Claas"));

//02) Gross Price Function
function calcGrossPrice(netPrice, taxRate) {
  return (netPrice * (1 + taxRate)).toFixed(2);
}

console.log(calcGrossPrice(20, 0.19));
console.log(calcGrossPrice(40, 0.16));

//03) Add Positive Function
function addPositive(a, b) {
  return Math.abs(a) + Math.abs(b);
}

console.log(addPositive(2, 3));
console.log(addPositive(3, -5));
console.log(addPositive(-1, -8));
