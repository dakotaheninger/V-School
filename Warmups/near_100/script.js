let near100 = (num) => {
    if (num >= 90 && num <= 110 || num >= 190 && num <= 210) {
        return true;
    } else {
        return false;
    }
};


module.exports = {
    near100
};