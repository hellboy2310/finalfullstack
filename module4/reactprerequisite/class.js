class Person{
    constructor(name,age)
    {
        this.name = name,
        this.age = age
    }
    welcome(){
        console.log("hello" + this.name);
    }

}

class Teacher extends Person{
    constructor(name,age,classstrength)
    {
        super(name,age);
        this.classstrength  = classstrength;
    }
}


let pers = new Person("adam",25);
pers.welcome();
console.log(pers);

let teacher = new Teacher("bhavesh",20,50);
console.log(teacher);