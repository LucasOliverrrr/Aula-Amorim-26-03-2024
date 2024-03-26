console.log("oi gente")

let contador = 0
let elem = document.getElementById("cxa_num")
console.log("elem", elem)

setInterval(() => {
    contador++
    if(contador > 59){
        contador = 0
    }
    if (contador < 10){
        elem.innerText = "0" + contador
    }else{
        elem.innerText = contador
    }
},100)

setInterval(() => {
    elem.style.fontSize++
},1000)
