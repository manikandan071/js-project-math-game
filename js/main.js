var startEle=document.getElementById("starts");
let display=document.getElementById("display");
let done=document.getElementById("calculate");

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

function generatedivisibleRandomnum1(max){
    for(var i=0; i<550 ; i++){
        let first=parseInt(Math.random()*(max/2) + 1);

        if(first%2 == 0){
            return first;
        }
        break;
    }
}
function generatedivisibleRandomnum2(max){
    for(var i=0; i<50 ; i++){
        let first=parseInt(Math.random()*max + 1);

        if(first%2 == 0 && (max/2)<first){
            return first;
        }
        break;
    }
}

function generateBox(randomNum1,randomNum2,operators){

    var col=document.createElement("div");
    col.setAttribute("class","col-3 mt-3");
    var card=document.createElement("div");
    card.setAttribute("class","card section");
    var Number1=document.createElement("h3");
    Number1.setAttribute("class","number1");
    var operatorsymbol=document.createElement("span");
    operatorsymbol.setAttribute("class","operator")
    var Number2=document.createElement("h3");
    Number2.setAttribute("class","number2");
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
        if(operators !== "division"){
            for(var i=0 ;i < 16; i++){
                randomNum1=generateRandomnum(range);
                randomNum2=generateRandomnum(range);
                
                generateBox(randomNum1,randomNum2,operators);
            }
            
        } 
        else{
            for(var i=0 ;i < 16; i++){
                randomNum1=generatedivisibleRandomnum1(range);
                randomNum2=generatedivisibleRandomnum2(range);
                console.log(randomNum1,randomNum2);
                // generatedivisibleBox(randomNum1,randomNum2,operators);
            }
        }
        done.style.display="block";
}
done.addEventListener("click",function(){
    let number1Ele,number2Ele,operator,total;
    for(var i=0; i<16; i++){
        let getId=document.getElementsByClassName("section")[i];
        number1Ele=getId.getElementsByClassName("number1")[0].innerText;
        number2Ele=getId.getElementsByClassName("number2")[0].innerText;
        operator=getId.getElementsByClassName("operator")[0].innerText;
        if(operator == "+"){
            total=parseInt(number1Ele) + parseInt(number2Ele);
        }
        else if(operator == "-"){
            total=parseInt(number1Ele) - parseInt(number2Ele);
        }
        else if(operator == "*"){
            total=parseInt(number1Ele) * parseInt(number2Ele);
        }
        let inpAns=getId.getElementsByClassName("answer")[0].value;
        
        if(total == inpAns){
            getId.style.background="green";
        }
        else{
            getId.style.background="red";
        }
    }
})
