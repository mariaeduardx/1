const hobbies = ["ler", "escutar música", "comprar", "dormir"];

const hasVHobby = hobbies.some(function(hobby) {
    return hobby[0] === 'v'; });
    
    console.log("Eu tenho um hobby que começa com 'v'? " + hasVHobby);

    
    //desafio
 const ahobbies = ["ler", "escutar música", "comprar", "dormir"];

const allShort = hobbies.every(function(hobby) { return hobby.length > 8; });
console.log("Todos os meus hobbies têm mais de 8 letras? " + allShort);