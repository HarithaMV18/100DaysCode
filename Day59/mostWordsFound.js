var mostWordsFound = function(sentences) {
 let result=   sentences.map((item)=>{
    return item.split(" ").length

    })

    return(result.sort((a,b)=>{return a-b})[result.length-1])
    
};
console.log(mostWordsFound(["brjmzkatznpzhomilyyhaerytedrrwrkpuujbncfncgs",
"u yn mwbuqymvtq z etdw p nx awixyietwg a jhsklavdagvhxdy",
"v moahq bfhrdhxobkyccxbwduwbgsgdbngviidlaj"]))
