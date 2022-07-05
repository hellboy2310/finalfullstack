// let a = {
// }
//     a[ Symbol()] = 2;
//     a[ Symbol()] = 3;
//     console.log(a[Symbol()]);




let a = Symbol();
console.log(a);



let b = Symbol("ABC");
console.log(b);

console.log(b.description);

let c  = Symbol();
console.log(c);

console.log(a == c);
