class student{
    constructor(sId,sName){
        this.id=sId;
        this.name= sName;
        this.school="shamsul haque khan school";
    }
}
const student1 = new student(12,"shampa");
const student2 = new student(13,"pona");
console.log(student1,student2);
console.log(student1.id,student2.id);
