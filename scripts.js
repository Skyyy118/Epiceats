 function calculateBill() {
    // Veg Pizza quantities and prices
    let margheritaPizzaQty = parseInt(document.getElementById('margheritaPizzaQty').value) || 0;
    let farmhousePizzaQty = parseInt(document.getElementById('farmhousePizzaQty').value) || 0;
    let veggieSupremePizzaQty = parseInt(document.getElementById('veggieSupremePizzaQty').value) || 0;
    let pepperPaneerPizzaQty = parseInt(document.getElementById('pepperPaneerPizzaQty').value) || 0;
    let mushroomDelightPizzaQty = parseInt(document.getElementById('mushroomDelightPizzaQty').value) || 0;

    // Non-Veg Pizza quantities and prices
    let chickenDominatorPizzaQty = parseInt(document.getElementById('chickenDominatorPizzaQty').value) || 0;
    let pepperoniPizzaQty = parseInt(document.getElementById('pepperoniPizzaQty').value) || 0;
    let bbqChickenPizzaQty = parseInt(document.getElementById('bbqChickenPizzaQty').value) || 0;
    let chickenSupremePizzaQty = parseInt(document.getElementById('chickenSupremePizzaQty').value) || 0;
    let meatLoversPizzaQty = parseInt(document.getElementById('meatLoversPizzaQty').value) || 0;

    // Veg Burger quantities and prices
    let alooTikkiBurgerQty = parseInt(document.getElementById('alooTikkiBurgerQty').value) || 0;
    let cheesyItalianVegBurgerQty = parseInt(document.getElementById('cheesyItalianVegBurgerQty').value) || 0;
    let paneerBurgerQty = parseInt(document.getElementById('paneerBurgerQty').value) || 0;
    let veggieDelightBurgerQty = parseInt(document.getElementById('veggieDelightBurgerQty').value) || 0;
    let mushroomSwissBurgerQty = parseInt(document.getElementById('mushroomSwissBurgerQty').value) || 0;

    // Non-Veg Burger quantities and prices
    let chickenBurgerQty = parseInt(document.getElementById('chickenBurgerQty').value) || 0;
    let grilledChickenBurgerQty = parseInt(document.getElementById('grilledChickenBurgerQty').value) || 0;
    let baconBurgerQty = parseInt(document.getElementById('baconBurgerQty').value) || 0;
    let fishBurgerQty = parseInt(document.getElementById('fishBurgerQty').value) || 0;
    let steakBurgerQty = parseInt(document.getElementById('steakBurgerQty').value) || 0;

    // Sides quantities and prices
    let friesSize = document.getElementById('friesSize').value;
    let friesPrice = friesSize === 'small' ? 50 : friesSize === 'medium' ? 80 : 100;

    let chickenNuggetsQty = parseInt(document.getElementById('chickenNuggetsQty').value) || 0;
    let vegNuggetsQty = parseInt(document.getElementById('vegNuggetsQty').value) || 0;
    let garlicBreadQty = parseInt(document.getElementById('garlicBreadQty').value) || 0;
    let periPeriFriesQty = parseInt(document.getElementById('periPeriFriesQty').value) || 0;
    let salsaFriesQty = parseInt(document.getElementById('salsaFriesQty').value) || 0;

    // Beverages quantities and prices with sizes
    let waterQty = parseInt(document.getElementById('waterQty').value) || 0;
    
    let cappuccinoSize = document.getElementById('cappuccinoSize').value;
    let cappuccinoPrice = cappuccinoSize === 'small' ? 150 : cappuccinoSize === 'medium' ? 180 : 200;

    let cocaColaSize = document.getElementById('cocaColaSize').value;
    let cocaColaPrice = cocaColaSize === 'small' ? 50 : cocaColaSize === 'medium' ? 80 : 100;

    let hotChocolateSize = document.getElementById('hotChocolateSize').value;
    let hotChocolatePrice = hotChocolateSize === 'small' ? 150 : hotChocolateSize === 'medium' ? 180 : 200;

    let americanoEspressoSize = document.getElementById('americanoEspressoSize').value;
    let americanoEspressoPrice = americanoEspressoSize === 'small' ? 160 : americanoEspressoSize === 'medium' ? 200 : 220;

    let mudPieSize = document.getElementById('mudPieSize').value;
    let mudPiePrice = mudPieSize === 'small' ? 180 : mudPieSize === 'medium' ? 220 : 250;

    // Dessert quantities and prices
    let cheeseCakeFlavor = document.getElementById('cheeseCakeFlavor').value;
    let cheeseCakePrice = 250; // same for both flavors

    let darkChocolateFudgeQty = parseInt(document.getElementById('darkChocolateFudgeQty').value) || 0;
    let chocoLavaQty = parseInt(document.getElementById('chocoLavaQty').value) || 0;
    let cupCakeQty = parseInt(document.getElementById('cupCakeQty').value) || 0;

    // Prices for each category
    const margheritaPizzaPrice = 300;
    const farmhousePizzaPrice = 400;
    const veggieSupremePizzaPrice = 450;
    const pepperPaneerPizzaPrice = 420;
    const mushroomDelightPizzaPrice = 350;
    const chickenDominatorPizzaPrice = 600;
    const pepperoniPizzaPrice = 500;
    const bbqChickenPizzaPrice = 550;
    const chickenSupremePizzaPrice = 600;
    const meatLoversPizzaPrice = 650;
    const alooTikkiBurgerPrice = 150;
    const cheesyItalianVegBurgerPrice = 200;
    const paneerBurgerPrice = 180;
    const veggieDelightBurgerPrice = 170;
    const mushroomSwissBurgerPrice = 250;
    const chickenBurgerPrice = 220;
    const grilledChickenBurgerPrice = 250;
    const baconBurgerPrice = 270;
    const fishBurgerPrice = 260;
    const steakBurgerPrice = 300;
    const chickenNuggetsPrice = 100;
    const vegNuggetsPrice = 90;
    const garlicBreadPrice = 120;
    const periPeriFriesPrice = 100;
    const salsaFriesPrice = 110;
    const darkChocolateFudgePrice = 150;
    const chocoLavaPrice = 140;
    const cupCakePrice = 80;
    const waterPrice = 20;

    // Calculate total for each category
    let totalPizzaPrice = (margheritaPizzaQty * margheritaPizzaPrice) + 
                          (farmhousePizzaQty * farmhousePizzaPrice) +
                          (veggieSupremePizzaQty * veggieSupremePizzaPrice) +
                          (pepperPaneerPizzaQty * pepperPaneerPizzaPrice) +
                          (mushroomDelightPizzaQty * mushroomDelightPizzaPrice) +
                          (chickenDominatorPizzaQty * chickenDominatorPizzaPrice) +
                          (pepperoniPizzaQty * pepperoniPizzaPrice) +
                          (bbqChickenPizzaQty * bbqChickenPizzaPrice) +
                          (chickenSupremePizzaQty * chickenSupremePizzaPrice) +
                          (meatLoversPizzaQty * meatLoversPizzaPrice);

    let totalBurgerPrice = (alooTikkiBurgerQty * alooTikkiBurgerPrice) +
                           (cheesyItalianVegBurgerQty * cheesyItalianVegBurgerPrice) +
                           (paneerBurgerQty * paneerBurgerPrice) +
                           (veggieDelightBurgerQty * veggieDelightBurgerPrice) +
                           (mushroomSwissBurgerQty * mushroomSwissBurgerPrice) +
                           (chickenBurgerQty * chickenBurgerPrice) +
                           (grilledChickenBurgerQty * grilledChickenBurgerPrice) +
                           (baconBurgerQty * baconBurgerPrice) +
                           (fishBurgerQty * fishBurgerPrice) +
                           (steakBurgerQty * steakBurgerPrice);

    let totalSidesPrice = friesPrice + 
                          (chickenNuggetsQty * chickenNuggetsPrice) + 
                          (vegNuggetsQty * vegNuggetsPrice) + 
                          (garlicBreadQty * garlicBreadPrice) + 
                          (periPeriFriesQty * periPeriFriesPrice) + 
                          (salsaFriesQty * salsaFriesPrice);

    let totalBeveragePrice = (waterQty * waterPrice) + cappuccinoPrice + cocaColaPrice + hotChocolatePrice + americanoEspressoPrice + mudPiePrice;

    let totalDessertPrice = cheeseCakePrice + 
                            (darkChocolateFudgeQty * darkChocolateFudgePrice) + 
                            (chocoLavaQty * chocoLavaPrice) + 
                            (cupCakeQty * cupCakePrice);

    // Total price calculation
    let totalPrice = totalPizzaPrice + totalBurgerPrice + totalSidesPrice + totalBeveragePrice + totalDessertPrice;

    // Add carry bag charge if applicable
    let carryBag = document.querySelector('input[name="carryBag"]:checked').value;
    const carryBagPrice = 10;
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
