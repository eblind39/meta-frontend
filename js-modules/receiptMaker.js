const receiptMaker = (withTax = false) => {
    const dishes = new Array('Italian pasta', 'Rice with veggies', 'Chicken with potatoes', 'Vegetarian Pizza');
    const prices = new Array(9.55, 8.65, 15.55, 6.45);
    const tax = 1.20;

    if (withTax) {
        console.log('Prices with 20% tax:');
        const result = dishes.map((dish, index) => {
            return `Dish: ${dish} Price (incl.tax): ${prices[index] * tax}`;
        })
        result.forEach(item => console.log(item));
    } else {
        console.log('Prices without tax:');
        dishes.forEach((dish, index) => console.log(`Dish: ${dish} Price (with no tax): ${prices[index]}`));
    }
}

receiptMaker(true);
receiptMaker(false);