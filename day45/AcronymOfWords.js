var isAcronym = function(words, s) {
  let acronym=""
  words.forEach((item)=>{
    acronym+=item[0]
  })
 return acronym===s?true:false
    
};
console.log(isAcronym(["alice","bob","charlie"],"abc"))
