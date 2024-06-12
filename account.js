// account.js
document.getElementById('toggleButton').addEventListener('click', function() {
    var modal = document.getElementById('modal');
    modal.classList.remove('hidden');
    modal.style.display = "flex"; // Show the modal
});

document.querySelector('.close-button').addEventListener('click', function() {
    var modal = document.getElementById('modal');
    modal.classList.add('hidden');
    modal.style.display = "none"; // Hide the modal
});

window.addEventListener('click', function(event) {
    var modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.classList.add('hidden');
        modal.style.display = "none"; // Hide the modal
    }
});

document.getElementById('deselectButton').addEventListener('click', function() {
    var accountType = document.getElementById('accountType');
    var deliveryTime = document.getElementById('deliveryTime');
    var otherDropdown = document.getElementById('otherDropdown');
    var otherOptions = document.getElementById('otherOptions');
    
    accountType.selectedIndex = -1;
    deliveryTime.selectedIndex = -1;
    otherDropdown.classList.add('hidden');
    otherOptions.classList.add('hidden');
    
    document.getElementById('upButton').classList.remove('green');
    document.getElementById('downButton').classList.remove('red');
});

document.getElementById('deliveryTime').addEventListener('change', function() {
    var priceRangeSelect = document.getElementById('priceRange');
    var selectedDeliveryTime = this.value;

    // Clear existing options
    priceRangeSelect.innerHTML = '';

    // Define options based on the selected delivery time
    var priceOptions = {
        '60s': { min: 10, options: ['10%'] },
        '120s': { min: 1000, options: ['35%'] },
        '12h': { min: 10000, options: ['87%'] },
        '36h': { min: 50000, options: ['215%'] },
        '7d': { min: 100000, options: ['315%'] }
    };

    // Add new options to the price range select
    priceOptions[selectedDeliveryTime].options.forEach(function(option) {
        var optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        priceRangeSelect.appendChild(optionElement);
    });

    // Set the minimum value for the price range input
    var priceRangeTextBox = document.getElementById('priceRangeTextBox');
    priceRangeTextBox.value = priceOptions[selectedDeliveryTime].min;
});

document.getElementById('upButton').addEventListener('click', function() {
    this.classList.add('green');
    document.getElementById('downButton').classList.remove('green');
    document.getElementById('downButton').classList.remove('red');
});

document.getElementById('downButton').addEventListener('click', function() {
    this.classList.remove('green');
    this.classList.add('red');
    document.getElementById('upButton').classList.remove('green');
    document.getElementById('upButton').classList.remove('red');
});
