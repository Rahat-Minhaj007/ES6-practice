// function doubleNum(num){
//     return num*2;
// }

// const doubleNum = function(num){
//     return num*2;
// }

const doubleNum = num =>num*2;
const add =(num1,num2)=>num1+num2;
const doMath=(num1,num2)=>{
        const sum = num1+num2;
        const diff =num1 - num2;
        const mult = sum*diff;
        return mult;
}
const result=doubleNum(5);
const result2=add(5,7);
const result3=doMath(8,7);

console.log(result3);