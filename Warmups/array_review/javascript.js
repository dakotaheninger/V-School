var final = document.getElementById("final");

var arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

var total = 0;

for (var i = 0; i < arrayNumbers.length; i++) {
    total += arrayNumbers[i];
}

final.innerHTML = "The total by adding " + arrayNumbers[0] + " through " + arrayNumbers[i - 1] + " is " + total;
