'use strict'

function time(){
    let time = document.getElementById('time')
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let oClock = hours + ':' + minutes

    if(hours >= 22 || hours <= 4){
        time.append('NIGHT \n0'+ oClock)
    } else if(hours <= 4 || hours <= 10){
        time.append('MORNING \n', oClock)
    } else if(hours <= 10 || hours <= 16){
        time.append('DAY \n', oClock)
    } else if(hours <= 16 || hours < 22){
        time.append('EVENING \n', oClock)
    }
    time.style.fontSize = '80px'
    time.style.color = 'rgb(0, 225, 255)'
    time.style.textShadow = '0px 0px 30px'
}
time()
