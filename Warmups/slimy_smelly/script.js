var phrase = "slimy smelly solution"
var final = {};
var newSentance = "";
var counter = function(str){
for(var i = 0; i < str.length; i++){
    if(final.hasOwnProperty(str[i])){
        final[str[i]]++;
    } else {
        final[str[i]] = 1;
        newSentance += str[i];
    }
}
    return final;
}
console.log(counter(phrase));
console.log(newSentance);


var sortable = [];
for (var property in final) {
    sortable.push([property, final[property]]);
}
sortable.sort(function(a, b) {
    return  b[1] - a[1];
});

var orderedObject = {};
var inOrder = function(arr){
    for(var i = 0; i < arr.length; i++){
        var current = arr[i];
        orderedObject[current[0]] = current[1];
    }
    return orderedObject;
}

console.log(inOrder(sortable));

