let fillAge = prompt("Введите ваш возрост");
let age = Number.parseInt(fillAge);

while (isNaN(age)) {
  age = parseInt(prompt("Введите возрост только цыфрами"));
  if (isNaN(age)) {
    break;
  }
}

if (age >= 18) {
  getYearOfBirth();

  let name = prompt("Введите ваше имя");

  if (name == "" || name == null) {
    name = "Пользователь";
  }

  let sex = prompt("Ваш пол М или Ж ?");

  while (sex != "М" || sex != "м" || sex != "Ж" || sex != "ж") {
    console.log(sex);
    if (sex == "М") {
      break;
    } else if (sex == "м") {
      break;
    } else if (sex == "Ж") {
      break;
    } else if (sex == "ж") {
      break;
    } else if (sex == "" || sex == null) {
      console.log(sex);
      break;
    }
    sex = prompt("Ещё пожалуйста, Ваш пол М или Ж ?");
  }
  if (sex == "М" || sex == "м") {
    document.write(
      '<div class="result"> ' +
        '<h1 class="title">Добро пожаловать ' +
        "господин " +
        name +
        "</h1>" +
        " <p> Ожидайте загрузки контента... </p>" +
        "</div>"
    );
  } else if (sex == "Ж" || sex == "ж") {
    document.write(
      '<div class="result"> ' +
        '<h1 class="title"> Добро пожаловать ' +
        "госпожа " +
        name +
        "</h1>" +
        " <p> Ожидайте загрузки контента... </p>" +
        "</div>"
    );
  } else {
    document.write(
      '<div class="result"> ' +
        '<h1 class="title"> Проверка отменена' +
        "</div>"
    );
  }
} else if (age < 18) {
  document.write(
    '<div class="result">' +
      '<h1 class="title"> Не так быстро </h1>' +
      "<p > Контент для тебя не доступен! </p>" +
      "</div>"
  );

  getYearOfBirth();
} else {
  document.write(
    '<div class="result"> ' + '<h1 class="title"> Проверка отменена' + "</div>"
  );
}

function getYearOfBirth() {
  let years = new Date();
  let yearOfBirth = years.getFullYear();
  let countTheYearOfBirth;
  countTheYearOfBirth = yearOfBirth - age;
  document.write(
    ' <div class="year"> ' + "<h2>" + countTheYearOfBirth + "</h2>" + "</div>"
  );
}
