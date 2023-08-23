const hobbies = ["ler", "escutar música", "comprar"];

const bookTitles = hobbies.map(function(hobby) {
    return "O incrível mundo de " + hobby;
    });
    console.log(bookTitles);


    //desafio
const bhobbies = ["ler", "escutar música", "comprar"];
const catalogo = bhobbies.map(function(hobby) {
    return "Livro sobre " + hobby;
});

console.log("Catálogo de livros baseado em hobbies:");
console.log(catalogo);