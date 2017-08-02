let removeVowel = (str) =>{
    let cons = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    let vowels = "aeiouAEIOU";
    let final = {
        noVowels: "",
        vowels: ""
    };
    for(let i = 0; i < str.length; i++){
        for(let x = 0; x < cons.length; x++){
            if(str[i] === cons[x]){
                final.noVowels += str[i];
            } else {
                continue;
            }
        }
        for(let z = 0; z < vowels.length; z++){
            if(str[i] === vowels[z]){
                final.vowels += str[i];
            } else {
                continue;
            }
        }

    }
    return final;
};


module.exports = removeVowel;

