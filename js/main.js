var startEle=document.getElementById("starts");
let display=document.getElementById("display");
let done=document.getElementById("calculate");
let show=document.getElementsByClassName("show")[0];
let result=show.getElementsByClassName("result")[0];
let grade=show.getElementsByClassName("grade")[0];

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
    let x;
    for(var i=0; i<16 ; i++){
        x=parseInt(Math.random()*(max/2)+((max/2)+1));
        console.log(x);
        if(x < 10){
            for(var j=2; j<=9 ; j++){
                if(x%j == 0){
                    return [x,j];
                    break;
                }
            }
        }
        else if(x < 20){
            for(var j=4; j<=19 ; j++){
                if(x%j == 0){
                    return [x,j];
                    break;
                }
            }
        }
        else if(x < 30){
            for(var j=5; j<=29 ; j++){
                if(x%j == 0){
                    return [x,j];
                    break;
                }
            }
        }
        else if(x < 40){
            for(var j=6; j<=39 ; j++){
                if(x%j == 0){
                    return [x,j];
                    break;
                }
            }
        }
        else if(x < 50){
            for(var j=7; j<=49 ; j++){
                if(x%j == 0){
                    return [x,j];
                    break;
                }
            }
        }
        else{
            for(var j=8; j<=99 ; j++){
                if(x%j == 0){
                    return [x,j];
                    break;
                }
            }
        }
        break;
    }
}
function generatedivisibleBox(divisionRandumNum,operators){
    var col=document.createElement("div");
    col.setAttribute("class","col-4 col-lg-2 col-md-3 mt-3");
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
    console.log(divisionRandumNum,operators);
    col.append(card);
    card.append(Number1);
    Number1.innerText=divisionRandumNum[0];
    card.append(operatorsymbol);
    operatorsymbol.innerText=getOperatorsym(operators);
    card.append(Number2);
    Number2.innerText=divisionRandumNum[1];
    card.append(calculateinput);
    display.append(col);
    col.style.animation="transitionIn 3s";

}

function generateBox(randomNum1,randomNum2,operators){

    var col=document.createElement("div");
    col.setAttribute("class","col-4 col-lg-2 col-md-3 mt-3");
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
    col.style.animation="transitionIn 3s";
}

startEle.addEventListener("click",firstOperation);

function firstOperation(){
    show.style.display="none";
    display.style.display="flex";
    var operatorEle=document.getElementById("operators"),
        rangeEle=document.getElementById("range"),
        operators=operatorEle.value,
        range=rangeEle.value,
        randomNum1,randomNum2,divisionRandumNum;
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
                divisionRandumNum=generatedivisibleRandomnum1(range);
                console.log(divisionRandumNum);
                generatedivisibleBox(divisionRandumNum,operators);
            }
        }
        done.style.display="block";
        done.style.animation="transitionOut 3s";

}
done.addEventListener("click",function(){
    
    let mark=0;
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
        else{
            total=parseInt(number1Ele) / parseInt(number2Ele);
        }
        let inpAns=getId.getElementsByClassName("answer")[0].value;
        
        if(total == inpAns){
            getId.style.background="#60ce60";
            mark++;
        }
        else{
            getId.style.background="#e81818";
        }
        
    }
    show.style.display="block";
    result.innerText=mark;
    done.style.display="none";
    show.style.animation="transitionIn 3s"
    if(mark < 8){
        grade.innerText="Fail";
        grade.style.color="red";
    }
    else{
        grade.innerText="Pass";
        grade.style.color="green";
    }
    display.style.display="none";
})
