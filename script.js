let num1 = 0;
let num2 = 0;
let operator;




function operate(x, y, sign) {
  if (sign === '+') {
    return add(x, y);
  } else if (sign === '-') {
    return sub(x, y);
  } else if (sign === '*') {
    return mul(x, y);
  } else if (sign === '/') {
    return div(x, y);
  }
}

function add(x, y) {
  return x + y;
}

function sub(x,y) {
  return x - y;
}

function mul(x,y) {
  return x * y;
}

function div(x,y) {
  return x / y;
}