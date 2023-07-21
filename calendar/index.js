'use strict'

function generateCalendar() {
    const monthSelect = document.getElementById('month');
    const yearInput = document.getElementById('year');
    const calendarBody = document.getElementById('calendar-body');
  
    // Очистка календаря
    calendarBody.innerHTML = '';
  
    // Получение выбранного месяца и года
    const month = parseInt(monthSelect.value);
    const year = parseInt(yearInput.value);
  
    // Получение первого дня месяца
    const firstDay = new Date(year, month, 1).getDay();
  
    // Получение количества дней в месяце
    const daysInMonth = new Date(year, month + 1, 0).getDate();
  
    // Генерация календаря
    let date = 1;
  
    for (let i = 0; i < 6; i++) {
      const row = document.createElement('tr');
  
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay-1) {
          // Пустые ячейки до первого дня месяца
          const cell = document.createElement('td');
          row.appendChild(cell);
        } else if (date > daysInMonth) {
          // Пустые ячейки после последнего дня месяца
          break;
        } else {
          // Ячейки с датами
          const cell = document.createElement('td');
          cell.textContent = date;
          row.appendChild(cell);
          date++;
        }
      }
  
      calendarBody.appendChild(row);
    }
  }

  
