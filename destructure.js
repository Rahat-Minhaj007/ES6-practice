
const person={name:"Jack Nickolson", age:26, phone:"0158675567", office:"Dhaka",gfName:"Bou"}

const {age}=person;
const  {phone}=person;
const {salary}=person;

// console.log(age, phone,salary);

const friends =['rahat', "shampa","fahim","alif","susmoy"]

const [firstFriend,secondFriend, ...older]=friends;

console.log(older);