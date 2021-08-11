function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// 1.

function calendarDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysList = document.getElementById('days');

  for (let i = 0; i < dezDaysList.length; i += 1) {
    const day = dezDaysList[i];
    const dayItem = document.createElement('li');
    dayItem.className = 'day';
    dayItem.innerHTML = day;

    if (day === 24 || day === 25 || day === 31) {
      dayItem.classList.add('holiday');
    }

    if (day === 4 || day === 11 || day === 18 || day === 25) {
      dayItem.classList.add('friday');
    }

    daysList.appendChild(dayItem);
  }
}

calendarDays();

// 2.

function holidayButtonCreator(str) {
  let parentDiv = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  button.id = "btn-holiday";
  button.innerHTML = str;

  parentDiv.appendChild(button);
}

holidayButtonCreator("Feriados")

// 3.

const holidayButton = document.querySelector('#btn-holiday');
const holidayList = document.querySelectorAll('.holiday')

holidayButton.addEventListener("click", function (event) {
  for (let i = 0; i < holidayList.length; i += 1) {
    let holidayDays = holidayList[i];
    if (holidayDays.style.backgroundColor !== "blue") {
      holidayDays.style.backgroundColor = "blue";
    } else {
      holidayDays.style.backgroundColor = "rgb(238,238,238)";
    }
  }
});

// 4.

function fridayButtonCreator(str) {
  let parentDiv = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  button.id = "btn-friday";
  button.innerHTML = str;

  parentDiv.appendChild(button);
}

fridayButtonCreator("Sexta-feira");

// 5.

const fridayButton = document.querySelector('#btn-friday');
const fridayList = document.querySelectorAll('.friday');
const fridayArray = [4,11,18,25]

fridayButton.addEventListener("click", function (event) {
  for (let i = 0; i < fridayList.length; i += 1) {
    let fridayDay = fridayList[i];
    if (fridayDay.innerHTML !== "It's Friday then!") {
      fridayDay.innerHTML = "It's Friday then!"
    } else {
      fridayDay.innerHTML = fridayArray[i];
    }
  }
});

