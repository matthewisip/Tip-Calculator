let selectedTip = 0.20; // Default tip percentage

// Tip selection logic
document.querySelectorAll('input[name="tipOption"]').forEach(radio => {
    radio.addEventListener('change', function () {
        if (this.value === 'custom') {
            selectedTip = parseFloat(document.getElementById('customTip').value) / 100 || 0;
        } else {
            selectedTip = parseFloat(this.value);
        }
    });
});

// Update tip when custom input changes
document.getElementById('customTip').addEventListener('input', function () {
    const customRadio = document.querySelector('input[value="custom"]');
    customRadio.checked = true;
    selectedTip = parseFloat(this.value) / 100 || 0;
});

// Calculate Tip
document.getElementById('calculateButton').addEventListener('click', function () {
    const billAmount = parseFloat(document.getElementById('billAmount').value);

    if (isNaN(billAmount) || billAmount <= 0) {
        alert('Please enter a valid bill amount.');
        return;
    }

    if (isNaN(selectedTip) || selectedTip < 0) {
        alert('Please enter a valid tip percentage.');
        return;
    }

    const tipAmount = billAmount * selectedTip;
    const totalAmount = billAmount + tipAmount;

    document.getElementById('tipAmount').textContent = tipAmount.toFixed(2);
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
});
