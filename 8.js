const hobbies = ["ler", "escutar música", "comprar", "dormir"];

const fiveLetterHobby = hobbies.find(function(hobby) {
    return hobby.length === 5; });
    console.log("Meu primeiro hobby com 5 letras é: " + fiveLetterHobby);

//desafio
const Zhobbies = ["ler", "escutar música", "comprar", "dormir"];
const zHobby = Zhobbies.find(function(hobby) {
    return hobby.includes('z');
});

console.log("Meu primeiro hobby com a letra 'z' é: " + zHobby);