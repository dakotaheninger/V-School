let repeat = (str, num) =>{
    if(num <= 0){
        throw "Please pick a number greater than 0";
    } else if(num === 1){
        return str;
    } else {
        return str + repeat(str, num -1);
    }
};

module.exports = {
    repeat
};