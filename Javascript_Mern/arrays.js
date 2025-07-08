let students = ["samia", 'Tae',"J"]; //string array
let marks = [3,4,5,6,7,8];  //number array
let info = ["samia" , 7, 45.2]; //mixed array

//array: linear collection of data

//acces via index no.
console.log(marks[4]);

//this will print whole string which is on that index but after that 
//it will print the ch we want of that str
info[0][0] //output --> s
//it will get samia then print s (on indexx 0)

//Arrays are mutable
let fruits = ["mango","Apple","Peach"];
fruits[0]  = "Banana";//change from mango to banana 
//this change has been made to the original aaray permenantly. no new array is created
console.log(fruits);

//Array Method:
//1. Push(): add something to the end of array 
let cars = ["bmw","Ferrari", "audi","tesla"];
cars.push("Toyota"); // add to the end
console.log(cars);
//2. pop(): it deletes element from the end of the array and return it 
cars.pop();
console.log(cars);
//3. Unshift(): it adds something to the start of array
cars.unshift("toyota");
console.log(cars)
//4. Shift(): it deletes element from the start of the array and return it 
cars.shift(); 
console.log(cars);

//Qs
let month = ["January", "July", "March","August"];
console.log(month);
month.shift(); //remove january
month.shift(); //remove july
month.unshift("June"); //add to the start
month.unshift("July");
console.log(month);

//5. indexof(): returns index of an element, if not found then -1
let primary = ["red", 'yellow','blue'];
console.log(primary.indexOf("yellow"));

//6. includes(): it searches for a value, if found return true, not found then false
console.log(primary.includes("yellow"));

//7. concat(): merge two different arrays together through this method
let secondary = ["orange", "green","violet"];
console.log(primary.concat(secondary)); //it will merge primary(ar 1) and secondary array(ar 2)
//and returns a new array after merge, no changes in org arrays

//8. reverse(): it reverses the array, it make changes to the original array 
let rev = secondary.reverse(); //org array is reversed
console.log(rev);
//9. slice() : it returns a part of array as a new string
let colors = ["red","green", "yellow", "pink","violet","blue"];
console.log(colors.slice(2)); //starting index is given, end index is end of the array, till the end
console.log(colors.slice(1,2)); //E.I is not included
console.log(colors.slice(2,5)); //S.I and E.I
console.log(colors.slice(-2)); //last 2 elements will print
//10. splice(): 
console.log(colors.splice(4)); //it will work as slice(), will return a part of the array from S.I to end and will delete the part for org array
console.log(colors) //it deleted the piece that was previously returned in the org array
console.log(colors.splice(0,1)); //strt index is zero, start deleting from zero index and delete 1 element
colors.splice(1,0,"purple","dark green","sky blue", "maroon") //no elements are being deleted just adding elements
console.log(colors);//new elements will be added to 1 index or any index you want to add new items like index 0

//11. sort(): arrange an array in ascending/ descending order
let days = ["wednesday", "friday","tuesday","monday","sunday"];
days.sort();
console.log(days)

//12. join(): it returns arrays as a string and does not change the original array.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join();

//qs 
let mnt = ["january","july","march","august"];
mnt.splice(0,2,"july","june");
console.log(mnt);

let lang = ["c","c++","html","javascript","python","java","c#","sql"];
lang.reverse();
console.log(lang.indexOf("javascript"));

//Nested array: array inside an array/also known as multi dimentional array
let nums = [[1,2],[3,4],[5,6]];
            //0 I   1I    2Index  
//this array length is 3, but it has 3 arrays and each array size is 2
console.log(nums[0].length); //2
console.log(nums[0][0]); //access ind element

//tic-tac-toe nested array
let tac = [["X",null,"O"],[null,"X",null],["O",null,"X"]];
tac[0][1] = 'O'; //replace null with O
console.log(tac)