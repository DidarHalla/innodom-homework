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
                div.onclick = (ev) => {
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
