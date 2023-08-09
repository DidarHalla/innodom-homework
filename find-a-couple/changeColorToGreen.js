export let changeColorToGreen = (arr) => {
    let time = () => {
        if(arr.length === 2 && arr[0] === arr[1]){
            let div = document.getElementsByClassName(arr[0])
            div = Array.prototype.slice.call(div);
            div.forEach(v => {
                v.style.backgroundColor = 'green'
            })
            arr.length = 0
        } else if(arr.length === 2 && arr[0] !== arr[1]){
            let div1 = document.getElementsByClassName(arr[0])
            div1 = Array.prototype.slice.call(div1);
            div1.forEach(v => {
                v.style.backgroundColor = '#fff'
            })
            let div2 = document.getElementsByClassName(arr[1])
            div2 = Array.prototype.slice.call(div2);
            div2.forEach(v => {
                v.style.backgroundColor = '#fff'
            })
            arr.length = 0
        }
    }
    setTimeout(time, 1000)
}