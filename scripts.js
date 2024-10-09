function calculateBill() {
    // Pizza quantities and prices
    let chickenDominatorPizzaQty = parseInt(document.getElementById('chickenDominatorPizzaQty').value) || 0;
    let cheesyChickenPizzaQty = parseInt(document.getElementById('cheesyChickenPizzaQty').value) || 0;
    let loadedMexicanPizzaQty = parseInt(document.getElementById('loadedMexicanPizzaQty').value) || 0;
    let pestoPizzaQty = parseInt(document.getElementById('pestoPizzaQty').value) || 0;
    let italianStylePizzaQty = parseInt(document.getElementById('italianStylePizzaQty').value) || 0;

    // Burger quantities and prices
    let alooTikkiBurgerQty = parseInt(document.getElementById('alooTikkiBurgerQty').value) || 0;
    let cheesyItalianVegBurgerQty = parseInt(document.getElementById('cheesyItalianVegBurgerQty').value) || 0;
    let chickenBurgerQty = parseInt(document.getElementById('chickenBurgerQty').value) || 0;

    // Chicken quantities and prices
    let chickenRollQty = parseInt(document.getElementById('chickenRollQty').value) || 0;
    let chickenRiceQty = parseInt(document.getElementById('chickenRiceQty').value) || 0;
    let chickenSnacksQty = parseInt(document.getElementById('chickenSnacksQty').value) || 0;

    // Beverage quantities and prices
    let waterQty = parseInt(document.getElementById('waterQty').value) || 0;
    let cappuccinoQty = parseInt(document.getElementById('cappuccinoQty').value) || 0;
    let cocaColaQty = parseInt(document.getElementById('cocaColaQty').value) || 0;

    // Prices
    const chickenDominatorPizzaPrice = 600;
    const cheesyChickenPizzaPrice = 500;
    const loadedMexicanPizzaPrice = 650;
    const pestoPizzaPrice = 600;
    const italianStylePizzaPrice = 700;
    const alooTikkiBurgerPrice = 150;
    const cheesyItalianVegBurgerPrice = 200;
    const chickenBurgerPrice = 220;
    const chickenRollPrice = 120;
    const chickenRicePrice = 250;
    const chickenSnacksPrice = 180;
    const waterPrice = 20;
    const cappuccinoPrice = 150;
    const cocaColaPrice = 50;
    const carryBagPrice = 10;

    // Calculate total for each category
    let totalPizzaPrice = (chickenDominatorPizzaQty * chickenDominatorPizzaPrice) + 
                          (cheesyChickenPizzaQty * cheesyChickenPizzaPrice) +
                          (loadedMexicanPizzaQty * loadedMexicanPizzaPrice) +
                          (pestoPizzaQty * pestoPizzaPrice) +
                          (italianStylePizzaQty * italianStylePizzaPrice);

    let totalBurgerPrice = (alooTikkiBurgerQty * alooTikkiBurgerPrice) +
                           (cheesyItalianVegBurgerQty * cheesyItalianVegBurgerPrice) +
                           (chickenBurgerQty * chickenBurgerPrice);

    let totalChickenPrice = (chickenRollQty * chickenRollPrice) +
                            (chickenRiceQty * chickenRicePrice) +
                            (chickenSnacksQty * chickenSnacksPrice);

    let totalBeveragePrice = (waterQty * waterPrice) +
                             (cappuccinoQty * cappuccinoPrice) +
                             (cocaColaQty * cocaColaPrice);

    // Total price calculation
    let totalPrice = totalPizzaPrice + totalBurgerPrice + totalChickenPrice + totalBeveragePrice;

    // Add carry bag charge if applicable
    let carryBag = document.querySelector('input[name="carryBag"]:checked').value;
    if (carryBag === 'Yes') {
        totalPrice += carryBagPrice;
    }

    // Calculate GST (9%)
    let gst = totalPrice * 0.09;
    let totalWithGst = totalPrice + gst;

    // Display the bill summary
    let billSummary = `
        <h2>** BILL SUMMARY **</h2>
        <p>Total (excluding GST): ₹${totalPrice.toFixed(2)}</p>
        <p>GST (9%): ₹${gst.toFixed(2)}</p>
        <p>Total (including GST): ₹${totalWithGst.toFixed(2)}</p>
        <h3>** THANK YOU, VISIT AGAIN! **</h3>
    `;

    document.getElementById('billSummary').innerHTML = billSummary;
}
