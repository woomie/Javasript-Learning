// //console.log(5);
// //comments we can use this 
// /**
//  * we can also use this
//  * for multi line
//  */
// // let wunmi ='hello'
// // let x =wunmi +16;
// // console.log(x);

// // isAbleToVote = false;

// // isAbleToVote === false ?  console.log(`This person can vote`) : console.log(`this person cannot vote`)

// // function ticketPrice(age){
// //     if(typeof age !== "number" || age < 0){
// //         return "please enter a valid age"
// //     }
// //     if (age < 12){
// //         return"your ticket is $5";
// //     }
// //     else if(age < 18){
// //         return "your ticket is $10";
// //     }
// //     else if(age < 60){
// //         return"your ticket is $20";
// //     }
// //     else{
// //         return "your ticket is $15"; 
// //     }
// // }
// // console.log(ticketPrice("a"));

// // function discount(price){
// //     if(typeof price !== "number" || age < 0){
// //         return "please enter a valid price"
// //     }
// //     if (price >= 100){
// //         let newPrice =price - (price*0.2);
// //         return `you get a 20% discount, your new price is: ${newPrice}`
// //     }
// //     else if (price >= 50){
// //         let newPrice =price - (price*0.1);
// //         return `you get a 10% discount, your new price is: ${newPrice}`
// //     }
// //     else{
// //         return `your price does not qualify for a discount`
// //     }
// // }

// // console.log(discount(200));


// // function one(num){
// //     num +=1;
// //     return num
// // }
// // function anotherOne(number){
// //     newnum =one(number)+1
// //     return newnum;
// // }

// // console.log(anotherOne(5));

// // const sumOfEven = (list)=>{
// //     let sum =0;
// //     for(let i=0; i < list.length; i++){
// //         if(list[i]%2 === 0){ 
// //             sum = sum + list[i];
// //         }
// //         else{
// //             continue;
// //         }
      
// //     }
// //     return sum;
// // };

// // console.log(sumOfEven([2,2,4,5,6,8,10]));

// function add(){
//     let counter = 0;
//     function plus(){
//         counter += 1;
//         return counter;
//     }
//     return plus;
// }
// // const increase = add();
// // console.log(increase());
// // console.log(increase());

// const increment = add(); // 'increment' is now the 'plus' function
// console.log(increment()); // 1
// console.log(increment()); // 2
// console.log(increment()); // 3

// list =[1,2,3,4,5,6,7];
// const func1 = (a)=>func2(a)

// function func2(b){
//     let c=0;
//     for (i in b){
//         let d=b[i];
//         if(d%2 ==0){
//             c+=d;
//         }
//         else{
//             c-=d;
//         }
//     }
//     return c
// }
// console.log(func1(list))


// food =['a','b'];
// food[2]=('c');
// for (let i=0; i<food.length; i++){
//     console.log(food[i]);
// }

//check if a string is positive, negative or zero
// let checkNumber = n=>{
//     if (n < 0){
//         return `${n} is a negative number`;
//     }
//     else if(n > 0){
//         return `${n} is a positive number`;
//     }
//     else if (n === 0){
//         return `${n} is equal to zero`;
//     }
//     else{
//         return `Please enter a valid number`;
//     }
// }

// console.log(checkNumber("A"));


// take a string and return the reverse of the string.
// const stringInReverse= word=>{
//     if(typeof word !== "string"){
//         return `${word} is not a word`;
//     }
//     //array has a reverse method. so we wld convert word to an array
//     let box=[]
//     for (let i=0; i<word.length; i++){
//         box.push(word[i]);
//     }
//     let reversed = box.reverse();
//     return reversed.join('');
// }

// console.log(stringInReverse(123));

//Write a piece of code that finds the largest number in an array of integers.
// const largest = list =>{
//     let biggest = 0;
//     for(let i =0; i< list.length; i++){
//         if(list[i] > biggest){
//             biggest=list[i];
//         }
//     }
//     return biggest;
// }

// console.log(largest([3,6,5,767,8549]))

//Write a for loop that logs numbers from 1 to 100 but skips multiples of 3.
// const skipMulitplesOfThree =()=>{
//     numbers=[];
//     for (let i=1; i<=100; i++){
//         if(i%3 !== 0){
//            numbers.push(i);
//         }
//         else{
//             continue;
//         }
//     }
//     return numbers;
// }
// console.log(skipMulitplesOfThree());

//function that returns an object and throws error
// var expect = (val)=> {
//     return{
//         toBe: val1 =>{
//             if(val === val1){ return { value: true };;}
//             throw new Error("Not Equal");
//         },
//         notToBe: val2 =>{
//             if(val !== val2){ return { value: true };}
//             throw new Error("Equal");
           
//         }
//     }
// };

//console.log(expect(5).toBe(5));

//BMI Calculator
function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
    let emptyArr = [0,1];
    
    let prev=0;
    let current=1;
    for (let i=1; i<=n-2; i++){
        let next = prev+current
        emptyArr.push(next)
        prev= current;
        current=next;
        
            
    }        
    return emptyArr;       
    
}
        
    
console.log(fibonacciGenerator(15));   