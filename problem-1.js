function calculateMoney(ticketSale) {
    if (ticketSale >= 0 && typeof ticketSale === "number") {
        const ticketPrice = 120;
        const securityGuardCost = 500;
        const staffCost = 50;

        const earn = ticketSale * ticketPrice - (securityGuardCost + 8 * staffCost);
        return earn;
    }
    else {
        return "Invalid Number";
    }
}
const ticketAmount = 10;
console.log(calculateMoney(ticketAmount));