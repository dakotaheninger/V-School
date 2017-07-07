var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];



var reverseSecond = function(str) {
    var newSentance = "";
    for (var i = 0; i < str.length; i++) {
         if (i % 2 == 0) {
            newSentance += (str[i + 1] + " " + str[i] + " ");
        }
    }
    return newSentance;
}
console.log(reverseSecond(lyrics));

//var newLyrics = "";
//var everyOtherLyric = function(otherStr){
//    otherStr.reverse();
//for(var i = 0; i < otherStr.length; i++){
//if (i % 2 == 0){
//    newLyrics += otherStr[i] + " ";
//}
//}
//return newLyrics;
//}
//
//
//
//var joinedLyrics = function(arr_str){
//    return arr_str.join(" ");
//}
//console.log(joinedLyrics(lyrics));
//
//
//
//var reverseLyrics = function(reverseStr){
//    var reversedString = reverseStr.reverse();
//    var newString = reversedString.join(" ")
//    return newString;
//}
//console.log(reverseLyrics(lyrics));
//
//
//console.log(everyOtherLyric(lyrics));
