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

const inputData = 100;
const livingCost = [900, 2700, 3400];
console.log(monthlySavings(inputData, livingCost));