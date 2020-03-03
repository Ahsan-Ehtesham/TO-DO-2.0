const list=document.getElementById("list");
const input=document.getElementById("inputtext");

let lst=[]
,id=0;

const check="fa-check-circle";
const uncheck="fa-circle";

function addToDo(toDo,id,done,trash) {
    
    if (trash){ return; }

    const Done=done?check:uncheck;
    
    const item=`
    <li class="item">
    <i class="far fa-circle ${Done} co" job="complete" id="${id}"></i>
    <p class="text">${toDo}</p>
    <i class="far fa-trash-alt de" job="delete" id="${id}"></i>
    </li>
    `;
    const position="beforeend";
    list.insertAdjacentHTML(position,item);    
}

document.addEventListener("keyup",function(event) {
    if(event.keyCode==13){
        const toDo=input.value;
        if(toDo){
            addToDo(toDo);
            lst.push({
                name:toDo,
                id:id,
                done:false,
                trash:false
            });
            id++;
        }
        input.value="";
    }
});

function complete(element) {
    element.classList.toggle(check);
    element.classList.toggle(uncheck);

    lst[element.id].done=lst[element.id].done?false:true;
}

function remove(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    lst[element.id].trash=true;
}

list.addEventListener("click",function(event){
    const element=event.target;
    const elementJob=element.attributes.job.value;

    if(elementJob=="complete"){
        complete(element);
    }
    else if(elementJob=="delete"){
        remove(element);
    }
});

//Animation

const $el=document.querySelector('#header');
const duration = 2;
const from = { opacity: 0, ease: Linear.ease };
const to = { opacity: 1 };
function fadeIn() {
    gsap.fromTo($el, duration, from, to);
 }
 
 $el.addEventListener('click', fadeIn);

 var ex=gsap.timeline({repeat:-1});
 ex.from("#credits", { duration:1.5,opacity:0,ease:"bounce"});