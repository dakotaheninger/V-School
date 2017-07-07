let matchingWords = (str) => {
    let wordArr = str.split(" ");
    let repeatingArr = [];
    let fullSentance = "";
    let repeatingWords = "";
    for (var i = 0; i < wordArr.length; i++) {
        for (var x = i + 1; x < wordArr.length; x++) {
            if (!repeatingArr.includes(wordArr[i])) {
                if (wordArr[i] == wordArr[x]) {
                    repeatingArr.push(wordArr[i]);
                }
            }
        }

    }
    if (repeatingArr == "") {
        return "There are no repeating words in this string";
    } else {
        return repeatingArr;
    }
};


module.exports = {
    matchingWords
};

// matchingWords("Banh mi woke skateboard ipsum ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B irony listicle irony pop-up sriracha salvia. Shabby chic eu iceland next level iceland iceland drinking vinegar fanny pack woke minim chicharrones migas.");