function add(a,b){
return a + b;
}
//console.log(add(89, 999));

function substract(a,b){
    return a - b;
}

//console.log(substract(-1, 9));
function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}


let display = document.getElementById('screen');

let firstNumber = "";
let operator = ''
let secondNumber = "";
 

function operate(operator, firstNumber, secondNumber){
    if(operator == '+'){
        return  add(firstNumber, secondNumber);
    }
    if(operator == '-'){
        return substract(firstNumber, secondNumber)
    }
    if(operator == '*'){
        return multiply(firstNumber, secondNumber);
    }
    if(operator == '/'){
        return divide(firstNumber, secondNumber);
    }

  
}




document.querySelectorAll('input').forEach(button =>{
    button.addEventListener('click', function(e){
    button.textContent = "";
    button.textContent+= e.target.value;
    display.value = button.textContent;

    })

   
})

//console.log(operate('*', 3, 3));