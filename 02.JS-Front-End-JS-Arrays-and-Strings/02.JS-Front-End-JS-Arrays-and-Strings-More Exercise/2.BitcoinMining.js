function solve(grams) {
    const goldPricePerGram = 67.51;
    const bitcoinPrice = 11949.16;

    let bitcoins = 0;
    let day = 0;
    let dayForFirstBitcoin = 0;
    let money = 0;

    for (let i = 0; i < grams.length; i++) {

        day++;
        if (day % 3 == 0) {
            grams[i] *= 0.7;
        }

        money += grams[i] * goldPricePerGram;

        while (money >= bitcoinPrice) {
            money -= bitcoinPrice;
            bitcoins++;
            if (dayForFirstBitcoin == 0) {
                dayForFirstBitcoin = day;
            }
        }
    }

    console.log(`Bought bitcoins: ${bitcoins}`);
    
    if (bitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayForFirstBitcoin}`);
    }
    
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

solve([100, 200, 300]);
solve([50, 100]);
solve([3124.15, 504.212, 2511.124]);
