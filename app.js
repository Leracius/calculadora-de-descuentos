const inputCash = document.getElementById('input-cash');
const btn5 = document.getElementById('button-5');
const btn10 = document.getElementById('button-10');
const btn15 = document.getElementById('button-15');
const btn25 = document.getElementById('button-25');
const btn50 = document.getElementById('button-50');
const inputRandom = document.getElementById('input-random');
const tipAmount = document.getElementById('h3-amount');
const total = document.getElementById('h3-total');
const checkTotal = document.getElementById('button-check');

btn5.addEventListener('click',()=>{calculate(50),inputRandom.value=''})
btn10.addEventListener('click',()=>{calculate(70),inputRandom.value=''})
btn15.addEventListener('click',()=>{calculate(75),inputRandom.value=''})
btn25.addEventListener('click',()=>{calculate(85),inputRandom.value=''})
btn50.addEventListener('click',()=>{calculate(90),inputRandom.value=''})

const calculate= (percent)=>{
    let cash = inputCash.value
    let amount = cash*(percent/100)
    let result = cash-amount
    tipAmount.innerHTML=`$${amount.toFixed(2)}`
    total.innerHTML=`$${result.toFixed(2)}`
    return result
    
}

const validCustom =(random)=>{
    if(random!='')calculate(random)
}

checkTotal.addEventListener('click',()=>{
    validCustom(inputRandom.value)
})
