function add(num1,num2){
    return num1+num2;
}
const total =add(7,8);
console.log(total);

// old style if one perameter absent
function add(num1,num2){
    // if(num2==undefined){
    //     num2=0;
    // }
    // or
    num2=num2||0;
    return num1+num2;
}
const total1 =add(8);
console.log(total1);

// new system es6
function add(num1,num2=8){
    return num1+num2;
}
const total3 =add(7,6);
console.log(total3);