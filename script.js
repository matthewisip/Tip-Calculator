document.getElementById('tipPercentage').addEventListener('change', function () {
    const customTipContainer = document.getElementById('customTipContainer');
    customTipContainer.style.display = this.value === 'custom' ? 'block' : 'none';
});

document.getElementById('calculateButton').addEventListener('click', function () {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    let tipPercentage = document.getElementById('tipPercentage').value;

    if (tipPercentage === 'custom') {
        tipPercentage = parseFloat(document.getElementById('customTip').value) / 100;
    } else {
        tipPercentage = parseFloat(tipPercentage);
    }

    if (isNaN(billAmount) || billAmount <= 0) {
        alert('Please enter a valid bill amount.');
        return;
    }

    if (isNaN(tipPercentage) || tipPercentage < 0) {
        alert('Please enter a valid tip percentage.');
        return;
    }

    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;

    document.getElementById('tipAmount').textContent = tipAmount.toFixed(2);
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
});