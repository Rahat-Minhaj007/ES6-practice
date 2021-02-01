class Father{
    constructor(getFather){
        this.father="jaynal abedin";
    }
}

class Child extends Father{
    constructor(cName){
        super();
        this.childName=cName;
    }
    getFullName(){
        return this.childName+" "+this.father;
    }
}
const baby1=new Child("rahat");
const baby2=new Child("promi");
console.log(baby1.getFullName());
console.log(baby1,baby2);