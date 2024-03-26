console.log("oi gente")

let contador = 0

function incrementa(params) {
    contador++
    console.log("contador", contador)
}
setTimeout(incrementa,1000)
console.log("contador: ", contador)