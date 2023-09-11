var count1=0;
var count2=0;

function dice1(){
    document.getElementById("btn-1").style.boxShadow="";
    document.getElementById(count1).innerHTML="";
    let value = Math.floor((Math.random()*4)+1);
    document.getElementById("dice1_score").innerHTML=value;
    let temp=count1;
    count1=count1+value;
    if(count1>30){
        count1=temp;
    }
    if(count1==count2){
        count2=1;
    }
    if(count1==30){
        document.getElementById(count1).innerHTML="<h1>🐬</h1>";
        document.getElementById("score").innerHTML="Dice1 won";
        return;
    }
    document.getElementById("btn-2").style.boxShadow="0 0 5px blue,0 0 25px blue, 0 0 50px blue,0 0 100px blue,0 0 200px blue";
    document.getElementById(count1).innerHTML="<h1>🐬</h1>";
    console.log(count1+" "+"a");
    
}
function dice2(){
    document.getElementById(count2).innerHTML="";
    document.getElementById("btn-1").style.boxShadow="0 0 5px red,0 0 25px red, 0 0 50px red,0 0 100px red,0 0 200px red";
    let value = Math.floor((Math.random()*4)+1);
    document.getElementById("dice2_score").innerHTML=value;
    let temp=count2;
    count2=count2+value;
    if(count2>30){
        count2=temp;
    }
    if(count2==count1){
        count1=1;
    }
    if(count2==30){
        document.getElementById(count2).innerHTML="<h1>🦞</h1>";
        document.getElementById("score").innerHTML="Dice2 won";
        return;
    }
    document.getElementById("btn-2").style.boxShadow="";
    document.getElementById(count2).innerHTML="<h1>🦞</h1>";
    
    console.log(count2);
    
}

