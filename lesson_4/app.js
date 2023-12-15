// DZ
var input = document.getElementById('input')
var plus = document.getElementById('plus')
var minus = document.getElementById('minus')
var sbros = document.getElementById('sbros')
var counter = 0

plus.onclick = increment
function increment (){
    input.value = Number(input.value) + 1
    changeColor()
}
minus.onclick = decrement
function decrement (){
    input.value = Number(input.value) - 1
    changeColor()
}
sbros.onclick = clear
function clear (){
    input.value = 0
    changeColor()
}
function  changeColor () {
    counter = Number(input.value)
    if (counter > 0){
        input.style.color = 'green'
    } else if (counter === 0) {
        input.style.color = "gray"
    }else{
        input.style.color = 'red'
    }
}
changeColor()