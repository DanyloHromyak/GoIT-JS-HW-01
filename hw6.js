let input = prompt("Введіть число");
let total = 0;

while (input !== null) {
  if (isNaN(input)) {
    alert("Було написано не число, спробуйте ще раз");
  } else {
    total += Number(input);
  }
  input = prompt("Введіть число");
}

alert(`Загальна сума чисел ${total}`);
