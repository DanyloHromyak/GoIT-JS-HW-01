const ADMIN_PASSWORD = "jqueryismyjam";
let message = prompt("your password");

if (message === null) {
  console.log("Скасовано користувачем!");
} else if (message === ADMIN_PASSWORD) {
  console.log("Ласкаво просимо!");
} else {
  console.log("Доступ заборонений, невірний пароль!");
}

alert(message);
