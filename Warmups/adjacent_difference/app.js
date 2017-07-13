let adjTest = (arr) => {
    let current = 0;
    let total = 0;
    let longest = 0;
    let index = 0;
    let finalArr = [];
    total += arr[0].length;
    if (arr.length < 3) {
        throw "Array does not have 3 or more strings";
    } else {
        for (let i = 1; i < arr.length - 1; i++) {
            total += arr[i].length;
            if (total === 0) {
                throw "All strings in this array are empty";
            } else {
                current = arr[i - 1].length + arr[i].length + arr[i + 1].length;
                if (current > longest) {
                    longest = current;
                    index = i;
                }
            }
        }
        finalArr.push(arr[index - 1], arr[index], arr[index + 1]);
        return finalArr;
    }
};


module.exports = {
    adjTest
};