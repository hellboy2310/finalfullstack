
//this keyword's value will depend upon how it is called?

console.log(this);// globally call kia hai


function abc(){
    console.log("this inside a function",this);
}
abc();//function invocation



let obj ={
name: "aman",
age:23,
def: function(){
    console.log(this);
// function klm(){
//     console.log(this);

// }
// klm(); //function invocation

}
}

obj.def();

// let ghi = obj.def;
// ghi();//function invocation