'use strict'

class DivWrapper {
    constructor() {
      this.div = document.createElement('div');
      this.div.style.width = '500px';
      this.div.style.height = '500px';
      this.div.style.borderRadius = '5px';
      this.div.style.border = '1px solid black';
    }
    getDiv() {
      return this.div;
    }
}
const myDivWrapper = new DivWrapper();
const divWrapperElement = myDivWrapper.getDiv();


class DivCreator {
  // this.div.className = 

  constructor() {
    this.div = document.createElement('div');
    this.div.style.width = '50px';
    this.div.style.height = '50px';
    this.div.style.borderRadius = '5px';
    this.div.style.border = '1px solid black';
  }
  getDiv() {
    return this.div;
  }
}


let iterator = (wrapper, num) => {
  for(let i = 0; i < num; i++){
    
    const myDiv = new DivCreator();
    const divElement = myDiv.getDiv();
    wrapper.appendChild(divElement)
  }
  return wrapper
}
iterator(divWrapperElement, 5)
console.log(iterator(divWrapperElement, 5));


document.body.appendChild(divWrapperElement);
document.body.style.display = 'flex'
document.body.style.justifyContent = 'center'
document.body.style.marginTop = '5%'