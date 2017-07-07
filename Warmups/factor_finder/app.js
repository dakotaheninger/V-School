let factorFinder = (num)=>{
    let count = 0;
    let allFact = [];
    for(var i = num; i > 0; i--){
        if(num % i == 0){
            count++;
            allFact.push(i);

        }
    }
    console.log(allFact);
    if(count == 2){
        return "prime";
    } else {
        return count;
    }
};


module.exports = {
    factorFinder
};