const pokemonImg=document.querySelector(".pokemon-img img");
const pokemonName=document.querySelector(".container > h3");
const pokemonTypes=document.querySelector(".poke-types").children;
// let abilities=document.querySelector(".characteristics").children;
const attack=document.querySelector("#attack").children;
const defense=document.querySelector("#defense").children;
const speed=document.querySelector("#speed").children;

const generatePokemon=async(random_pokemon)=>{
    try {
        let url=`https://pokeapi.co/api/v2/pokemon/${random_pokemon}`;
        let result=await fetch(url).then((response)=>{
            return response.json();
        
        })
        //pokemonImage
        pokemonImg.src=result.sprites.other.dream_world.front_default;
        //pokemonName
        pokemonName.innerText=result.name;
        //pokemonTypes
       if(result.types.length==1){
        pokemonTypes[0].innerText=result.types[0].type.name;
        pokemonTypes[1].style.display="none"
       }
       else if(result.types.length==2){
        pokemonTypes[1].style.display="block"
         pokemonTypes[0].innerText=result.types[0].type.name;
         pokemonTypes[1].innerText=result.types[1].type.name;
       }
       //pokemon abilities
       //attack
    // console.log(result.stats[1].stat.name)
    attack[0].innerText=result.stats[1].base_stat;
    //defense
    // console.log(result.stats[2].stat.name)
    defense[0].innerText=result.stats[2].base_stat;
    //speed
    // console.log(result.stats[5].stat.name)
    speed[0].innerText=result.stats[5].base_stat;

        
    } catch (error) {
        console.log(error)
        
    }


}
const defaultPokemon=()=>{
    generatePokemon(1)
}
const randomPokemon=()=>{
    let random_pokemon=Math.floor(Math.random()*150)+1;
  
    generatePokemon(random_pokemon)
}
let generateBtn=document.getElementById("generate");
//To generate random pokemon
generateBtn.addEventListener("click",randomPokemon);
//when page loads call the default pokemon
window.addEventListener("load",defaultPokemon);
