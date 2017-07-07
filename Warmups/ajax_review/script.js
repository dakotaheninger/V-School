var createName = function (name) {
    var div = document.createElement("div");
    div.innerHTML = name;
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(div);
}

var getPerson = function(num) {
axios.get("http://swapi.co/api/people/" + num).then(function (response) {
    createName(response.data.name);
}).catch(function (err) {
    console.log(err);
});
}


for(var i = 1; i < 30; i++){
    getPerson(i);
};
