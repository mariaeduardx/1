const hobbies = ["ler", "escutar música", "comprar", "dormir"];

const dHobbies = hobbies.filter(function(hobby) {
    return hobby[0] === 'd';
    } );
    
    console.log(dHobbies);


    //desafio
const nhobbies = ["ler", "escutar música", "comprar", "dormir"];

const tamanhoHobbies = nhobbies.filter(function(hobby) {
    return hobby.length > 10;
});

console.log("Hobbies com mais de 10 letras: ", tamanhoHobbies);