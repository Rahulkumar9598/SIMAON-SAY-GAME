let gameSeq= [];
let userSeq=[];

let started =false;
let level=0;

let btns =["yellow","red","purple","green"];

let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started =true;   
        levelup();
    }
  
});

       // step 2

function levelup(){
    userSeq=[];
    level++;
    h2.innerText = `level ${level}`;
    
    let randomIdx = Math.floor(Math.random()*3);
    let randomColor =btns[randomIdx];;
    let randBtn =document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}
           
function checkAns(idx){
    if (userSeq[idx] ===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML= `Game Over! Your score was<b>${level} </b> <br> Press any key to start.`;
         document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor ="white";
        },150);
        reset();
    }
}
function gameFlash(btn){
    btn.classList.add("flas");
    setTimeout(function(){
        btn.classList.remove("flas")
    },250);
}    
           //step 4
    function userFlash(btn){
        btn.classList.add("user-flas");
        setTimeout(function(){
            btn.classList.remove("user-flas")
        },250);      
    }
 function btnPress(){
   let btn = this;
   userFlash(btn);
   
   userColor = btn.getAttribute("id");
   userSeq.push(userColor);
   checkAns(userSeq.length-1);
}
let allBtns =document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset (){
    started = false;
    gameSeq=[];
    userSeq=[];
    level = 0;
}