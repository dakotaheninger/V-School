let testString = (str) => {
    let hitXBefore = false;
    let strLowerCase = str.toLowerCase();
    if (strLowerCase.includes("x")) {
        for (var i = 0; i < strLowerCase.length; i++) {
            if (str.substring(i, i + 2) == "xx") {
                return true;
            } else if (strLowerCase[i] == "x") {
                return false;
            }
        }
    } else {
        console.log("No x exists in this string");
    }
    return hitXBefore;
}








module.exports = testString;
