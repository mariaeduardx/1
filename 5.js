const hobbies = ["ler,", "escutar música,", "comprar e", "dormir"];

const allHobbies = hobbies.reduce(function(accumulator, hobby) {
    return accumulator + " " + hobby; }, "");
    
    console.log("Meus hobbies são: " + allHobbies);