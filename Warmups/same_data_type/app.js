let dataCompare = (arr) => {
    let dataType = typeof(arr[0][0]);
    isSameData = true;
    for (var i = 0; i < arr.length; i++) {
        for (var x = 0; x < arr[i].length; x++) {
            if (typeof(arr[i][x]) === dataType) {
                isSameData = true;
            } else {
                return false;
            }

        }
    }
    return isSameData;
};

module.exports = {
    dataCompare
};