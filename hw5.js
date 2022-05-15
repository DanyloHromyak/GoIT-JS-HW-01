const country = prompt("your country").toLocaleLowerCase();
let price = 0;

switch (country) {
  case "китай":
    price = 100;
    console.log(`Доставка в Китай буде коштувати ${price} кредитів`);
    break;

  case "чилі":
    price = 250;
    console.log(`Доставка в Чилі буде коштувати ${price} кредитів`);
    break;

  case "австралія":
    price = 170;
    console.log(`Доставка в Австралію буде коштувати ${price} кредитів`);
    break;

  case "індія":
    price = 80;
    console.log(`Доставка в Індію буде коштувати ${price} кредитів`);
    break;

  case "ямайка":
    price = 120;
    console.log(`Доставка в Ямайку буде коштувати ${price} кредитів`);
    break;

  default:
    alert("У вашій країні доставка недоступна");
    break;
}
