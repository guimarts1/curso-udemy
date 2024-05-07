const container = document.querySelector(".container")
const qrCodeBtn = document.querySelector("#btn-qr")
const qrCodeInput= document.querySelector("#qr-input")
const qrCodeImg = document.querySelector("#qr-code img")


qrCodeBtn.addEventListener("click", () =>{
    let qrValue = qrCodeInput.value;
    if(!qrValue){
        alert("Insira uma Url ou texto para gerar um QR code!")
        return;
    }

    qrCodeBtn.innerText = "Gerando um QR code..."

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`

    qrCodeImg.addEventListener("load", () => {
        qrCodeBtn.innerText = "Gerar QR code"
        container.classList.add("active")
    })

})