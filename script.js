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
    let calc = Math.floor(Math.random() * 6);
    frase.innerText = lista[calc];
    container1.classList.add("hide");
    container2.classList.remove("hide");
});
button2.addEventListener('click', function() {
    container2.classList.add("hide");
    container1.classList.remove("hide");
})