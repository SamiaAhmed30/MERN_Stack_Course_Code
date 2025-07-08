    //NUMBER
const score = 400; //no need to define datatype ,number

//if you want to specifically define what datatype you want then,

const balance = new Number(1000); //in output it will also print datatype
console.log(balance)

console.log(balance.toString()); //it will convert num to string
console.log(balance.toFixed(3)) //it will reduce the answer to this decimal point

const newnum = 344.5942;
console.log(newnum.toPrecision(4)); //it will retrun string, it will give you a precise value upto your desire
//priority is given to value before decimal

const hun = 1000000;
console.log(hun.toLocaleString("en-IN")); //it will put , acc to US stnd by default or any other stnd b/w zeros

//many methods of Number for future use
console.log(Number.MAX_VALUE);
console.log(Number.EPSILON); // and many other

              //MATH LIBRARY

console.log("Maths");
console.log(Math.abs(-123.45)); // it convert the negative value sign (-) to positive (+)
console.log(Math.round(4.6)); //it round off the value and gives less than or equal to value
console.log(Math.ceil(4.3)); // it chooses the top value to round off or round up like 4.3 to 5
console.log(Math.floor(4.9)); // it chooses the lower value to round off like 4.9 to 4
console.log(Math.min(4,7,2,9,10)) // find min value in an array
console.log(Math.max(4,7,2,9,10)) // find max value in an array

console.log(Math.random()) //it always generates a random number b/w 0-1 range
console.log((Math.random()*10) + 1)// it will generate the value greater the 1 (1 is added to avoid the case of 0.00 or 0.0)
 