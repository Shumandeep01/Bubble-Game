let timer=60;
let score=0;
let hitnumber=0;


function bubbles(){
    let box="";
for(let i=0; i<=103; i++){
    let rn=Math.floor(Math.random()*10)
    box+=`<div id="bubble">${rn}</div>`
}
document.querySelector("#pbtm").innerHTML=box;
}


function runtimer(){
    let timeint=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector(".time").textContent=timer
        }else{
            clearInterval(timeint)
            document.querySelector("#pbtm").innerHTML="<h1>Game Over</h1>";
        }
    },1000)
}

function increse(){
    score=score+10;
    document.querySelector(".score").innerHTML=score;
}


function hit(){
hitnumber=Math.floor(Math.random()*10);
document.querySelector(".hit").textContent=hitnumber
}


document.querySelector("#pbtm").addEventListener("click", function(dets){
  let bblno=Number(dets.target.textContent)
   if(hitnumber==bblno){
    increse();
    bubbles()
    hit()
   }
})










bubbles()
runtimer()
hit()
