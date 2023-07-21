'use strict'

function styles(div) {
    div.style.width = '100px';
    div.style.height = '30px';
    div.style.backgroundColor = 'lightblue';
    div.style.paddingTop = '10px';
    div.style.textAlign = 'center';
    div.style.fontFamily = 'sans-serif'
    div.className = 'divs-in-boot-menu'
    div.style['border-radius'] = '4px'
}

function givingOutMenu(){
    const component = document.createElement('div');
    component.style.marginTop = '15px'

    for (let i = 0; i < 3; i++) {
        const child = document.createElement('div');
        child.textContent = `Child ${i+1}`;
        component.appendChild(child);
        child.style.width = '100%';
        child.style.height = '25px';
        child.style.backgroundColor = 'white';
        child.style.marginTop = '5px'
        child.style.marginLeft = '50px'
        child.style.border = '1px solid black'
    }
    
    return component;
}


function createBootMenu() {
    let bootMenu = document.getElementById('boot-menu')
    let div1 = document.createElement('div')
    let div2 = document.createElement('div')
    let div3 = document.createElement('div')

    div1.textContent = 'спорт'
    div2.textContent = 'еда'
    div3.textContent = 'здоровье'

    styles(div1)
    styles(div2)
    styles(div3)

    bootMenu.append(div1, div2, div3)
    bootMenu.style.display = 'flex'
    bootMenu.style.justifyContent = 'space-evenly'
    bootMenu.style.backgroundColor = 'darkblue'
    bootMenu.style.height = '50px'
    bootMenu.style.paddingTop = '10px';

    bootMenu.onmouseover = (ev) => {
        if(ev.target.className === 'divs-in-boot-menu'){
            ev.target.style.background = "#fce46e"
            ev.target.appendChild(givingOutMenu());
            console.log(typeof(givingOutMenu()));
        }
    }
    bootMenu.onmouseout = (ev) => {
        if(ev.target.className === 'divs-in-boot-menu'){
            ev.target.style.background = "lightblue"
            if(typeof(ev.target) === typeof(givingOutMenu())){
                ev.target.innerHTML = ''
            }
            div1.textContent = 'спорт'
            div2.textContent = 'еда'
            div3.textContent = 'здоровье'
        }
    }
}
createBootMenu()