async function f1() {
         console.log(1);
     }
    
     async function f1() {
       console.log(2);
     }
    
     console.log(3);
     f1();
     console.log(1);
     f2();
    
     async function f2() {
       console.log("Go!");
     }

     //function with async keyword runs synchronously until await keyword is found