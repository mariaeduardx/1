const hobbies = ["ler", "escutar música", "comprar", "dormir"];

const allShort = hobbies.every(function(hobby) { return hobby.length < 15; });
console.log("Todos os meus hobbies têm menos de 15 letras? " + allShort);

//desafio
const ahobbies = ["ler", "escutar música", "comprar", "dormir"];

const minusculo = ahobbies.every(function(hobby) {
    return /^[a-z]/.test(hobby);
});

console.log("Verifique se todos os seus hobbies começam com letras" + minusculo)
