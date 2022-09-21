var startEle=document.getElementById("starts");
let display=document.getElementById("display");
let done=document.getElementById("calculate");
let incmt=0;

function generateRandomnum(max){
    return parseInt(Math.random()*max + 1);
}
function getOperatorsym(operators){
    if(operators == "add"){
        return "+";
    }
    else if(operators == "sub"){
        return "-";
    }
    else if(operators == "multiple"){
        return "*";
    }
    else{
        return"/";
    }
}

function generateBox(randomNum1,randomNum2,operators){

    var col=document.createElement("div");
    col.setAttribute("class","col-3 mt-3");
    var card=document.createElement("div");
    card.setAttribute("class","card");
    card.setAttribute("id","list_"+incmt);
    var Number1=document.createElement("h3");
    var operatorsymbol=document.createElement("span");
    var Number2=document.createElement("h3");
    var calculateinput=document.createElement("input");
    calculateinput.setAttribute("type","number");
    calculateinput.setAttribute("class","answer");

    console.log(card);    
    console.log(randomNum1,randomNum2,operators);
    col.append(card);
    card.append(Number1);
    Number1.innerText=randomNum1;
    card.append(operatorsymbol);
    operatorsymbol.innerText=getOperatorsym(operators);
    card.append(Number2);
    Number2.innerText=randomNum2;
    card.append(calculateinput);
    display.append(col);
}

startEle.addEventListener("click",firstOperation);

function firstOperation(){
    var operatorEle=document.getElementById("operators"),
        rangeEle=document.getElementById("range"),
        operators=operatorEle.value,
        range=rangeEle.value,
        randomNum1,randomNum2,total=[];
        display.innerHTML="";
        if(operators !== ""){
            for(var i=0 ;i < 16; i++){
                randomNum1=generateRandomnum(range);
                randomNum2=generateRandomnum(range);
                
                generateBox(randomNum1,randomNum2,operators);
                if(operators == "add"){
                    total.push((randomNum1+randomNum2).toString());
                }
                else if(operators == "sub"){
                    total.push((randomNum1-randomNum2).toString());
                }
                else if(operators == "multiple"){
                    total.push((randomNum1*randomNum2).toString());
                }
                else if(operators == "division"){
                    total.push((randomNum1/randomNum2).toString());
                }
                incmt++;

            }
            
        } 
        done.style.display="block";
        done.addEventListener("click",function(){
            var id="list_";
            var arry=[];
        for(var j=0; j<=15; j++){
            var getid=id+j;
            var parnt=document.getElementById(getid);
            var inputValue=parnt.getElementsByClassName("answer")[0];
            var ans=inputValue.value;
            arry.push(ans.toString());
        }
        
        console.log(arry);
        console.log(total);
        var crtAns=0;
        var wrongAns=0;
        var stage2="list_";
        for(var l=0; l<=15; l++){
            var getstage2id=id+l;
            var cardclr=document.getElementById(getstage2id);
            if(arry[l] == total[l]){
                crtAns++;
                cardclr.style.background="green";
            }
            else{
                wrongAns++;
                cardclr.style.background="red";
            }
        }
        console.log(crtAns);
        console.log(wrongAns);
        done.style.display="none";
        
        })
}

