// 1 - Variáveis
let nome = "gui";

nome = "Sasa"

console.log(nome)

const idade = 31;

console.log(idade)

//idade = 32; - erro

console.log(typeof nome)
console.log(typeof idade)

//2 - Mais sobre variaveis

//let 2teste = "inavlid" 
//let @teste = "inavlid" 

let a=10, b=20, c=30 
console.log(a, b, c)

let nomecompleto = "gui marts"
let nomeCompleto = "sasa marts"

console.log(nomeCompleto)
console.log(nomecompleto)

// 3 - prompt

//const age = prompt("Digite sua idade:")
//console.log(`voce tem ${age} anos`)

// 4 - alert
//alert("testando")

const x = 20
//alert(`O número é ${x}`)

let ano = 2024
//alert(`O ano é: ${ano}`)

// 5 - Math
console.log(Math.max(3,5,76,877,76555,56)) // me indica qual o maior numero
console.log(Math.floor(34.78)) // arredondamento de números - número inferior
console.log(Math.ceil(56.7)) // arredondamento de números - número superior

// 6 - Console
//console.log("teste!")
//console.error("erro!")
//console.warn("aviso!")

// 7 if - estruturas de controle
const g = 18;

if(g > 12){
    console.log("g é maior q 18!")
}

const user = "lula"

if(user === "lula"){
    console.log("O nome do usuário é lula")
}
if(user === "janja"){
    console.log("O nome do usuário é janja")
}

console.log(user === "lula", user === "janja")

// 8 - else

const alanisgay = false

if(alanisgay){
    console.log("Alan é gay!")
} else{
    console.log("Alan não é gay!")
}


const oi = 56
const tim = 756

if(oi > 60 /*true*/ && tim > 766/*false */){
    console.log("Números mais altos!")
} else{
    console.log("os numeros não são mais altos!")
}