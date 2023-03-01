//code to calculate largest and smallest value in an array
const array = [11,3,7,8,90,2,33];
let i,smallest,largest;
largest=smallest=array[0];
for(i=0;i<=array.length;i++){
    if(array[i]>largest)
    largest=array[i];
    if(array[i]<smallest)
    smallest=array[i];
}

console.log("largest="+largest);
console.log("smallest="+smallest);
