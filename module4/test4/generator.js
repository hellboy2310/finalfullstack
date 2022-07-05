
// * denotes it as a generator function
function* abc(){
console.log("hello");
console.log("hi");
yield 1


console.log("hello again");
console.log("hi again");
yield 2


}

let a  = abc();
console.log(a);
console.log(a.next());
console.log(a.next());
console.log(a.next());
