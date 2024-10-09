// Show or hide options based on user's selection
function toggleOption(section, checkboxId, optionDivId) {
    let checkbox = document.getElementById(checkboxId);
    let optionDiv = document.getElementById(optionDivId);

    if (checkbox.checked) {
        optionDiv.style.display = 'block';
    } else {
        optionDiv.style.display = 'none';
        // Reset values when hidden
        let inputs = optionDiv.querySelectorAll('input, select');
        inputs.forEach(input => input.value = 0);
    }
}

function calculateBill() {
    try {
        // Pizzas
        let margheritaPizzaQty = parseInt(document.getElementById('margheritaPizzaQty').value) || 0;
        let farmhousePizzaQty = parseInt(document.getElementById('farmhousePizzaQty').value) || 0;
        let veggieSupremePizzaQty = parseInt(document.getElementById('veggieSupremePizzaQty').value) || 0;

        // Veg Burgers
        let alooTikkiBurgerQty = parseInt(document.getElementById('alooTikkiBurgerQty').value) || 0;
        let paneerBurgerQty = parseInt(document.getElementById('paneerBurgerQty').value) || 0;

        // Non-Veg Burgers
        let chickenBurgerQty = parseInt(document.getElementById('chickenBurgerQty').value) || 0;
        let baconBurgerQty = parseInt(document.getElementById('baconBurgerQty').value) || 0;

        // Sides
        let friesSize = document.getElementById('friesSize').value;
        let friesPrice = (friesSize === 'small') ? 50 : (friesSize === 'medium') ? 80 : (friesSize === 'large') ? 100 : 0;
        let chickenNuggetsQty = parseInt(document.getElementById('chickenNuggetsQty').value) || 0;

        // Beverages
        let cappuccinoChecked = document.getElementById('cappuccinoCheckbox').checked;
        let cappuccinoSize = cappuccinoChecked ? document.getElementById('cappuccinoSize').value : 0;
        let cappuccinoPrice = (cappuccinoSize === 'small') ? 150 : (cappuccinoSize === 'medium') ? 180 : (cappuccinoSize === 'large') ? 200 : 0;

        // Desserts
        let cheeseCakeChecked = document.getElementById('cheeseCakeCheckbox').checked;
        let cheeseCakeFlavor = cheeseCakeChecked ? document.getElementById('cheeseCakeFlavor').value : 0;
        let cheeseCakePrice = (cheeseCakeFlavor === 'blueberry') ? 250 : (cheeseCakeFlavor === 'cranberry') ? 270 : 0;

        // Order Type and Carry Bag
        let orderType = document.querySelector('input[name="orderType"]:checked').value;
        let carryBag = document.querySelector('input[name="carryBag"]:checked').value;
        let carryBagPrice = (carryBag === 'Yes') ? 10 : 0;

        // Calculate total price
        let totalPrice = (margheritaPizzaQty * 200) + (farmhousePizzaQty * 250) + (veggieSupremePizzaQty * 300) +
                         (alooTikkiBurgerQty * 100) + (paneerBurgerQty * 150) + (chickenBurgerQty * 180) +
                         (baconBurgerQty * 250) + friesPrice + (chickenNuggetsQty * 120) + 
                         cappuccinoPrice + cheeseCakePrice + carryBagPrice;

        // Calculate GST
        let gst = totalPrice * 0.09;
        let totalWithGst = totalPrice + gst;

        // Display the bill summary
        let billSummary = `
            <h2>** BILL SUMMARY **</h2>
            <p>Order Type: ${orderType}</p>
            <p>Total (excluding GST): ₹${totalPrice.toFixed(2)}</p>
            <p>GST (9%): ₹${gst.toFixed(2)}</p>
            <p>Total (including GST): ₹${totalWithGst.toFixed(2)}</p>
            <h3>Thank you for choosing Epic Eats! Visit us again!</h3>
        `;

        document.getElementById('billSummary').innerHTML = billSummary;

    } catch (error) {
        console.error('Error generating the bill:', error);
        alert('There was an error generating your bill. Please try again.');
    }
}
