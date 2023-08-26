'use strict'

let alertValue = () => {
    let textInput = document.getElementById('textInput')
    let submitInput = document.getElementById('submitInput')
    submitInput.onclick = () => {
        alert(textInput.value)
    }

}
alertValue()


let select = () => {
    let select = document.getElementById('select')
    let chooseLanguage = document.getElementById('choose-language')
    let bull = true

    chooseLanguage.onclick = () => {
        if(bull){
            let arr = ['HTML', 'CSS', 'JavaScript', 'React', 'Json']

            arr.forEach((v) => {
                let div = document.createElement('div')
                div.innerHTML = v
                div.className = 'select-divs'
                div.onclick = () => {
                    chooseLanguage.innerHTML = div.textContent
                    select.innerHTML = ''
                    bull = true
                }
                select.append(div)
            })
            bull = false

        } else {
            select.innerHTML = ''
            bull = true
        }
    }
}
select()


let task28dop1 = () => {
    let task28Dop1 = document.getElementById('task28-dop1')
    let size = 500;

    function animation () {
        size -= 1;
        
        if (size > 0) {
            task28Dop1.style.borderRadius = `${size}%`;
            requestAnimationFrame(animation);
        }
    }

    setTimeout(()=>{
        animation();
    }, 1000)
}
task28dop1()


let task28dop2 = () => {
    let task28Dop2 = document.getElementById('task28-dop2')

    let pick = 0;
    const radius = 200;
    const spit = 0.1;

    function radElem () {
        const x = radius * Math.cos(pick);
        const y = radius * Math.sin(pick);
        task28Dop2.style.transform = `translate(${x}px, ${y}px)`;
        pick += spit;
        requestAnimationFrame(radElem);
    }

    radElem();
}
task28dop2()




let task28dop3 = () => {
    let transition = document.querySelector('.transition')
    window.onload = () => {
        setTimeout(() => {
            transition.classList.remove('is-active')
        }, 500)
    }
    
}
task28dop3()
