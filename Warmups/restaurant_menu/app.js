var menu = [];

var powderPuffGirls = {
    name: "Powder Puff Girls",
    cost: "20 Cents",
    ingredients: "Sugar and Spice and Everthing Nice",
    print: function () {
        console.log(this.name + "\n" + this.cost + "\n" + this.ingredients);
    }
}

var spaghetti = {
    name: "Spaghetti",
    cost: "$20",
    ingredients: "Spaghetti Noodles, Spaghetti Sauce, Meatballs",
    print: function () {
        console.log(this.name + "\n" + this.cost + "\n" + this.ingredients);
    }
}

var cereal = {
    name: "Cereal",
    cost: "Worth its weight in gold",
    ingredients: "I'm not 100% sure",
    print: function () {
        console.log(this.name + "\n" + this.cost + "\n" + this.ingredients);
    }
}

menu.push(powderPuffGirls, spaghetti, cereal);

var RestaurantMenu = function (name, cost, ingredients) {
    this.name = name;
    this.cost = cost;
    this.ingredients = ingredients;
    this.print = function () {
        console.log(this.name + "\n" + this.cost + "\n" + this.ingredients);
    }
};

var grilledCheese = new RestaurantMenu("Grilled Cheese", "$30", "Bread, Cheese, Heat");
var steak = new RestaurantMenu("Steak", "$50", "Cow Meat");
var pizzaRolls = new RestaurantMenu("Pizza Rolls", "Also worth their weight in gold", "Breading, Cheese, Pepperoni, Pizza Sauce");

menu.push(grilledCheese, steak, pizzaRolls);

for(var i = 0; i < menu.length; i++){
    menu[i].print();
}
