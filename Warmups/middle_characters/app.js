let midChar = (str) => {
    let final = "";
    if (str.length % 2 !== 0) {
        throw "String is odd"
    } else if (str.length == 0) {
        throw "String is empty"
    } else {
        let half = str.length / 2;
        final = str[half - 1] + str[half];
    }
    return final;


};

module.exports = {
    midChar
};


