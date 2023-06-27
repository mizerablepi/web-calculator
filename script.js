let display = document.getElementById('display');
let buttons = document.getElementsByTagName('button');

let num1 = '';
let num2 = '';
let operator = '';
let previousResult ='';

init();

function updateDisplay(event) {
  if (event.target.id === 'link' || event.target.id === 'clear') {
    clear();
  } else if (event.target.id === 'equals') {
    if (num2 != '') {
      if (previousResult != '' && num1==='') {
        previousResult = String(operate(+previousResult, +num2, operator));
      } else {
        previousResult = String(operate(+num1, +num2, operator));
      }
      display.textContent = previousResult;
      num1 = '';
      num2 = '';
      operator = '';
    } else {
      display.textContent = "invalid expression"
      num1 = '';
      num2 = '';
      operator = '';
    }
  } else if(event.target.className === 'op'){
    if (operator === '') {
      operator = event.target.textContent;
    } else {
      if (previousResult != '' && num1 === '') {
        previousResult = String(operate(+previousResult, +num2, operator));
      } else {
        previousResult = String(operate(+num1, +num2, operator));
      }
      num1 = '';
      num2 = '';
      display.textContent = previousResult;
      operator = event.target.textContent;
    }
  } else if (operator === '') {
    if (event.target.id === 'decimal' && (display.textContent).includes('.')) return
    if (event.target.id === 'bs') {
      num1 = num1.slice(0, -1);
    } else {
      num1 = num1.concat(event.target.textContent);
    }
    display.textContent = num1;
  } else {
    if (event.target.id === 'decimal' && (display.textContent).includes('.')) return
    if (event.target.id === 'bs') {
      num2 = num2.slice(0, -1);
    } else {
      num2 = num2.concat(event.target.textContent);
    }
    display.textContent = num2;
  }
}

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

function clear() {
  display.innerHTML = ' ';
  num1 = '';
  num2 = '';
  operator = '';
  previousResult = '';
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
  if (y === 0) {
    alert('Bruh!');
    return '';
  } 
  return x / y;
}

function addEvents() {
  for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', updateDisplay);
  }
}

function init() {
  addEvents();
}