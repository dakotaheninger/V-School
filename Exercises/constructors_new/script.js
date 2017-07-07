var IkeaFurniture = function(type, color, size, material, quantity){
    this.type = type;
    this.color = color;
    this.size = size;
    this.material = material;
    this.quantity = quantity;
}
var IkeaElectronics = function(type, brand, size, resolution, smart, color, border, quantity){
    this.type = type;
    this.size = size;
    this.resolution = resolution;
    this.smart = smart;
    this.color = color;
    this.quantity = quantity;
}

var couches = new IkeaFurniture("Couches", "Gray", "8 foot", "Micro-Suede", 4);
var beds = new IkeaFurniture("Beds", "Black", "King", "Memory Foam", 4);
var chairs = new IkeaFurniture("Chairs", "Blue", "Large", "Micro-Suede", 8);
var tvs = new IkeaElectronics("Tv", "Samsung", "70\"", "4k", "Yes", "Black", "Borderless", 10);
var cellPhones = new IkeaElectronics("Cell Phones", "Iphone 7", "N/A", "Retina-Display", "N/A", "Rose Gold", "N/A", 10);

console.log(couches);
console.log(beds);
console.log(chairs);
console.log(tvs);
console.log(cellPhones);