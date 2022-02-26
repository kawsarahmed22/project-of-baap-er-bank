/* document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInputField = document.getElementById('deposit-input')
    const depositInput = depositInputField.value
    const depositInputAmount = parseFloat(depositInput);
    const depositTotal = document.getElementById('deposit-total').innerText;
    const depositTotalAmount = parseFloat(depositTotal);

    const totalDepositAmount = depositInputAmount + depositTotalAmount;
    document.getElementById('deposit-total').innerText = totalDepositAmount;
    depositInputField.value =''

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText
    const balanceTotalAmount = parseFloat(balanceTotalText);
    const newBalanceTotal = balanceTotalAmount + depositInputAmount
    document.getElementById('balance-total').innerText = newBalanceTotal
})

   // Withdraw
   document.getElementById('withdraw-button').addEventListener('click', function(){

    const withdrawInputField = document.getElementById('withdraw-input')
    const withdrawInput = withdrawInputField.value;

    const withdrawInputAmount = parseFloat(withdrawInput)

    if (isNaN(withdrawInputAmount)){
        alert('Please Type valid number')
    }

    const withdrawTotal = document.getElementById('withdraw-total').innerText
    const withdrawTotalAmount = parseFloat(withdrawTotal)

    const newWithdrawTotalAmount = withdrawTotalAmount + withdrawInputAmount
    document.getElementById('withdraw-total').innerText = newWithdrawTotalAmount

    withdrawInputField.value = ''

    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const balanceTotalAmount = parseFloat(balanceTotalText)
    
    const newBalanceTotal = balanceTotalAmount - withdrawInputAmount
    balanceTotal.innerText = newBalanceTotal
}) */




function getInputValue (inputId){
    const InputField = document.getElementById(inputId);
    const inputText = InputField.value;
    const inputAmount = parseFloat(inputText);
    InputField.value = '';
    return inputAmount;
}
function updateTotalField (totalFieldId,amount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const totalAmount = parseFloat(totalText);
    totalElement.innerText = amount + totalAmount;
}
function updateBalance(depositAmount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalAmount + depositAmount;
    if(isAdd == true){
        balanceTotal.innerText = balanceTotalAmount + depositAmount;
    }
    else {
        balanceTotal.innerText = balanceTotalAmount - depositAmount;
    }
}

// Deposit
document.getElementById('deposit-button').addEventListener('click',function(){
    // const depositInputField = document.getElementById('deposit-input')
    // const depositInput = depositInputField.value
    // const depositAmount = parseFloat(depositInput)
 
    const depositAmount = getInputValue ('deposit-input');
    // const depositField = document.getElementById('deposit-total');
    // const depositTotal = depositField.innerText;
    // const depositTotalAmount = parseFloat(depositTotal);
    // depositField.innerText = depositAmount + depositTotalAmount;
    
    // update balance
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const balanceTotalAmount = parseFloat(balanceTotalText);
    // balanceTotal.innerText = balanceTotalAmount + depositAmount;
    if (depositAmount > 0){
        updateTotalField('deposit-total',depositAmount);
        updateBalance(depositAmount, true);
    }
    else {
        alert('Enter a valid amount')
    }
    
    
})
// Withdraw
document.getElementById('withdraw-button').addEventListener('click', function(){

    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawInputText = withdrawInput.value;
    // const withdrawInputAmount = parseFloat(withdrawInputText);
    const withdrawInputAmount = getInputValue ('withdraw-input');
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const withdrawTotalText = withdrawTotal.innerText;
    // const withdrawTotalAmount = parseFloat(withdrawTotalText);
    // withdrawTotal.innerText = withdrawInputAmount + withdrawTotalAmount;
    if(withdrawInputAmount > 0){
        updateTotalField('withdraw-total',withdrawInputAmount);
        updateBalance(withdrawInputAmount, false);
    }else
    {
        alert('Enter a valid amount')
    }
    
    //update balance  after withdraw
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const balanceTotalAmount = parseFloat(balanceTotalText);
    // balanceTotal.innerText = balanceTotalAmount - withdrawInputAmount;
    
})