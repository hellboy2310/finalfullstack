let addbtn = document.querySelector(".add-btn");
let modalCont  = document.querySelector(".modal-cont");
let taskAreaCont = document.querySelector(".textarea-cont");
let mainCont = document.querySelector(".main-cont");
let allprioritycolors = document.querySelectorAll(".priority-color");
let removebtn = document.querySelector(".remove-btn");
let removeflag = false;
let toolboxcolors = document.querySelectorAll(".color");
let addModal = true;
let colors = ['lightpink', 'blue', 'green', 'black'];
let modalprioritycolor = colors[colors.length - 1];
var uid = new ShortUniqueId();


let ticketArr = [];

if(localStorage.getItem("tickets")){
    let str = localStorage.getItem("tickets");
    let arr = JSON.parse(str);
    ticketArr = arr;
    for(let i=0;i<arr.length;i++)
    {
        let ticketObj = arr[i];
        createTicket(ticketObj.color,ticketObj.task,ticketObj.id);
    }
}

for(let i=0;i<toolboxcolors.length;i++)
{
    toolboxcolors[i].addEventListener("click",function(){
        let currentcolor = toolboxcolors[i].classList[1];
        let filteredArr = [];
        for(let i=0;i<ticketArr.length;i++)
        {
            if(ticketArr[i].color == currentcolor)
        {
            filteredArr.push(ticketArr[i]);
        }
        }
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
            let id = ticket.id;
            createTicket(color,task,id);
        }
        
    })
    toolboxcolors[i].addEventListener("dblclick",function(){
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
            let id = ticket.id;
            createTicket(color, task, id);
        }
    })
}



addbtn.addEventListener("click",function(){
    if(addModal)
    {
        modalCont.style.display = "flex";
    }
    else{
        modalCont.style.display = "none";
    }

    addModal = !addModal;

})

for(let i = 0;i < allprioritycolors.length; i++)
{
    let priorityDivOneColor = allprioritycolors[i];
    priorityDivOneColor.addEventListener("click",function(e){
        for(let j=0;j<allprioritycolors.length;j++)
        {
            allprioritycolors[j].classList.remove("active");
        }
        priorityDivOneColor.classList.add("active");
        modalprioritycolor = priorityDivOneColor.classList[0];
    })
}


modalCont.addEventListener("keydown",function(e){
    let key = e.key;
    if(key == "Enter")
    {
        createTicket(modalprioritycolor,taskAreaCont.value);
        taskAreaCont.value = "";
        modalCont.style.display = "none";
        addModal = !addModal;
    }
})

removebtn.addEventListener("click",function(){
    if(removeflag)
    {
        removebtn.style.color = 'black';
    }
    else{
        removebtn.style.color = "red";
    }
    removeflag = !removeflag;

})




function createTicket(ticketColor,task,ticketId)

{
    let id ;
    if(ticketId == undefined)
    {
        id = uid();
    }
    else{
        id = ticketId;
    }

    let ticketCont = document.createElement("div");
    ticketCont.setAttribute('class', 'ticket-cont');
    ticketCont.innerHTML = `<div class="ticket-color ${ticketColor}" ></div>
    <div class="ticket-id">#${id}</div>
    <div class="task-area"> ${task}</div>
    <div class ="lock-unlock"><i class="fa fa-lock"></i></div>`
mainCont.appendChild(ticketCont);

let lockunlockbtn = ticketCont.querySelector(".lock-unlock i");
let ticketTaskArea = ticketCont.querySelector(".task-area");
lockunlockbtn.addEventListener("click",function(){
    if(lockunlockbtn.classList.contains("fa-lock")){
        lockunlockbtn.classList.remove("fa-lock");
        lockunlockbtn.classList.add("fa-unlock");
        ticketTaskArea.setAttribute("contenteditable","true");
    }
    else{
        lockunlockbtn.classList.remove("fa-unlock");
        lockunlockbtn.classList.add("fa-lock");
        ticketTaskArea.setAttribute("contenteditable","false");
    }
    //update a ticketarr
    let ticketIdx = getTicketIdx(id);
    ticketArr[ticketIdx].task = ticketTaskArea.textContent;
    updatelocalstorage();
})

ticketCont.addEventListener("click",function(){
    if(removeflag)
    {
        ticketCont.remove();
    }
    // //delete a ticket from ticket arr
    let ticketIdx = getTicketIdx(id);
    ticketArr.splice(ticketIdx,1);//remove a ticket
    updatelocalstorage();
})

let ticketColorBand = ticketCont.querySelector(".ticket-color");
ticketColorBand.addEventListener("click",function(){
    let currentTicketColor = ticketColorBand.classList[1];
    let currentTicketColorIdx = -1;
    for(let i=0;i<colors.length;i++)
    {
        if(currentTicketColor == colors[i])
        {
            currentTicketColorIdx = i;
            break;
        }
    }
    let nextColorIdx = (currentTicketColorIdx+1)%colors.length;
    let nextColor = colors[nextColorIdx];
    ticketColorBand.classList.remove(currentTicketColor);
    ticketColorBand.classList.add(nextColor);

    //update ticketArr as well
    let ticketIdx = getTicketIdx(id);
        ticketArr[ticketIdx].color = nextColor;
        updatelocalstorage();
        
    })

if(ticketId == undefined)
{
    ticketArr.push({"color" : ticketColor, "task" : task, "id" :  id});
 console.log(ticketArr);   
updatelocalstorage();
}

}


function getTicketIdx(id){
    for(let i=0;i<ticketArr.length;i++){
        if(ticketArr[i].id == id)
        {
            return i;
        }
    }
}

function updatelocalstorage(){
    let stringifyArr = JSON.stringify(ticketArr);
    localStorage.setItem("tickets",stringifyArr);
}