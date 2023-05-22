

function substract(a,b){
    return parseFloat(a - b);

}

function times(a,b){
    return parseFloat(a*b);
}

function divide(a,b){
    return parseFloat(a/b)
}
const adds = function(a, b){
    return parseFloat(a) + parseFloat(b);
}



let display = document.getElementById('screen');
let clear = document.getElementById('clear');
let equals = document.getElementById('equals');



clear.addEventListener('click', (e)=>{
    display.value = '';
})

let firstNum = "";
let  secondNum = "";
 let   operator = ""
    

function operate(secondNum){
    
    let numbers = document.querySelectorAll('.operand');
    let operators = document.querySelectorAll('.operator')
     numbers.forEach(num=> {
        num.addEventListener('click', (e)=>{
          if(operator === ""){
            firstNum = e.target.value;
    
            console.log(firstNum);
          }else{
            secondNum = e.target.value;
            console.log(secondNum);
          }
        })
     })
    
     operators.forEach(op=>{
        op.addEventListener('click', (e)=>{
            operator = e.target.value;
            console.log(operator);
        })
     })
    if(operator == '+'){
        return  adds(firstNum, secondNum);
    }
    if(operator == '-'){
        return substract(firstNum, secondNum)
    }
    if(operator == '*'){
        return multiply(firstNum, secondNum);
    }
    if(operator == '/'){
        return divide(firstNum, secondNum);
    
}



}

equals.addEventListener('click', (e)=>{

    console.log(operate(display.value));
 })

document.querySelectorAll('input').forEach(button=>{
    button.addEventListener('click', (e)=>{
        if(button.textContent == ''){
            button.textContent += e.target.value;
           
        }
        display.value += button.textContent;
        

    })
})