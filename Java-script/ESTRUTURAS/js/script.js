// indentação muito importante!!

// 14 - break

for(let g = 20; g > 10; g--){
    console.log(`o valor de g é ${g}`)

    if(g === 15){
        console.log("o g é 12!")
        break;
    }
}

// 16 - switch

const job = "Programador"

switch(job){
    case "Programador":
        console.log("vc é garoto de programa!")
        break
    case "advogado":
        console.log("vc defende bandido!")
        break
    case "pedreiro":
        console.log("vc faz muro!")
        break
    default: //ads
        console.log("profissão não encontrada")

}