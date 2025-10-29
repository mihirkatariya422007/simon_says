let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"]
let Score=[];
let maxScore = 0; 
let h3=document.createElement("h3");
document.querySelector("body").append(h3);
h3.innerText = `THE MAXIMUM SCORE IS ${maxScore}`;
let started=false;
let level=0;

let h2=document.querySelector("h2")

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
    }
    levelUp()
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250)
}
function usrFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250)
}


function levelUp(){
    userSeq=[]
    level++;
    h2.innerText=`level ${level}`;
    
    let randomIndex=Math.floor(Math.random()*3);
    let randomColor=btns[randomIndex]
    let randomBtn=document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randomBtn);
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`GAME OVER ! YOUR SCORE IS <b>${level}</b> <br/>PRESS ANY KEY TO RESTART THE GEME`;
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"
        },250);
        reset();
    }
}

function reset(){
    Score.push(level);
    // update maxScore in an easy, efficient way
    maxScore = Math.max(maxScore, level);
    h3.innerText = `THE MAXIMUM SCORE IS ${maxScore}`;
    started=false
    gameSeq=[]
    userSeq=[]
    level=0;
}
function btnPressed(){
    let clickedbtn=this;
    usrFlash(clickedbtn);
    
    let userColor=clickedbtn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".button");
for(btn of allBtns){
    btn.addEventListener("click",btnPressed);
}