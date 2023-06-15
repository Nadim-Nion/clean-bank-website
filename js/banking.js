// handle deposit button using event handler

document.getElementById('deposit-button').addEventListener('click', function () {
    // get the deposit amount
    const depositInput = document.getElementById('deposit-amount');
    const depositAmount = depositInput.value;
    // console.log(depositAmount);


    // update deposit total
    const depositTotal = document.getElementById('deposit-total');
    // console.log(depositTotal.innerText);
    const previousDeposit = depositTotal.innerText;
    const totalDeposit = parseFloat(previousDeposit) + parseFloat(depositAmount);
    depositTotal.innerText = totalDeposit.toFixed(2);


    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = balanceTotal.innerText;
    const totalBalance = parseFloat(previousBalance) + parseFloat(depositAmount);
    balanceTotal.innerText = totalBalance.toFixed(2);


    // clear the deposit input field
    depositInput.value = '';
});



// handle withdraw button using event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    // get withdraw amount
    // console.log('withdraw button clicked');
    const withdrawInput = document.getElementById('withdraw-amount');
    const withdrawAmount = withdrawInput.value;
    // console.log(withdrawAmount);


    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdraw = withdrawTotal.innerText;
    const totalWithdraw = parseFloat(previousWithdraw) + parseFloat(withdrawAmount);
    withdrawTotal.innerText = totalWithdraw;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = balanceTotal.innerText;
    const totalBalance = parseFloat(previousBalance) - parseFloat(withdrawAmount);
    balanceTotal.innerText = totalBalance.toFixed(2);


    // clear the withdraw input field
    withdrawInput.value = '';

});