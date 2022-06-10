//implementing map
let arr = [1,2,3,4,5,6,7];

// function myMap(arr,cb){
//     let newArr = [];
//     for(let i=0;i<arr.length;i++)
//     {
//         let ele = arr[i];
//         newArr.push(cb(ele));

//     }
//     return newArr;
// }
// let b = myMap(arr,function(x){
//     return 5 * x;
// })
// console.log(b);



// //filter implementing
// function myFilter(arr,cb)
// {
//     let newArr = [];
//     for(let i=0;i<arr.length;i++)
//     {
//         let ele = arr[i];
//         if(cb(ele))
//         {
//             newArr.push(ele);
//         }
//     }
//     return newArr;
// }
// let c = myFilter(arr,function(x){
//     return x % 2 == 1;

// })
// console.log(c);




// //-----set timeout

// setTimeout(function(){

//     console.log("hello");
// },5000);

// console.log("world");

//---set interval

// let intervalId = setInterval(function(){
//     console.log("hello repeated");


// },3000);

// setTimeout(function(){
//     clearInterval(intervalId);
// },10000);

setTimeout(function(){
    console.log("will i ever run??");

},1000);

