function calculateReduction() {
    const originalPrice = parseFloat(document.getElementById('originalPrice').value);
    const reducedPrice = parseFloat(document.getElementById('reducedPrice').value);
    const discountPercentage = parseFloat(document.getElementById('discountPercentage').value);
    let resultText = '';

    if (!isNaN(originalPrice) && !isNaN(reducedPrice)) {
        // Calculate discount percentage from original and reduced price
        const discount = originalPrice - reducedPrice;
        const discountPercentageCalculated = (discount / originalPrice) * 100;
        resultText = `La réduction est de ${discount.toFixed(2)} € (${discountPercentageCalculated.toFixed(2)}%).`;
    } else if (!isNaN(originalPrice) && !isNaN(discountPercentage)) {
        // Calculate reduced price from original price and discount percentage
        const discount = (discountPercentage / 100) * originalPrice;
        const reducedPriceCalculated = originalPrice - discount;
        resultText = `Le prix réduit est de ${reducedPriceCalculated.toFixed(2)} € (${discount.toFixed(2)} € de réduction).`;
    } else if (!isNaN(reducedPrice) && !isNaN(discountPercentage)) {
        // Calculate original price from reduced price and discount percentage
        const originalPriceCalculated = reducedPrice / (1 - (discountPercentage / 100));
        const discount = originalPriceCalculated - reducedPrice;
        resultText = `Le prix d'origine est de ${originalPriceCalculated.toFixed(2)} € (${discount.toFixed(2)} € de réduction).`;
    } else {
        resultText = 'Veuillez remplir au moins deux champs parmi le prix d\'origine, le prix réduit ou le pourcentage de réduction.';
    }

    document.getElementById('result').innerText = resultText;
}
