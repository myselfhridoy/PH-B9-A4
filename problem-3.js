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
const passingArray = { num: [1, 2, 3] };
console.log(deleteInvalids(passingArray));
