document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input').value;
    const depositInputAmount = parseFloat(depositInput);
    const depositTotal = document.getElementById('deposit-total').innerText;
    const depositTotalAmount = parseFloat(depositTotal);

    const totalDepositAmount = depositInputAmount + depositTotalAmount;
    document.getElementById('deposit-total').innerText = totalDepositAmount;

    //update balance
    const balanceTotal = document.getElementById('balance-total').innerText;
    const balanceTotalAmount = parseFloat(balanceTotal);
    const newBalanceTotal = balanceTotalAmount + depositInputAmount
    document.getElementById('balance-total').innerText = newBalanceTotal



})