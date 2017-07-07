var codeString = "adlkcodeacosedlkejcoreadjkfecoleealkdjfcodeecoyealdkjfcope";
var codeStringLowerCase = codeString.toLowerCase();
var count = 0;
var countCode = function(str){
    for(var i = 0; i < str.length; i++){
        if(str.substring(i,i+2) == "co" && str[i + 3] == "e"){
                    count++;
        }
    }
    return count;
}

console.log(countCode(codeStringLowerCase));

