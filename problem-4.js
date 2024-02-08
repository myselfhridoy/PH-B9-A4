function password(unique) {
    if (!("name" in unique && "birthYear" in unique && "siteName" in unique && String(unique.birthYear).length === 4)) {
        return "Invalid";
    }
    const siteNameCapitalize = unique.siteName[0].toUpperCase() + unique.siteName.slice(1);
    const uniquePassword = siteNameCapitalize + '#' + unique.name + '@' + unique.birthYear;
    return uniquePassword;
}

const inputPassword = { name: "kolimuddin", birthYear: 1999, siteName: "google" };
console.log(password(inputPassword));