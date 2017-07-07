var button = document.getElementById("button");
var print = document.getElementById("print");
var sorry = document.getElementById("sorry");

var groceryCart = ["Bread", "Peanut Butter", "Jelly", "Ice Cream", "Frozen Pizza", "Hot Pockets", "Milk", "Lettuce", "Mountain Dew"];

//   ******************************
//   *** Everything is a dollar ***
//   ******************************

var moneyCalculator = function () {
    var remainingMoney = 20 - groceryCart.length;
    return "$" + remainingMoney;
}


var shopper = {
    shopperName: "Dakota",
    numberOfItems: groceryCart.length,
    moneyToStart: "$20",
    doneShopping: false,
    moneyLeftOver: moneyCalculator(),
    itemsInCart: groceryCart,
    favoriteItem: groceryCart[3]
};

var objectTitles = ["Shopper Name", "Number of Items", "Starting Money", "Finished Shopping", "Left Over Money", "Items in Cart", "Favorite Item"]

var printToHTML = function () {
    shopper.doneShopping = true;
    var temp = "";
    var l = 0;
    for (var property in shopper) {

        if (property === "itemsInCart") {
            temp += "<li>" + objectTitles[l] + ": ";
            for (var i = 0; i < groceryCart.length - 1; i++) {
                temp += shopper[property][i] + ", ";
            }
            temp += shopper[property][i]
            console.log(temp);
            print.innerHTML += temp;
            l++;
        } else {
            print.innerHTML += "<li>" + objectTitles[l] + ": " + shopper[property] + "</li>";
            l++;
            
        }

    }
    sorry.innerHTML = "Look how awesome I am! I already shopped for you! Good thing I got the essentials!!!!!"
}

button.addEventListener("click", printToHTML);
