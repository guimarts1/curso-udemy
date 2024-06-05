// 1 - Arrays
/*const lista = [1,2,3,4,5];

console.log(lista);
console.log(typeof lista);

const itens = ["gui", true, 2, 2.34, []];

console.log(itens)

// 2 - Mais sobre arrays
const arr = ["a", "b", "c", "d", "e"];

console.log(arr[0]);
console.log(arr[2]);
console.log(arr[6]);

// exemplo:
const arr = ["a", "m", "o", "r"];

console.log(arr[0],arr[1],arr[2],arr[3])


// 3 - Propriedades
const numbers = [5, 3, 4];

console.log(numbers.length);
console.log(numbers["length"]);

const myName = "Guilherme"

console.log(myName.length);



// 4 - Métodos
const otherNumbers = [1, 2, 3];

const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);


const text = "algum texto";

console.log(text.toUpperCase());
console.log(typeof text.toUpperCase);
console.log(text.indexOf("g"));

// 5 - objetos
const person = {
    name: "Matheus",
    age: 31,
    job:"Garoto de programa",
};

console.log(person);//me mostra todos os dados 
console.log(person.name);//mostra o nome
console.log(person.age);//mostra a idade
console.log(person.job);//mostra o trampo
console.log(typeof person);//object*/


// 6 - mais objetos
const obj = {
    a: "teste",
    b: true
};

console.log(obj instanceof Object);

const obj2 = {
    c: []
};

// o assing faz uma copia do obj > obj2 ---->
Object.assign(obj2, obj);

console.log(obj2);

// 7 - conhecendo melhor objetos keys / entries

console.log(Object.keys(obj));
console.log(Object.keys(obj2));

console.log(Object.entries(obj2));

// 8 - mutação(mutability)
const a = {
    name: "Gui"
};

const b = a; //não cria um obj novo é apenas uma referencia

console.log(a);
console.log(b);

console.log(a === b);

a.age = 21;

console.log(a);
console.log(b);

delete b.age;

console.log(a);
console.log(b);