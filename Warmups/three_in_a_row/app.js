let tripleFinder = (arr) =>{
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == arr[i + 1] && arr[i] == arr[i + 2]){
            return true;
        }
    }
    return false;
};

module.exports = {
    tripleFinder
};