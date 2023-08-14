var romanToInt = function(s) {
let obj={
 I:1,
 V:5,
 X : 10,
 L : 50,
 C : 100,
 D : 500,
 M : 1000
}
let arr=s.split("");
console.log(arr)
let arr_length=arr.length;
let integerValue=0;
let minus=0;
for(let i=0;i<arr_length;i++){ 
    if((arr[i]==='C' && arr[i+1]==='M') || (arr[i]==='C' && arr[i+1]==='D') || 
    (arr[i]==='X' && arr[i+1]==='L') || (arr[i]==='X' && arr[i+1]==='C') ||
    (arr[i]==='I' && arr[i+1]==='V') || (arr[i]==='I' && arr[i+1]==='X')   )  {
        minus=obj[arr[i+1]] - obj[arr[i]];
        integerValue=integerValue + minus;
        i++;
    }
   else{
    integerValue=integerValue + obj[arr[i]];

   }
    

}
return integerValue;
};
console.log(romanToInt("LVIII"))
