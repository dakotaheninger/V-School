var menu = [];

var powderPuffGirls = {
    name: "Powder Puff Girls",
    price: "$20.00",
    ingredients: ["Sugar,", "Spice,", "Everything Nice"]
}

var spaghetti = {
    name: "Spaghetti",
    price: "$20",
    ingredients: ["Spaghetti,", "Noodles,", "Spaghetti Sauce,", "Meatballs"]
}

var cereal = {
    name: "Cereal",
    price: "Worth its weight in gold",
    ingredients: ["I'm not 100% sure"]
}

menu.push(powderPuffGirls, spaghetti, cereal);

var RestaurantMenu = function (name, price, ingredients) {
    this.name = name;
    this.price = price;
    this.ingredients = [ingredients];
};

var grilledCheese = new RestaurantMenu("Grilled Cheese", "$30", "Bread, Cheese, Heat");
var steak = new RestaurantMenu("Steak", "$50", "Cow Meat");
var pizzaRolls = new RestaurantMenu("Pizza Rolls", "Also worth their weight in gold", "Breading, Cheese, Pepperoni, Pizza Sauce");

menu.push(grilledCheese, steak, pizzaRolls);



var evenOrOdd = 0;
addItem = function(name, price, ing) {
  var item = document.createElement("div");
  
  //title
  var titleElem = document.createElement("h3");
  titleElem.innerHTML = name;
  item.appendChild(titleElem);
  
  //price
  var priceElem = document.createElement("p");
  priceElem.innerHTML = "Price: " + price;
  item.appendChild(priceElem);
  
  //ing
  var ingElem = document.createElement("p");
  ingElem.innerHTML = ing.join(" ");
  item.appendChild(ingElem);
  
  //add div to menu
  document.getElementById("container-change").appendChild(item);
    
    
    if(evenOrOdd % 2 == 0){
        item.setAttribute("class", "even");
    } else {
        item.setAttribute("class", "odd");
    }
    evenOrOdd++;
    console.log(item);
}



for(var i = 0; i < menu.length; i++){
    addItem(menu[i].name, menu[i].price, menu[i].ingredients);
}


