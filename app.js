const inputColor = document.querySelector("#inputColor")
const btnChoose = document.querySelector("#btnChoose")
const textHexa = document.querySelector("#textHexa")
const cardColor = document.querySelector("#cardColor")



btnChoose.addEventListener("click", () =>{
    textHexa.textContent =  inputColor.value
    cardColor.style.background =  inputColor.value
})