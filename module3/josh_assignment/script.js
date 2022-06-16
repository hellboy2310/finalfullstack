let addbtn = document.querySelector(".btn");
let addModal = true;
let modalcont = document.querySelector(".model-container");
let taskarea = document.querySelector(".textarea-container");
let ultag = document.querySelector("ul");
let tasklists = document.querySelector(".TaskLists");
let completed  = document.querySelector(".Completed");




//functionality for button addition
addbtn.addEventListener("click",function(){
       if(addModal){
        modalcont.style.display = "flex";
       }
       else{
        modalcont.style.display = "none";
       }
       addModal = !addModal;
})
//when i click on the completed button then this happens
 
    

tasklists.addEventListener("click",function(){
    tasklists.style.color = "blue";

})

//when pressed enter everything gets removed from the modalcontainer
modalcont.addEventListener("keydown",function(e){
    let key = e.key;
    
    if(key =="Enter")
    {
           
        let value = taskarea.value; 
        taskarea.value = "";
     
        modalcont.style.display = "none";
       let liTag = document.createElement("li");
       liTag.innerHTML = `<div class ="check"><i class="fa fa-check"></i></div>
       <div>${value}</div>
       <div class="delete"><i class="fa fa-trash"></i></div>`;
       if(value != "")
       {
        ultag.appendChild(liTag);
       }
        

     addModal = !addModal;
    
     handleremoval(liTag);
    
    
    }

})
//function for the check mark


//functionality to delete a task
function handleremoval(liTag)
{
    let deletedivtag = liTag.querySelector(".delete");
    deletedivtag.addEventListener("click",function(){
        liTag.remove();
    })
}
