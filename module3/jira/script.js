let addbtn = document.querySelector(".add-btn");
let addModal  = true;
let modalcont = document.querySelector(".modal-cont");
let taskareacont = document.querySelector(".textarea-cont");
let allprioritycolor = document.querySelectorAll(".priority-color");
let maincont = document.querySelector(".main-cont");
var uid = new ShortUniqueId();
let removebtn = document.querySelector(".remove-btn");
let removeflag = false;
let colors = ['lightpink','blue','green','black'];
let modalprioritycolor = colors[colors.length-1];
let toolboxcolor = document.querySelectorAll(".color");

let ticketArr = []; 


for(let i=0;i<toolboxcolor.length;i++)
{
    toolboxcolor[i].addEventListener('click',function(){
        let currentcolor = toolboxcolor[i].classList[1]; //this will give us the current color
      let filteredArr = [];
      for(let i=0;i<ticketArr.length;i++)
      {
          if(ticketArr[i].color == currentcolor)
          {
              filteredArr.push(ticketArr[i]);
          }
          
      }  
    //   console.log(filteredArr);
      let alltickets = document.querySelectorAll(".ticket-cont");
      for(let j=0;j<alltickets.length;j++)
      {
          alltickets[j].remove();
      }
      for(let i=0;i<filteredArr.length;i++)
      {
          let ticket = filteredArr[i];
          let color = ticket.color;
          let task = ticket.task;
          let id  = ticket.id;
          createticket(task,color,id);
      }

    })

    toolboxcolor[i].addEventListener("dblclick",function(){
        let alltickets = document.querySelectorAll(".ticket-cont");
      for(let j=0;j<alltickets.length;j++)
      {
          alltickets[j].remove();
      }
      for(let i=0;i<ticketArr.length;i++)
      {
          let ticket = ticketArr[i];
          let color = ticket.color;
          let task = ticket.task;
          let id  = ticket.id;
          createticket(task,color,id);
      }
    })
}


//when we click on  the add button we will get the modal if add modal is true else it will hide itself
addbtn.addEventListener("click",function(){
    if(addModal)
    {
        //this will show the modal
        modalcont.style.display = "flex";
    }
    else{
        //this will hide the modal
        modalcont.style.display = "none";
    }
    addModal = !addModal;
})

//this will help to remove the ticket 
removebtn.addEventListener("click",function(){
    if(removeflag)
    {
        removebtn.style.color = 'black';
    }
    else{
        removebtn.style.color = 'red';

    }
    removeflag = !removeflag;
})


//this checks the activity status of the colour 
for(let i=0;i<allprioritycolor.length;i++)
{
    let prioritydivonecolor = allprioritycolor[i];
    prioritydivonecolor.addEventListener("click",function(){
        for(let j=0;j<allprioritycolor.length;j++)
        {
            allprioritycolor[j].classList.remove("active");
        }
        prioritydivonecolor.classList.add("active");
        modalprioritycolor = prioritydivonecolor.classList[0];
    })
}

//the task area gets empty when the enter key is pressed
modalcont.addEventListener("keydown",function(e){
let key = e.key;
if(key == "Enter")
{
 createticket(taskareacont.value,modalprioritycolor);
 taskareacont.value = "";
 modalcont.style.display = "none";
 addModal = !addModal;   
}
})


//this function creates a ticket
function createticket(task,ticketcolor,ticketId)
{
let id = uid();

if(ticketId == undefined)
{
    id = uid();
}
else{
    id = ticketId;
}


//     <div class="ticket-cont">
    // <div class="ticket-color lightpink"></div>
    // <div class="ticket-id">#fkof</div>
    // <div class="task-area">some task</div>
// </div>
    let ticketcont = document.createElement("div");
    ticketcont.setAttribute('class','ticket-cont');
    ticketcont.innerHTML = `<div class="ticket-color ${ticketcolor}"></div>
                                <div class="ticket-id">#${id}</div>
                                <div class="task-area">${task}</div>
                                <div class  ="lock-unlock"><i class="fa fa-lock"></i></div>`
                                


    maincont.appendChild(ticketcont);

    //lock unlock handle
    
    let lockunlockbtn = ticketcont.querySelector(".lock-unlock i");
    let tickettaskarea = ticketcont.querySelector(".task-area");
    lockunlockbtn.addEventListener("click",function(){
        if(lockunlockbtn.classList.contains("fa-lock"))
        {
            lockunlockbtn.classList.remove("fa-lock");
            lockunlockbtn.classList.add("fa-unlock");
            tickettaskarea.setAttribute("contenteditable","true");//this will allow us to edit when the unlock button is pressed
        }
        else{
            lockunlockbtn.classList.remove("fa-unlock");
            lockunlockbtn.classList.add("fa-lock");
            tickettaskarea.setAttribute("contenteditable","false");//this false will not allow us to edit when the icon is llocked  
        }
           //update the taskarea using taskcontent
        
        let ticketIdx = getTicketIdx(id);  
      ticketArr[ticketIdx].task = tickettaskarea.textContent;
        updateLocalStorage();
    })



//handle delete
ticketcont.addEventListener("click",function(){
    if(removeflag)
    {
       //this will delete the ui
        ticketcont.remove();

        //delete from ticketArr
        let ticketIdx = getTicketIdx(id);
        ticketArr.splice(ticketIdx,1);
            updateLocalStorage();

    }


})

//handle color here we have used the dsa for cyclic traversal 
let ticketcolorband = ticketcont.querySelector(".ticket-color");
ticketcolorband.addEventListener("click",function(){
    let currentticketcolor = ticketcolorband.classList[1];
    let currentticketcoloridx = -1;
    for(let i=0;i<colors.length;i++)
    {
        if(currentticketcolor == colors[i]){
            currentticketcoloridx = i;
            break;
        }
    }
    let nextcoloridx = (currentticketcoloridx + 1) % colors.length;
    let nextcolor = colors[nextcoloridx];
    ticketcolorband.classList.remove(currentticketcolor);
    ticketcolorband.classList.add(nextcolor); 

//update ticketArr
let ticketIdx = getTicketIdx(id);
ticketArr[ticketIdx].color = nextcolor;
updateLocalStorage();
})

if(ticketId == undefined)
{
    ticketArr.push({"task":task,"color":ticketcolor,"id":'#'+id});
updateLocalStorage();
}



} 
function getTicketIdx(id)
{

    for(let i=0;i<ticketArr.length;i++) 
    {
        if(ticketArr[i].id == id)
        {
                return i;        }
    }
}

function updateLocalStorage(){
    let stringifyArr = JSON.stringify(ticketArr);
    localStorage.setItem("tickets",stringifyArr);
}