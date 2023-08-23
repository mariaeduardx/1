const hobbies = ["ler", "escutar música", "comprar", "dormir"];

const runningPosition = hobbies.findIndex(function(hobby) {
    return hobby === 'comprar';
    });
    console.log("Comprar está na posição: " + runningPosition);