
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
let operand = document.querySelectorAll('.operand');
let operators = document.querySelectorAll('.operator');
let firstNum = "";
let secondNum = "";
let operator = "";
let result = "";

operand.forEach(num =>{
    num.addEventListener('click', (e)=>{
       if(operator == ""){
           firstNum += e.target.value;
           display.value = firstNum;
           console.log(firstNum);
       }else{
           secondNum += e.target.value
           display.value = secondNum;
           console.log(secondNum);
       }
   
    })
   })

   operators.forEach(op=>{
    op.addEventListener('click', (e)=>{
        if(e.target.value !== "="){
            operator = e.target.value;
            display.value = `${firstNum}${operator}`
            console.log(firstNum);
            console.log(operator);
        }else{
            console.log(secondNum);
            switch (operator) {
                case '+':
                    display.value = parseFloat(firstNum) + parseFloat(secondNum);
                    console.log(parseFloat(firstNum) + parseFloat(secondNum));
                    break;
                    case '-':
                        display.value = parseFloat(firstNum - secondNum);
                        console.log(parseFloat(firstNum - secondNum));
                        break;
                        case 'x':
                            display.value = parseFloat(firstNum * secondNum);
                            console.log(parseFloat(firstNum * secondNum));
                            break;
                            case '/':
                                display.value = parseFloat(firstNum / secondNum);
                                console.log(parseFloat(firstNum / secondNum));
                                break;
                default:
                    break;
            }
        }
       
    })
})


// document.querySelectorAll('input').forEach(button=>{
//     button.addEventListener('click', (e)=>{
//         if(button.textContent == ''){
//             button.textContent += e.target.value;
           
//         }
//         display.value += button.textContent;
        

//     })
// })

// equals.addEventListener('click', (e)=>{
//    operate()
// })

clear.addEventListener('click', (e)=>{
   // display.value = '';
   location.reload()
})
