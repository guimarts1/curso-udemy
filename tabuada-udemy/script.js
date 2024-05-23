// Seleção de elementos
const multiForm = document.querySelector("#multi-form")
const numberInput = document.querySelector("#number")
const multiInput = document.querySelector("#multiplicator")
const multiTablle = document.getElementById("multi-operations")
const multiTitle = document.querySelector("#multi-title span")



// Funções
const createTable = (number, multipliqueNumber) => {

   multiTablle.innerHTML = "";

   for(i = 1; i <= multipliqueNumber; i++){

        const result = number * i;

        const template = `<div class="row">
        <div class="operation">${number} x ${i} = </div>
        <div class="result">${result}</div>
        </div>`;

        const parser = new DOMParser();

        const htmlTemplate = parser.parseFromString(template, "text/html");

        const row = htmlTemplate.querySelector(".row");

        multiTablle.appendChild(row);

        multiTitle.innerText = number;

   }

};



// Eventos
multiForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const multiNumber = +numberInput.value;

    const multipliqueNumber = +multiInput.value;

    if(!multiNumber || !multipliqueNumber) return;

    createTable(multiNumber, multipliqueNumber);


});