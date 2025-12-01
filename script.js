// Функция 1: Возведение в степень pow(x, n)
function pow(x, n) {
  if (n < 1 || !Number.isInteger(n)) {
    return "Ошибка: n должно быть натуральным числом (целое число ≥ 1)";
  }

  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

// Функция 2: Нахождение НОД gcd(a, b) с использованием алгоритма Евклида
function gcd(a, b) {
  if (a < 0 || b < 0) {
    return "Ошибка: оба числа должны быть неотрицательными";
  }

  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Функция 3: Наименьшая цифра minDigit(x)
function minDigit(x) {
  if (x < 0 || !Number.isInteger(x)) {
    return "Ошибка: x должно быть целым неотрицательным числом";
  }

  const digits = x.toString().split("");

  let min = 9;
  for (let digit of digits) {
    const num = parseInt(digit, 10);
    if (num < min) {
      min = num;
    }
  }

  return min;
}

// Функция 4: Плюрализация pluralizeRecords(n)
function pluralizeRecords(n) {
  if (n < 0 || !Number.isInteger(n)) {
    return "Ошибка: n должно быть целым неотрицательным числом";
  }

  let recordsWord;

  const lastDigit = n % 10;
  const lastTwoDigits = n % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    recordsWord = "записей";
  } else if (lastDigit === 1) {
    recordsWord = "запись";
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    recordsWord = "записи";
  } else {
    recordsWord = "записей";
  }

  const verbForm = n % 10 === 1 && n % 100 !== 11 ? "была" : "было";

  return `В результате выполнения запроса ${verbForm} найдено ${n} ${recordsWord}`;
}

// Функция 5: Числа Фибоначчи fibb(n)
function fibb(n) {
  if (n < 0 || !Number.isInteger(n)) {
    return "Ошибка: n должно быть целым неотрицательным числом";
  }

  if (n > 1000) {
    return "Ошибка: n не должно превышать 1000";
  }

  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev = 0;
  let current = 1;

  for (let i = 2; i <= n; i++) {
    let next = prev + current;
    prev = current;
    current = next;
  }

  return current;
}

// Функции для взаимодействия с интерфейсом
function calculatePow() {
  const base = parseFloat(document.getElementById("pow-base").value);
  const exp = parseInt(document.getElementById("pow-exp").value, 10);

  if (isNaN(base) || isNaN(exp)) {
    document.getElementById("pow-result").innerHTML =
      '<span class="error-message">Пожалуйста, введите корректные числа</span>';
    return;
  }

  const result = pow(base, exp);
  document.getElementById(
    "pow-result"
  ).innerHTML = `<strong>Результат:</strong> ${base}<sup>${exp}</sup> = ${result}`;
}

function calculateGcd() {
  const a = parseInt(document.getElementById("gcd-a").value, 10);
  const b = parseInt(document.getElementById("gcd-b").value, 10);

  if (isNaN(a) || isNaN(b)) {
    document.getElementById("gcd-result").innerHTML =
      '<span class="error-message">Пожалуйста, введите корректные числа</span>';
    return;
  }

  const result = gcd(a, b);
  document.getElementById(
    "gcd-result"
  ).innerHTML = `<strong>Наибольший общий делитель:</strong> НОД(${a}, ${b}) = ${result}`;
}

function calculateMinDigit() {
  const x = parseInt(document.getElementById("min-digit").value, 10);

  if (isNaN(x)) {
    document.getElementById("min-digit-result").innerHTML =
      '<span class="error-message">Пожалуйста, введите корректное число</span>';
    return;
  }

  const result = minDigit(x);
  document.getElementById(
    "min-digit-result"
  ).innerHTML = `<strong>Наименьшая цифра:</strong> в числе ${x} наименьшая цифра = ${result}`;
}

function calculatePlural() {
  const n = parseInt(document.getElementById("plural-n").value, 10);

  if (isNaN(n)) {
    document.getElementById("plural-result").innerHTML =
      '<span class="error-message">Пожалуйста, введите корректное число</span>';
    return;
  }

  const result = pluralizeRecords(n);
  document.getElementById(
    "plural-result"
  ).innerHTML = `<strong>Фраза:</strong> ${result}`;
}

function calculateFibb() {
  const n = parseInt(document.getElementById("fib-n").value, 10);

  if (isNaN(n)) {
    document.getElementById("fib-result").innerHTML =
      '<span class="error-message">Пожалуйста, введите корректное число</span>';
    return;
  }

  const result = fibb(n);
  document.getElementById(
    "fib-result"
  ).innerHTML = `<strong>Число Фибоначчи:</strong> F(${n}) = ${result}`;
}
