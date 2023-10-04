let inputElement=document.getElementById("input");
let search_text=document.getElementById("help-text");
let meaning_text=document.querySelector(".meaning-block");
let searchWord=document.getElementById("word");
let meaning=document.getElementById("meaning");
let audio_file=document.getElementById("audio-file");
const fetchAPI=async(value)=>{
    try {
        search_text.style.display="block";
        meaning_text.style.display="none"
        search_text.innerText=`Searching the meaning of "${value}"`
        const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`;
        const result=await fetch(url).then((result)=>{return result.json()}).catch((error)=>{
console.log(error)
        });
        search_text.style.display="none";
        meaning_text.style.display="block";
        console.log(result[0].phonetics[0].audio)
        searchWord.innerText=result[0].word;
        searchWord.style.color="black";
        meaning.style.color="black"
        meaning.innerText=result[0].meanings[0].definitions[0].definition;
        audio_file.src=result[0].phonetics[0].audio?result[0].phonetics[0].audio: audio_file.style.display="none"
      
    } catch (error) {
        searchWord.innerText=value;
        searchWord.style.color="red"
        meaning.innerText="Check the spelling"
        meaning.style.color="red";
        audio_file.style.display="none"
        console.log(error)
    }


}
inputElement.addEventListener("keyup",function(e){
    if(e.key==="Enter" && e.target.value!==""){
       fetchAPI(e.target.value)
    }
})
