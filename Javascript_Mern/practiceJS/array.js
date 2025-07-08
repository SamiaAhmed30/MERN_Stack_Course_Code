//q1
let students = []; //Literal Notation
let studentName = new Array(); //Object Notation

//Q2
let strArr = ["S","Samia","Ahmed","Tae","Karachi","Seoul"]; 
let num = [1,2,4,5,6,6,7,8,9,9];
let bool = [true,false];
let mixed = ["abx",34,false,"Pheonix","Reborn",null];

//q3
let education = ["SSC","HSC","BCS","BS","BCOM","MS","MPHIL","PHD"]
document.write("<h2>Qualifications in Pakistan</h2>")
document.write("<ol>");
for(let i = 0; i< education.length;i++){
          document.write("<li>"+ education[i]+"</li>")
}

document.write("</ol>");
//q4
let score = [320,230,480,120]
document.writeln(`Scores of Students: ${score}`)
score.sort()
document.writeln(`Scores of Students after sorting: ${score}`)

//q5
students = ["Dara","Ali","Jia"];
let marks = [320,230,480];
let totalMarks =500;
for(let i =0; i <students.length;i++){
    let percentage = (marks[i]/totalMarks)*100;
    console.log(`Score of ${students[i]} is ${marks[i]}. Percentage: ${percentage}%`)
}
//q6
let colorname = ["red","yellow","green","purple","blue","silver","grey"]
console.log(colorname);
let beg = prompt("What color do you want to add in the beginning: ");
colorname.unshift(beg)
console.log(colorname)
let end = prompt("What color do you want to add in the end of the array: ");
colorname.push(end)
console.log(colorname)
colorname.unshift("Maroon","Black");
console.log(colorname)
colorname.shift()
console.log(colorname)
colorname.pop()
console.log(colorname)
let chl = prompt("What color do you want to add in the array: ");
let index =Number( prompt("At what position do you want to add this color: "))

colorname.splice(index,0,chl)
console.log(colorname)

let ind =Number( prompt("At what position do you want to delete color: "))
let cnt =Number( prompt("How many colors do you want to delete: "))
colorname.splice(ind,cnt)
console.log(colorname)

//q7
let citynames = ["Karachi","Islamabad","Lahore","Quetta","Peshawar"];
let selected = citynames.slice(1,4);
console.log(citynames)
console.log(selected)

//q8
let arr = ["This","is ", "my ","cat"];
let str = arr.join()
console.log(str)
console.log(arr)

//q9
let newarr = [];
newarr.push("Keyboard")
newarr.push("Mouse")
newarr.push("Monitor")
newarr.push("Internet")
newarr.push("Web")
newarr.push("CPU")
console.log("Devices:", newarr);

let firstOut = newarr.shift()
console.log("Removed: ",firstOut)
 firstOut = newarr.shift()
console.log("Removed: ",firstOut)
firstOut = newarr.shift()
console.log("Removed: ",firstOut)

//q10
let abc = [];
abc.push("Harvard")
abc.push("Paris")
abc.push("London")
abc.push("NYC")
abc.push("Italy")
abc.push("Chicago")
console.log(abc)
let lastOut = abc.pop()
console.log("Out: ",lastOut)
lastOut = abc.pop()
console.log("Out: ",lastOut)
lastOut = abc.pop()
console.log("Out: ",lastOut)

//q11
let phoneman = ["Apple","Samsung","Motorolla","Nokia","Sony","Haier"];
document.write("<h2>Phone Manufactures</h2>")
document.write("<select>")
for(let i=0; i<phoneman.length;i++){
    document.write("<option>"+phoneman[i]+"</option>")
}
document.write("</select>")

//q12
let multi = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
console.log(multi)

//q13
for(let i =1;i<=10;i++){
    console.log(i)
}

//q14
let fruits = ["apple","banana","mango","orange","strawberry"];
console.log(fruits)

fruits.forEach((value ,index)=>{
    console.log(`Element at index ${index} is ${value}`);
})

//q15
for(let i = 1; i<=15;i++){  //1-15 counting
    console.log(i)
}

for(let j = 10; j>=1; j--){  ///reverse counting
    console.log(j);
}

for(let s= 0; s <=20; s=s+2){    //even num
    console.log(s)
}
for(let t=1;t<=19;t=t+2){      //odd num
    console.log(t)
}
for(let z=2;z<=20;z=z+2){
    console.log(z+"k")
}

//q16
let A = ["cake","applepie","cookie","chips","paties"];
let search = prompt("Welcome user! what do you want to order: "); 
let bl = A.indexOf(search)
if(bl!== -1){
    alert(`${search} is available at index ${bl} `)
}
else{
    alert(`We are sorry! ${search} is not available in our Bakery!`)
}

//q17
let B = [24,53,78,200,785,91,12] //Find the Largest num in the array
console.log("Array items: ",B)
let l = Math.max(...B)  //spread Operator
console.log("Largest: ",l)

//q18
let C = [24,53,78,200,785,91,12] //Find the smallest
console.log("Array items: ",C);
let lr = Math.min(...C);
console.log("Smallest: ",lr)

//q19
for (let k=5; k<=100; k=k+5){
    console.log(k)
}

//q20
let ary = [1,2,3,4,5,6,2,3] //delete all occ of 2
let numb = 2;
for(let i =0; i<ary.length; i++){
    if(ary[i]==numb){
        ary.splice(i,1) // Removes element at index i
    }
}
console.log(ary);


