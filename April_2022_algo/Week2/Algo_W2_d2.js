// var monster = {
//     id: 1,
//     name: "Bulbasaur",
//     types: ["poison", "grass"]
// };

// console.log(monster.name)
// console.log(monster.types[1])


var pokemon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];

// function pokenames(pokemon){
//     for(var i =0; i<pokemon.length; i++){
//         if(pokemon[i].id > 99){
//             console.log(pokemon[i].name)
//         }
//     }
// }
// pokenames(pokemon);


// Challenges - using the array of pokémon above and loops:

// console.log the pokémon objects whose id is evenly divisible by 3

// function modthree(pokemon){
//     for(var j = 0; j < pokemon.length; j++){
//         if(pokemon[j].id % 3 == 0){
//             console.log(pokemon[j].name)
//         }
//     }
// }

// modthree(pokemon);



// console.log the pokémon objects that have more than one type

    // function poketypes(pokemon){
    //     for(var s = 0; s < pokemon.length; s++){
    //         if (pokemon[s].types.length > 1 ){
    //             console.log(pokemon[s].name);
    //         }
    //     }
    // }

    // poketypes(pokemon);

// console.log the names of the pokémon whose only type is "poison"

    // function poison(pokemon){
    //     for (var t = 0; t < pokemon.length; t++){
    //         if(pokemon[t].types == "poison"){
    //             console.log(pokemon[t].name);
    //         }
    //     }
    // }

    // poison(pokemon);

// console.log the first type of all the pokémon whose second 
//type is "flying"


    // function flying(pokemon){
    //     for(var p = 0; p < pokemon.length; p++){
    //         if (pokemon[p].types[1] == "flying"){
    //             console.log(pokemon[p].name)
    //         }
    //     }
    // }

    // flying(pokemon);

// Bonus Challenge: console.log the reverse of the names of the 
//pokémon whose only type is "poison"

function pokepoisonRev(){
    for (var i = 0; i < pokemon.length; i++){
        if(pokemon[i].types.length == 1 && pokemon[i].types == "poison"){
            var reverseName = "";
            for (var x = pokemon[i].name.length - 1; x >= 0 ; x--){
                reverseName += pokemon[i].name[x];
            }
            console.log(reverseName);
        }
    }
}

pokepoisonRev()