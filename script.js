const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const frase = document.querySelector("#frase");

const lista = [
    "Acredite em si mesmo e você será imparável.",
    "Cada dia é uma nova oportunidade para brilhar.",
    "Se você pode sonhar, pode realizar.",
    "A persistência leva ao sucesso.",
    "A jornada mais longa começa com um único passo.",
    "Sua determinação é sua maior força."
]

button1.addEventListener('click', function() {
    container1.classList.add("hide");
    container2.classList.remove("hide");
    let calc = Math.floor(Math.random() * 6);
    frase.innerHTML = lista[calc];
    // setTimeout(() => {
        frase.style.marginTop = '100px'
        frase.style.position = 'relative'
        frase.style.transform = "scale(1.1)";
        frase.style.transition = "1s";
    // },100)

});
button2.addEventListener('click', function() {
    container2.classList.add("hide");
    container1.classList.remove("hide");
})