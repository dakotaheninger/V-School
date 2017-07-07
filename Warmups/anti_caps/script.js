var sentance = "heLlo hoW are You toDay";
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var newSentance = "";

for(var i = 0; i < sentance.length; i++){
  var c = sentance[i];
  if(c == c.toUpperCase()){
    newSentance += c.toLowerCase();
  } else if(c == c.toLowerCase()){
    newSentance += c.toUpperCase();
  } else {
    newSentance += c;
  }
  }

console.log(newSentance);