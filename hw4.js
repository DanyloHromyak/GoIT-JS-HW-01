let credits = 23580;
const pricePerDroid = 3000;

const droidsNumber = +prompt("how many droids u wanna buy?");
const totalPrice = droidsNumber * pricePerDroid;
credits = credits - totalPrice;

if (droidsNumber === null) {
  console.log("Скасовано користувачем!");
} else if (credits < 0) {
  console.log("Недостатньо коштів на рахунку!");
} else {
  console.log(
    `Ви купили ${droidsNumber} дроїдів, на рахунку залишилося ${credits} кредитів.`
  );
}
