// con esto importamos el html en nuestro archivo de JS a tra vez de las clases
const main_card = document.querySelector(".main_card");
const parrafo = document.querySelectorAll(".parrafo");
const id = document.querySelector("#id");
const input = document.querySelector("input");

console.log(input.value);

console.log({
    main_card,
    parrafo,
    id,
    input,
});

//Es para cambiar el texto dentro del HTML de manera segura
//se puede usar .innerHTML pero ahi podes cambiar el html no es tan seguro para los ataques
main_card.innerText = "Hola Mundo";

//Es para ver lo que hay dentro de un atributo:
console.log(main_card.getAttribute("class"));

// Es para Agregar una "clase" a otra clase:
main_card.classList.add("verde");
// Para borrarlo se usa:
main_card.classList.remove("verde");
// Para poner y sacar una clase mas rapido se usa "toggle":
main_card.classList.toggle("verde")


//Para cambiarle el valor a input, es decir el "value" podemos usar:
input.value = "2023"