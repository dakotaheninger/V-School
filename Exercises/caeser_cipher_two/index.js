let caeserCipher = (str, num) =>{
    str = str.toLowerCase();
    let key = num;
    let realKey = (num % 26);
    if(realKey < 0){
        realKey = realKey + 26;
    }
    console.log(realKey);
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let newSentence = "";
    for(let i = 0; i < str.length; i++){
        for(let x = 0; x < alphabet.length; x++){
            if(str[i] === alphabet[x]){
                if(x < 3){
                    newSentence += alphabet[x + realKey];
                } else {
                    newSentence += alphabet[x - 3];
                }
            }
        }
    }
    console.log(newSentence);
};


caeserCipher("Hello How Are You Today");

