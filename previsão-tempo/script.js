const key = "c19af5c7981e7b1f07f5aa8e706d1d88"
//Responsável po pegar oque for digitado no input

function clickButton(){
    const inputCity = document.querySelector("#city-name").value;

    searchCity(inputCity);
}

//Responsável pela api de clima

async function searchCity(inputCity){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json() );

    climateDados(dados);
}

//Responsável por colocar os dados da cidade na tela do usuário
function climateDados(dados){
    console.log(dados)
    document.querySelector("#city").innerHTML = "Tempo em " + dados.name;
    document.querySelector("#temp").innerHTML =  Math.floor(dados.main.temp) + "°C";
    document.querySelector("#text-climate").innerHTML =  dados.weather[0].description;
    document.querySelector("#text-umidad").innerHTML =  "Umidade: " + dados.main.humidity + "%";
    document.querySelector("#img-previous").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}


