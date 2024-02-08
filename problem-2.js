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

const providedName = "Rupa";
console.log(checkName(providedName));