function generateBill() {
    let billDetails = [];

    // Veg Pizza details
    const vegPizzas = [
        { name: 'Margherita Pizza', price: 200, qty: parseInt(document.getElementById('margheritaPizzaQty').value) || 0 },
        { name: 'Farmhouse Pizza', price: 250, qty: parseInt(document.getElementById('farmhousePizzaQty').value) || 0 },
        { name: 'Veggie Supreme Pizza', price: 300, qty: parseInt(document.getElementById('veggieSupremePizzaQty').value) || 0 },
        { name: 'Paneer Pizza', price: 270, qty: parseInt(document.getElementById('paneerPizzaQty').value) || 0 },
        { name: 'Mushroom Pizza', price: 290, qty: parseInt(document.getElementById('mushroomPizzaQty').value) || 0 }
    ];

    // Non-Veg Pizza details
    const nonVegPizzas = [
        { name: 'Chicken Pizza', price: 350, qty: parseInt(document.getElementById('chickenPizzaQty').value) || 0 },
        { name: 'Pepperoni Pizza', price: 400, qty: parseInt(document.getElementById('pepperoniPizzaQty').value) || 0 },
        { name: 'BBQ Chicken Pizza', price: 370, qty: parseInt(document.getElementById('bbqChickenPizzaQty').value) || 0 },
        { name: 'Meat Lovers Pizza', price: 420, qty: parseInt(document.getElementById('meatLoversPizzaQty').value) || 0 },
        { name: 'Ham Pizza', price: 380, qty: parseInt(document.getElementById('hamPizzaQty').value) || 0 }
    ];

    // Veg Burger details
    const vegBurgers = [
        { name: 'Aloo Tikki Burger', price: 100, qty: parseInt(document.getElementById('alooTikkiBurgerQty').value) || 0 },
        { name: 'Paneer Burger', price: 150, qty: parseInt(document.getElementById('paneerBurgerQty').value) || 0 }
    ];

    // Non-Veg Burger details
    const nonVegBurgers = [
        { name: 'Chicken Burger', price: 180, qty: parseInt(document.getElementById('chickenBurgerQty').value) || 0 },
        { name: 'Bacon Burger', price: 200, qty: parseInt(document.getElementById('baconBurgerQty').value) || 0 },
        { name: 'Fish Burger', price: 220, qty: parseInt(document.getElementById('fishBurgerQty').value) || 0 },
        { name: 'Steak Burger', price: 250, qty: parseInt(document.getElementById('steakBurgerQty').value) || 0 }
    ];

    // Sides details
    const friesSize = document.getElementById('friesSize').value;
    let friesPrice = friesSize === 'small' ? 50 : friesSize === 'medium' ? 80 : 100;

    const sides = [
        { name: `Fries (${friesSize})`, price: friesPrice, qty: 1 },
        { name: 'Chicken Nuggets', price: 120, qty: parseInt(document.getElementById('chickenNuggetsQty').value) || 0 },
        { name: 'Veg Nuggets', price: 100, qty: parseInt(document.getElementById('vegNuggetsQty').value) || 0 }
    ];

    // Beverages details
    const cappuccinoSize = document.getElementById('cappuccinoSize').value;
    const cappuccinoPrice = cappuccinoSize === 'small' ? 100 : cappuccinoSize === 'medium' ? 150 : 200;
    
    const beverages = [
        { name: `Water`, price: 30, qty: parseInt(document.getElementById('waterQty').value) || 0 },
        { name: `Cappuccino (${cappuccinoSize})`, price: cappuccinoPrice, qty: 1 }
    ];

    // Desserts details
    const cheeseCakeFlavor = document.getElementById('cheeseCakeFlavor').value;
    let cheeseCakePrice = cheeseCakeFlavor === 'blueberry' ? 250 : cheeseCakeFlavor === 'cranberry' ? 270 : 0;

    const desserts = [
        { name: `Cheese Cake (${cheeseCakeFlavor})`, price: cheeseCakePrice, qty: cheeseCakeFlavor === '0' ? 0 : 1 },
        { name: 'Dark Chocolate Fudge', price: 200, qty: parseInt(document.getElementById('darkChocolateFudgeQty').value) || 0 },
        { name: 'Choco Lava', price: 180, qty: parseInt(document.getElementById('chocoLavaQty').value) || 0 }
    ];

    // Combine all items for the bill
    const allItems = [...vegPizzas, ...nonVegPizzas, ...vegBurgers, ...nonVegBurgers, ...sides, ...beverages, ...desserts];

    // Calculate total price
    let totalPrice = 0;
    allItems.forEach(item => {
        if (item.qty > 0) {
            totalPrice += item.price * item.qty;
            billDetails.push(`${item.qty} x ${item.name} - ₹${item.price * item.qty}`);
        }
    });

    // Add GST (9%)
    const gst = totalPrice * 0.09;
    const totalWithGst = totalPrice + gst;

    // Display bill summary
    const billSummary = `
        <h2>** BILL SUMMARY **</h2>
        <p>${billDetails.join('<br>')}</p>
        <p>Total (excluding GST): ₹${totalPrice.toFixed(2)}</p>
        <p>GST (9%): ₹${gst.toFixed(2)}</p>
        <p>Total (including GST): ₹${totalWithGst.toFixed(2)}</p>
        <h3>** THANK YOU, VISIT AGAIN! **</h3>
    `;
    document.getElementById('billSummary').innerHTML = billSummary;
}
