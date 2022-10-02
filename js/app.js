let date;

function Initialize() {
  if (localStorage.getItem('group') !== undefined) {
    localStorage.setItem('group','20121')
  }
}

//Вывод времени
function showTime(){
  date = new Date();
  let h = date.getHours(); 
  let m = date.getMinutes(); 
  let s = date.getSeconds();

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  let time = h + ":" + m + ":" + s;
  document.getElementById("MyClockDisplay").textContent = time;
  setTimeout(showTime, 1000);
}
//Получаем день недели на русском
function ShowDayOfWeek() {
  let daysOfWeek = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота']
  document.getElementById("DayOfWeekDisplay").textContent = daysOfWeek[date.getDay()];
}

//Получаем тип недели (верхняя, нижняя)
function ShowTypeOfWeek() {
  // Рассчитывается тип недели
  daysAfterSeptember = getNumberOfDays("08/29/2022"); 
  WeekNumber = daysAfterSeptember / 7;
  weekType = Math.ceil(WeekNumber)%2
  if (weekType == 1) { weekType = 'Верхняя неделя'}
  else {weekType = 'Нижняя неделя'}
  
  // Изменяется элемент
  let TypeOfWeek = document.getElementById('weekType').textContent = weekType
}

function getNumberOfDays(start) { 
  const date1 = new Date(start); 
  const date2 = new Date(); 
  const oneDay = 1000 * 60 * 60 * 24; 
  
  const diffInTime = date2.getTime() - date1.getTime(); 
  const diffInDays = Math.round(diffInTime / oneDay); 
  return diffInDays; 
  } 

//Получаем номер урока
function getLessons() {
  date = date.getDay();

  const lessons = [
    {
      0: 'Нет пар', 1: 'Нет пар', 2: 'Нет пар', 3: 'Нет пар', 4: 'Нет пар', 5: 'Нет пар', 6: 'Нет пар' 
    },
    {
      0: 'Физкультура (нижняя неделя)', 1: 'Дискретная математика (практика) (нижняя неделя)', 2: 'Программирование (практика) (нижняя неделя)', 3: '', 4: '', 5: '', 6: '' 
    },
    {
      0: 'Информатика (лекция)', 1: 'Информатика (практика)', 2: 'История (лекция)', 3: 'История (практика) (верхняя неделя)', 4: '', 5: '', 6: '' 
    },
    {
      0: 'Программирование (практика)', 1: 'Программирование (практика)', 2: 'Иностранный язык (практика)', 3: 'Физкультура', 4: '', 5: '', 6: '' 
    },
    {
      0: 'История (практика) (нижняя неделя)', 1: 'Математический анализ (лекция)', 2: 'Математический анализ (лекция)', 3: 'Иностранный язык (практика)', 4: '', 5: '', 6: '' 
    },
    {
      0: 'Математический анализ (практика) (верхняя неделя)', 1: 'Математический анализ (практика)', 2: 'Дискретная математика (лекция)', 3: '', 4: '', 5: '', 6: '' 
    },
    {
      0: 'Нет пар', 1: 'Нет пар', 2: 'Нет пар', 3: 'Нет пар', 4: 'Нет пар', 5: 'Нет пар', 6: 'Нет пар' 
    }
  ]

  lessonsQuery = document.querySelectorAll('.lesson');
  for (let i = 0; i < lessonsQuery.length; i++) {
    if (lessons[date][i] != '') {
      lessonsQuery[i].textContent = lessons[date][i];
      lessonsQuery[i].textContent = i+1 + '. ' + lessonsQuery[i].textContent;
    }
  }

}

// Tasks
options = document.querySelector('select');
textarea = document.querySelector('txtarea');

// Сохранение данных
function taskSave() {
  let subject;

  for (let i = 0; i < options.length; i++) {
   if (options[i].selected) {
    subject = options[i].value;
   }
  }
  localStorage.setItem(subject,txtarea.value);
}

//Загрузка данных
function taskLoad() {
  let subject;

  for (let i = 0; i < options.length; i++) {
   if (options[i].selected) {
    subject = options[i].value;
   }
  }
  txtarea.value = localStorage.getItem(subject);
}

function setGroup() {
  groupOptions = document.querySelector('select');
  for (let i = 0; i < groupOptions.length; i++) {
    if (groupOptions[i].selected) {
     selected = groupOptions[i].value;
    }
   }
  
  if (selected != '') {
    localStorage.setItem('group',selected)
  }
  
}

