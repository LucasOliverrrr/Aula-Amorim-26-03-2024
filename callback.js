import {contador, incrementa, addReset} from "./funcoes.js"
console.log("oi gente")

let tamanho = 40
let elem = document.getElementById("cxa_num")
//console.log("elem", elem)

setInterval(() => {
    addReset(1, 60)
    if (contador < 10){
        elem.innerText = "0" + contador
    }else{
        elem.innerText = contador
    }
},100)

setInterval(() => {
    tamanho = tamanho + 1
    elem.style.fontSize = tamanho + "pt"
},1000)
