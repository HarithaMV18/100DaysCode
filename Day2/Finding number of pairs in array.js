function arr_pair(ar) {

    let count=0;
    let pair=0;
    let arr=ar;
    arr.sort(function(a,b){
    return (a-b)
  })
for(let i=0;i<arr.length;i += 2){
    if(arr[i]===arr[i+1]){
        count++
    }
    else{
        i--;
    }
}
console.log("Number of pairs: "+count);
  
 
}
arr_pair([10,20,30, 20, 20, 10, 10, 30, 50, 10, 20,30]);
