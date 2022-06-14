let obj = {
    name : "aman",
    age : 23,
    showDetails:function(){
        console.log(this.name+ " " + this.age);
    },
    showDetailsArrow:() =>{
        console.log(this);
        console.log(this.name + " " + this.age);

    }

}
obj.showDetails();
obj.showDetailsArrow();