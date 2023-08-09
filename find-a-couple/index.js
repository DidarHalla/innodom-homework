'use strict'

import { cards } from "./cards.js";
import { changeColorToGreen } from "./changeColorToGreen.js";


// shuffle(cards);
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
shuffleArray(cards)

//memory game logical
const htmlElements = {

  root: document.getElementById('root'),

  allElem: function(arr){
    this.root.style.width = '300px';
    this.root.style.height = '300px';
    this.root.style.display = 'flex';
    this.root.style.flexWrap = 'wrap';
    this.root.style.margin = '10% 0 0 20%';


    (arr || []).forEach((v, i) => {
      let div = document.createElement('div')
      div.style.width = '50px'
      div.style.height = '50px'
      div.style.margin = '5px'
      div.style.borderRadius = '5px'
      div.style.border = '1px solid #000'
      div.style.color = '#fff'
      div.style.display = 'flex'
      div.style.justifyContent = 'center'
      div.style.cursor = 'pointer'
      
      div.className = arr[i].id
      div.innerText = arr[i].id

      this.root.append(div)
    })
  
    let openCards = () => {
      let targetsArr = [] //array with id first and second click
      
      root.onclick = (ev) => {

        if(ev.target.className.length === 1){
          ev.target.style.backgroundColor = '#000'
          ev.target.style.transition = 'background-color 0.5s, color 0.5s, transform 0.5s'

          
          targetsArr.push(ev.target.className)
          changeColorToGreen(targetsArr)
        }
      }
    }
    openCards()
  }
}
htmlElements.allElem(cards);
