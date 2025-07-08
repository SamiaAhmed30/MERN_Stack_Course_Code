//for loop

for( i = 0; i<=20; i++){
    console.log(i)
}
//for-in loop :  if you want to print keys of obj
let obj = {
    name : "Samia",
    age : 25,
    role : "student"

}
for (const key in obj) {
        const element = obj[key];
        console.log(key,element);
        
}

//for of loop: 
let abc = "SAMIA AHMED"   //with string 
for (const str of abc) {
    console.log(str)
}
let arr = ["we", 23 , "picnic", "love",30,16]  //with array
for (const pic of arr) {
    console.log(pic)
}
//while loop
let j = 1;
while(j<10){
    console.log(j);
    j++;
    
}

//for each loop 
//when you apply this loop on array, it prints array value, its index no and full array
let a = [1, 2, 4, 8, 6];
a.forEach((value, index, arr) => {
  console.log(value, index, arr);
});