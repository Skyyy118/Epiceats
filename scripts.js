function calculateBill() {
    // Get values for Veg Pizzas
    let margheritaPizzaQty = parseInt(document.getElementById('margheritaPizzaQty').value) || 0;
    let farmhousePizzaQty = parseInt(document.getElementById('farmhousePizzaQty').value) || 0;
    let veggieSupremePizzaQty = parseInt(document.getElementById('veggieSupremePizzaQty').value) || 0;
    let pepperPaneerPizzaQty = parseInt(document.getElementById('pepperPaneerPizzaQty').value) || 0;
    let mushroomDelightPizzaQty = parseInt(document.getElementById('mushroomDelightPizzaQty').value) || 0;

    // Get values for Non-Veg Pizzas
    let chickenDominatorPizzaQty = parseInt(document.getElementById('chickenDominatorPizzaQty').value) || 0;
    let pepperoniPizzaQty = parseInt(document.getElementById('pepperoniPizzaQty').value) || 0;
    let bbqChickenPizzaQty = parseInt(document.getElementById('bbqChickenPizzaQty').value) || 0;
    let chickenSupremePizzaQty = parseInt(document.getElementById('chickenSupremePizzaQty').value) || 0;
    let meatLoversPizzaQty = parseInt(document.getElementById('meatLoversPizzaQty').value) || 0;

    // Get values for Veg Burgers
    let alooTikkiBurgerQty = parseInt(document.getElementById('alooTikkiBurgerQty').value) || 0;
    let cheesyItalianVegBurgerQty = parseInt(document.getElementById('cheesyItalianVegBurgerQty').value) || 0;
    let paneerBurgerQty = parseInt(document.getElementById('paneerBurgerQty').value) || 0;
    let veggieDelightBurgerQty = parseInt(document.getElementById('veggieDelightBurgerQty').value) || 0;
    let mushroomSwissBurgerQty = parseInt(document.getElementById('mushroomSwissBurgerQty').value) || 0;

    // Get values for Non-Veg Burgers
    let chickenBurgerQty = parseInt(document.getElementById('chickenBurgerQty').value) || 0;
    let grilledChickenBurgerQty = parseInt(document.getElementById('grilledChickenBurgerQty').value) || 0;
    let baconBurgerQty = parseInt(document.getElementById('baconBurgerQty').value) || 0;
    let fishBurgerQty = parseInt(document.getElementById('fishBurgerQty').value) || 0;
    let steakBurgerQty = parseInt(document.getElementById('steakBurgerQty').value) || 0;

    // Get values for Sides
    let friesSize = document.getElementById('friesSize').value;
    let friesPrice = (friesSize === 'small') ? 50 : (friesSize === 'medium') ? 80 : 100;
    let chickenNuggetsQty = parseInt(document.getElementById('chickenNuggetsQty').value) || 0;
    let vegNuggetsQty = parseInt(document.getElementById('vegNuggetsQty').value) || 0;
    let garlicBreadQty = parseInt(document.getElementById('garlicBreadQty').value) || 0;
    let periPeriFriesQty = parseInt(document.getElementById('periPeriFriesQty').value) || 0;
    let salsaFriesQty = parseInt(document.getElementById('salsaFriesQty').value) || 0;

    // Get values for Beverages
    let cappuccinoSize = document.getElementById('cappuccinoSize').value;
    let cappuccinoPrice = (cappuccinoSize === 'small') ? 150 : (cappuccinoSize === 'medium') ? 180 : 200;
    let cocaColaSize = document.getElementById('cocaColaSize').value;
    let cocaColaPrice = (cocaColaSize === 'small') ? 50 : (cocaColaSize === 'medium') ? 80 : 100;
    let hotChocolateSize = document.getElementById('hotChocolateSize').value;
    let hotChocolatePrice = (hotChocolateSize === 'small') ? 150 : (hotChocolateSize === 'medium') ? 180 : 200;
    let americanoSize = document.getElementById('americanoSize').value;
    let americanoPrice = (americanoSize === 'small') ? 150 : (americanoSize === 'medium') ? 180 : 200;

    let waterQty = parseInt(document.getElementById('waterQty').value) || 0;

    // Get values for Desserts
    let cheeseCakeFlavor = document.getElementById('cheeseCakeFlavor').value;
    let cheeseCakePrice = (cheeseCakeFlavor === 'blueberry') ? 200 : 220;
    let darkChocolateFudgeQty = parseInt(document.getElementById('darkChocolateFudgeQty').value) || 0;
    let chocoLavaQty = parseInt(document.getElementById('chocoLavaQty').value) || 0;
    let cupCokeQty = parseInt(document.getElementById('cupCokeQty').value) || 0;

    // Get values for Order Type and Carry Bag
    let orderType = document.querySelector('input[name="orderType"]:checked').value;
    let carryBag = document.querySelector('input[name="carryBag"]:checked').value;
    let carryBagPrice = (carryBag === 'Yes') ? 10 : 0;

    // Calculate total price
    let totalPrice = (margheritaPizzaQty * 200) + (farmhousePizzaQty * 250) + (veggieSupremePizzaQty * 300) +
                     (pepperPaneerPizzaQty * 280) + (mushroomDelightPizzaQty * 260) +
                     (chickenDominatorPizzaQty * 350) + (pepperoniPizzaQty * 300) +
                     (bbqChickenPizzaQty * 320) + (chickenSupremePizzaQty * 350) + (meatLoversPizzaQty * 400) +
                     (alooTikkiBurgerQty * 100) + (cheesyItalianVegBurgerQty * 180) + (paneerBurgerQty * 150) +
                     (veggieDelightBurgerQty * 140) + (mushroomSwissBurgerQty * 170) +
                     (chickenBurgerQty * 180) + (grilledChickenBurgerQty * 220) + (baconBurgerQty * 250) +
                     (fishBurgerQty * 240) + (steakBurgerQty * 300) +
                     (friesPrice) + (chickenNuggetsQty * 120) + (vegNuggetsQty * 100) + 
                     (garlicBreadQty * 80) + (periPeriFriesQty * 90) + (salsaFriesQty * 100) +
                     (waterQty * 20) + cappuccinoPrice + cocaColaPrice + hotChocolatePrice + americanoPrice +
                     cheeseCakePrice + (darkChocolateFudgeQty * 150) + (chocoLavaQty * 120) + (cupCokeQty * 80) +
                     carryBagPrice;

    // Calculate GST
    let gst = totalPrice * 0.09;
    let totalWithGst = totalPrice + gst;

    // Display the bill summary
    let billSummary = `
    <h2> BILL SUMMARY </h2>
    <p>Order Type: ${orderType}</p>
    <p>Total (excluding GST): ₹${totalPrice.toFixed(2)}</p>
    <p>GST (9%): ₹${gst.toFixed(2)}</p>
    <p>Total (including GST): ₹${totalWithGst.toFixed(2)}</p>
    <h3>Thank you for choosing Epic Eats! We look forward to serving you again!</h3>
`;

document.getElementById('billSummary').innerHTML = billSummary;
