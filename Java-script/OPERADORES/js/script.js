// 1 - Number
console.log(typeof 2)
console.log(typeof 5.14)
console.log(typeof -256)  

// 2 - Operações Aritméticas
console.log(12+13)
console.log(23-6)
console.log(2+(4*4))
console.log(5*8)
console.log(1500/2)

// 3 - Speciall numbers
console.log(typeof Infinity)

console.log(typeof -Infinity)

console.log(12 * 'asd')

console.log(typeof NaN)

// 4 - Strings
console.log("Texto")
console.log('Texto')
console.log(`Mais um texto`)

console.log(typeof 'texto')
console.log(typeof 'outro texto')

// 5 Símbolos especiais em string
console.log('Testando a \n quebra de linha')

console.log('Espaçamento \t de tab')

// 6 - Concatenação
console.log('meu' + 'texto' + 'combinado')
console.log("Oi, " + "tudo" +" bem?")

console.log(`Testando` + ` com crase!`)

// 7 - Interpolção - Template string
console.log(`A soma de 2 + 2 é: ${2 + 2}`)

console.log(`Podemos executar qualquer coisa aqui ${console.log('teste')}`)

// 8 - Booleans - true or false
console.log(true)

console.log(5 > 20)

console.log(30 > 10)

console.log(typeof true)

// 9 - Comparações
console.log(5 <= 5)

console.log(4 < 4)

console.log(10 == 10)

console.log(10 == 9)

console.log(10 != 9)

// 10 - Comparação de idêntico
console.log(9 == "9")

console.log(9 + "9")

console.log(9 === "9")

// 11 - Operadores lógicos
console.log(true && true)

console.log(true && false)

console.log(3 < 8 && 5 > 2)

console.log(3 < 8 && "gui" === 1) //AND - true and false = false

console.log(3 < 8 || "gui" === 1) //OR - true or false = true

console.log(3 > 8 || "gui" === 1) //OR - false or false = false

console.log(!true) //NOT - inverte o resultado se for !true = false e !false = true

console.log(!false) //NOT

console.log(!5>2) //NOT

// 12 - Null e undefined empty value
console.log(typeof null, typeof undefined);

console.log(null === undefined);

console.log(null == undefined);

console.log(null == false); //null = imposição.

console.log(undefined == false); //undefined = quando erramos algo.

// 13 - conversão do tipo automática
console.log(5 * null)

console.log("teste" * "opa")

console.log("10" + 1)

console.log("10" - 1)
