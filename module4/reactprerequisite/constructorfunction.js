function car(Name,model,color)
{
    this.name = Name
    this.model = model
    this.color = color

this.test = function(){
    console.log(`I am driving ${this.model}`);

}

}
let car1 = new car('BMW','X6','white');
console.log(car1);
car1.test();

