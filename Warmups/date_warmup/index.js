let today = new Date();

console.log(today.toDateString());

let yesterday = new Date();

yesterday.setDate(today.getDate() - 1);

console.log(yesterday.toDateString());

let tomorrow = new Date();

tomorrow.setDate(today.getDate() + 1);

console.log(tomorrow.toDateString());









