var squareNumber = function (num) {
    return num * num;
}

console.log(squareNumber(20));

var squareRoot = function (num) {
    return Math.sqrt(num);
}

console.log(squareRoot(397));


var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 23, 45, 67, 87, 65, 43];

var totalNumber = function (arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
};

console.log(totalNumber(numbers));

var largestNumber = function (arr) {
    var largest = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }


    }
    return largest;
};

console.log(largestNumber(numbers));
