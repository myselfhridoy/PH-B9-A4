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

function checkName(name) {
    if (typeof name !== "string") {
        return "invalid";
    }
    const nameArray = name.toLowerCase().split("");
    const lastWord = nameArray[nameArray.length - 1];
    const wordListArray = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];

    if (wordListArray.includes(lastWord)) {
        return "Good Name";
    }
    else {
        return "Bad Name"
    }
}

function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        // console.log("Invalid Array");
        return "Invalid Array";
    }
    let validArray = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number" && !isNaN(array[i])) {
            validArray.push(array[i]);
        }
    }
    return validArray;
}

function password(unique) {
    if (!("name" in unique && "birthYear" in unique && "siteName" in unique && String(unique.birthYear).length === 4)) {
        return "Invalid";
    }
    const siteNameCapitalize = unique.siteName[0].toUpperCase() + unique.siteName.slice(1);
    const uniquePassword = siteNameCapitalize + '#' + unique.name + '@' + unique.birthYear;
    return uniquePassword;
}

function monthlySavings(arr, livingCost) {
    if (!(Array.isArray(arr) && !isNaN(livingCost))) {
        return "invalid input";
    }
    let totalIncome = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 3000) {
            arr[i] = (arr[i] - (arr[i] * 20) / 100);
        }
        totalIncome.push(arr[i]);
    }
    const income = (totalIncome[0] + totalIncome[1] + totalIncome[2]);
    const savings = income - livingCost;
    if (savings >= 0) {
        return savings;
    }
    else {
        return "earn more";
    }
}