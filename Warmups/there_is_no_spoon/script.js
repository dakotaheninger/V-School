var computer = {
    type: "Mac",
    size: 13,
    color: "Space Gray",
    computerOn: function(){
        var isComputerOn = true;
        return isComputerOn;
        
    }
}
var mountainDew = {
    flavor: "Regular",
    amount: "12 Fl Oz",
    color: "Green",
    more: function(a){
        var total = a * 100;
        return total;
    }
    
    
}
var desk = {
    size: "Big",
    legs: 4,
    material: "Wood",
    dimensions: function(a,b){
        var area = a*b;
        return area;
    }
    
}
var chair = {
    color: "Blue and White",
    wheels: true,
    legs: 5,
    numberOfChairs: function(students){
        var total = students - 1;
        return total;
    }
    
}
var backPack = {
    color: "Green and Purple",
    pockets: 5,
    accentColor: "Black",
    age: function(myAge){
        var age = myAge - 14;
        return age;
    }
    
}
var basketballHoop = {
    size: "Small",
    color: "White",
    ball: "Beach Ball",
    points: function(){
        var basketsMade;
        var totalPoints = basketsMade * 2;
        return totalPoints;
    }
}
var floor = {
    color: "Brown",
    material: "Wood",
    joiner: "Nails",
    numberOfPlanks: function (a,b,c,d){
        var area = a * b;
        var sizeOfPlank = c * d;
        var plankTotal = area / sizeOfPlank;
        return plankTotal;
    }
    
}
var officeSpace = {
    doors: 1,
    windows: 3,
    instruments: ["Guitar", "Drums", "Bass", "Keyboards"],
    size: function(a,b){
    var area = a * b;
    return area;
}
    
}
var lockers = {
    color: "White",
    lockColor: "Black",
    size: "Medium",
    quantity: function(){
        var locations = 3;
        var lockersPerLocation = 6;
        var totalLockers = locations* lockersPerLocation;
        return totalLockers;
    }
}
var windows = {
    quantity: 6,
    panesPerWindow: 6,
    color: "White",
    totalPanes: function(){
        var windows = this.quantity;
        var panesPerWindow = this.panesPerWindow;
        var totalPanes = windows * panesPerWindow;
        return totalPanes;
    }
    
}