function getInputValue(fieldID) {
    const inputField = document.getElementById(fieldID);
    const inputAmount = parseFloat(inputField.value);
    inputField.value = '';
    return inputAmount;
}

function getInnerTextValue(fieldID) {
    const fieldTag = document.getElementById(fieldID);
    const fieldValue = parseFloat(fieldTag.innerText);
    return fieldValue;

}

function updateTotal(fieldID, amount) {
    // const totalField = document.getElementById(fieldID);
    const previousTotal = getInnerTextValue(fieldID);
    const newTotal = previousTotal + amount;
    document.getElementById(fieldID).innerText = newTotal.toFixed(2);

}

function updateBalance(amount, isAdd) {
    // const balanceField = document.getElementById('balance-total');
    const previousBalance = getInnerTextValue('balance-total')
    if (isAdd) {
        const newBalance = previousBalance + amount;
        document.getElementById('balance-total').innerText = newBalance.toFixed(2);
    }
    else {
        const newBalance = previousBalance - amount;
        document.getElementById('balance-total').innerText = newBalance.toFixed(2);
    }

}

document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-amount');
    if (depositAmount > 0) {
        updateTotal('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
    else {
        alert('Please enter a valid deposit input');
    }

});

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-amount');
    const balance = getInnerTextValue('balance-total');
    if (withdrawAmount > 0 && withdrawAmount <= balance) {
        updateTotal('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    else {
        alert('Please enter a valid withdraw input')
    }
});