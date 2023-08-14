/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
     // let charCount=0;
    let commonPrefix="";
    let string1=strs[0];
    let string2=strs[1];
   
   function compareRemainingArrStrings(commonPrefix){
    for(let j=2;j<strs.length;j++){
        while((strs[j]).slice(0,commonPrefix.length)!==commonPrefix){           
            commonPrefix = commonPrefix.slice(0,-1);
        }
    }
    return (commonPrefix)
   }
   if(string1==="" || strs.length===1){
    return string1
   }
   else if(string1.charAt(0)!==string2.charAt(0) ){
           
    return (commonPrefix)
   }
   else if(string1 === string2){
    commonPrefix=string1;
    return compareRemainingArrStrings(commonPrefix)
   }
   else{
    for(let i=0;i<string1.length;i++){
       
        if(string1.charAt(i)===string2.charAt(i)){
            commonPrefix+=string1.charAt(i) ;
            if(i===string1.length-1){
                return compareRemainingArrStrings(commonPrefix)
            }
            
        }
        
        else{
            
        return    compareRemainingArrStrings(commonPrefix)
            break;
        }
        
    }

   }
    
};
// ---------------------------------------------another solution--------------------------------------------------------------
// or
// var longestCommonPrefix = function(strs) {
//     strs.sort();
//     console.log(strs)


//   for (let i = 0; i < strs[0].length; i++) {
   
//     if (strs[0][i] !== strs[strs.length - 1][i]){
        
// return strs[0].substr(0, i);
//     } 
//   }

//   return strs[0];  
// };
//console.log(longestCommonPrefix(["flower","flow","flower","flight"]));
