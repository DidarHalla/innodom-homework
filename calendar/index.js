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


          let generationHolidaysDate = () => {
            cell.onclick = () => {
              let holydayDateBlock = document.getElementById('holyday-date-block')
              holydayDateBlock.innerHTML = ''

              let divWithHolydayDate = document.createElement('div')
              let input = document.createElement('input')
              let saveDateButton = document.createElement('div')

              divWithHolydayDate.id = 'div-with-holyday-date'

              saveDateButton.innerHTML = 'save date'
              saveDateButton.id = 'save-date-button'

              input.type = 'text'
              input.style.width = '140px'
              input.style.margin = '20px 0 20px'
              
              let holydayDate = cell.textContent + ' ' + month + 1 + ' ' + year

              holydayDateBlock.append(divWithHolydayDate)
              divWithHolydayDate.append(holydayDate, input, saveDateButton)
              
              saveDateButton.onclick = () => {
                let userDatesWrapper = document.getElementById('user-dates')
                
                if(input.value.length > 0){
                  let userDates = document.createElement('div')
                  let deleteButton = document.createElement('img')
                  
                  userDates.style.width = 'max-content'
                  userDates.style.margin = '10px'
                  userDates.style.padding = '10px'
                  userDates.style.borderRadius = '5px'
                  userDates.style.backgroundColor = 'bisque'
                  userDates.id = holydayDate.split(' ').join('-')

                  deleteButton.id = holydayDate.split(' ').join('-')
                  deleteButton.src = 'https://cdn2.iconfinder.com/data/icons/e-business-helper/240/627249-delete3-1024.png'
                  deleteButton.onclick = () => {
                    if(userDates.id === deleteButton.id){
                      userDates.remove()
                    }
                  }

                  userDates.append(holydayDate, input.value, deleteButton)
                  userDatesWrapper.append(userDates)
                  holydayDateBlock.innerHTML = ''
                }else if(input.value.length == 0){
                  holydayDateBlock.innerHTML = ''
                }
              }
            }
          }
          generationHolidaysDate()
        }
      }
  
      calendarBody.appendChild(row);
    }
  }
