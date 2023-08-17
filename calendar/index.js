'use strict'

function generateCalendar() {
    const monthSelect = document.getElementById('month');
    const yearInput = document.getElementById('year');
    const calendarBody = document.getElementById('calendar-body');
  
    calendarBody.innerHTML = '';
  
    const month = parseInt(monthSelect.value);
    const year = parseInt(yearInput.value);
  
    const firstDay = new Date(year, month, 1).getDay();
  
    const daysInMonth = new Date(year, month + 1, 0).getDate();
  
    let date = 1;
  
    for (let i = 0; i < 6; i++) {
      const row = document.createElement('tr');
  
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay-1) {
          const cell = document.createElement('td');
          row.appendChild(cell);
        } else if (date > daysInMonth) {
          break;
        } else {
          const cell = document.createElement('td');
          cell.textContent = date;
          row.appendChild(cell);
          date++;
        }
      }
  
      calendarBody.appendChild(row);
    }
  }

  
