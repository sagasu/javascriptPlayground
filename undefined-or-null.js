function calculatePrice(price, taxes, description) {
    taxes = taxes || 0.05;
    description = description || "Default item";
    const total = price * (1 + taxes);

    console.log(`${description} With Tax: $${total}`);
}

calculatePrice(100, 0.07, "My item");
calculatePrice(100, 0, "My other item");
calculatePrice(100, undefined, "");
