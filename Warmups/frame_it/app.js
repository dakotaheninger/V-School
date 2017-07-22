let frame = (str) => {
    let totalArr = [];
    str = str.split("");
    for (let x = 0; x < 3; x++) {
        let newArr = [];
        for (let i = 0; i < str.length; i++) {
            if(x !== 1){
                newArr.push("*");
            } else {
                newArr.push(str[i]);
            }
        }
        totalArr.push(newArr);
    }
    return totalArr;

};

module.exports = {
    frame
};
