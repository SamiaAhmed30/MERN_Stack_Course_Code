let arr = ["abc","def","mango","Apple","tree"];

for(let i = 0; i<arr.length; i++){
    console.log(i,arr[i])
}
//If you want to print array in reverse using using loop
let fruits = ["abc","def","mango","Apple","tree"];

for(let i = fruits.length-1; i>=0; i--){
    console.log(i,fruits[i])
}

//for of loop
//with array
for( fruit of fruits ){
    console.log(fruit)
}
//with string
for(char of "Samia Ahmed"){
    console.log(char)
}
//WITH NESTED ARRAY
let heroes = [["Superman","Batman","Wonderwoman"],["Spiderman","Ironman","Thor"]];
for(list of heroes){ //it will only print them as list not as individual elements like arr 1 and arr 2
    for(hero of list){
        console.log(hero)
    }

}
