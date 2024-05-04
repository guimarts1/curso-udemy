// 1 - Criando uma função
/*function myFunction(){
    console.log("Testando!");
}

myFunction();
myFunction();

const myFunctionInVariavel = function(){
    console.log("Função em variável!");
}

myFunctionInVariavel();

function funcaoParametro(txt){
    console.log(`Imprimindo: ${txt}`)
}

funcaoParametro("Imprimindo alguma coisa!")
funcaoParametro("Olá Mundo!")

// 2 - Return
const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1, n2){
    return n1 + n2;
}

const resultado = soma(a, b);

console.log(resultado);

console.log(soma(c, d));

// 3 - Escopo da função
let y = 70;

function testandoEscopo(){
    let y = 50;
    console.log(`Y dentro da função é: ${y}`);
;
}

console.log(`Y fora da função é: ${y}`)

testandoEscopo();

// 4 - Escopo Aninhado
let m = 10

function escopoAninhado(){
    let m = 20;

    if(true){
        let m = 30;

        if(true){
            let m = 40;

            console.log(m)
        }

        console.log(m)
    }

    console.log(m)
}

escopoAninhado(); //escopo aninhado

console.log(m); //escopo global

// 5 - Arrow Function
const testArrow = () => {
    console.log("Esta é uma Arrow Function!")
}

testArrow()

const parOuimpar = (n) =>{
    if(n % 2 === 0){
        console.log("Par");
        return;
    }

    console.log("Impar")
}

parOuimpar(5);
parOuimpar(10);

// 6 - Mais sobre arrow function
const raizQuadrada = (x) => {
    return x * x;
}

console.log(raizQuadrada(4));

const raizQuadrada2 = (x) => x * x

console.log(raizQuadrada2(5));
console.log(raizQuadrada2(10));

const helloWorld = () => console.log("Hello World")
helloWorld();

// 7 - Parametro opcional
const greeting = (nome) => {
    if(!nome){
        console.log("Olá!");
        return;
    }

    console.log(`Olá ${nome}!`)
}

greeting();
(greeting("pedro"));

// 8 - valor Default
const customGreeting = (name, greet = "Olá!") => {
    return `${greet}, ${name}!`
}

console.log(customGreeting("gui"))

console.log(customGreeting("sasa", "bom dia"))

const repeatText = (text, repeat = 2) => {

    for(let i = 0; i < repeat; i++){
        console.log(text);
    }

}

repeatText("testando")
repeatText("testando 5", 5)

// 9 - closures
const multiClo = (n) => {
    return(m) => {
        return n * m;
    };
};

const c1 = multiClo(5)
const c2 = multiClo(10)


console.log(c1);

console.log(c2);

console.log(c1(5));
console.log(c1(10));

// 11 - recursão
//não criar loops infinitos

function fatorial(x){
    if(x === 0){
        return 1
    } else{
        return x * fatorial(x - 1)
    }
}

const num = 2
const result = fatorial(num)

console.log(`o fatorial do número ${num} é ${result}`)*/