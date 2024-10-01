// 2. Personal Message
let personName: string = "Eric";
console.log(`Hello ${personName}, would you like to learn some Python today?`);

// 3. Name Cases
let personName2: string = "John Doe";
console.log(personName2.toLowerCase());
console.log(personName2.toUpperCase());
console.log(personName2.charAt(0).toUpperCase() + personName2.slice(1).toLowerCase());

// 4. Famous Quote
let quote: string = "A person who never made a mistake never tried anything new.";
let author: string = "Albert Einstein";
console.log(`${author} once said, "${quote}"`);

// 5. Famous Quote 2
let famous_person: string = "Albert Einstein";
let message: string = `${famous_person} once said, "${quote}"`;
console.log(message);

// 6. Stripping Names
let nameWithWhitespace: string = "  John Doe \t\n";
console.log(nameWithWhitespace);
console.log(nameWithWhitespace.trim());

// 7. Number Eight
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

// 8. You should create four lines that look like this:
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

// 9. Favorite Number
let favoriteNumber: number = 7;
console.log(`My favorite number is: ${favoriteNumber}`);

// 10. Adding Comments - Adding comments to code is simple, just use // for single-line comments or /* */ for multi-line comments.

// 11. Names
let names: string[] = ["Alice", "Bob", "Charlie"];
for (let name of names) {
    console.log(name);
}

// 12. Greetings
for (let name of names) {
    console.log(`Hello ${name}, nice to see you!`);
}

// 13. Your Own Array
let transportation: string[] = ["car", "bicycle", "plane"];
for (let mode of transportation) {
    console.log(`I would like to own a ${mode}.`);
}

// 14. Guest List
let guests: string[] = ["Albert Einstein", "Marie Curie", "Isaac Newton"];
for (let guest of guests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}

// 15. Changing Guest List
console.log(`${guests.pop()} can't make it.`);
guests.push("Nikola Tesla");
for (let guest of guests) {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
}

// 16. More Guests
console.log("We found a bigger dinner table!");
guests.unshift("Leonardo da Vinci");
guests.splice(Math.floor(guests.length / 2), 0, "Galileo Galilei");
guests.push("Ada Lovelace");
for (let guest of guests) {
    console.log(`Dear ${guest}, you are invited to the big dinner.`);
}

// 17. Shrinking Guest List
console.log("Sorry, the new dinner table won't arrive in time, we can only invite two guests.");
while (guests.length > 2) {
    console.log(`Sorry ${guests.pop()}, we can't invite you anymore.`);
}
for (let guest of guests) {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
}
guests = [];
console.log(guests);

// 18. Seeing the World
let places: string[] = ["Paris", "Tokyo", "Rio de Janeiro", "London", "Sydney"];
console.log("Original order:", places.join(", "));
console.log("Alphabetical order:", places.slice().sort().join(", "));
console.log("Original order again:", places.join(", "));
console.log("Reverse alphabetical order:", places.slice().sort().reverse().join(", "));
console.log("Original order again:", places.join(", "));
places.reverse();
console.log("Reversed order:", places.join(", "));
places.reverse();
console.log("Original order again:", places.join(", "));
console.log("Sorted alphabetical order:", places.slice().sort().join(", "));
console.log("Sorted reverse alphabetical order:", places.slice().sort().reverse().join(", "));

// 19. Dinner Guests
console.log(`We are inviting ${guests.length} people to dinner.`);

// 20. Think of something you could store in a array.
let mountains: string[] = ["Everest", "K2", "Kangchenjunga"];

// 21. They think of something you could store in a TypeScript Object.
let car: { make: string, model: string, year: number } = { make: "Toyota", model: "Camry", year: 2022 };

// 22. Intentional Error
let array: number[] = [1, 2, 3];
// Uncommenting the line below will produce an array index error
// console.log(array[3]);

// 23. Conditional Tests
let car: string = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

// 24. More Conditional Tests
let string1: string = "Hello";
let string2: string = "hello";
console.log("Equality test:", string1 == string2);
console.log("Lower case test:", string1.toLowerCase() == string2);
let num1: number = 5;
let num2: number = 10;
console.log("Numerical tests:", num1 > num2, num1 < num2, num1 >= num2, num1 <= num2);
console.log("And/Or tests:", (num1 > 3 && num2 < 15), (num1 < 3 || num2 > 15));
let fruits: string[] = ["apple", "banana", "orange"];
console.log("In array test:", fruits.includes("banana"));
console.log("Not in array test:", !fruits.includes("pear"));

// 25. Alien Colors #1
let alien_color: string = "green";
if (alien_color === "green") {
    console.log("Player earned 5 points.");
}

// 26. Alien Colors #2
if (alien_color === "green") {
    console.log("Player earned 5 points for shooting the alien.");
} else {
    console.log("Player earned 10 points.");
}

// 27. Alien Colors #3
if (alien_color === "green") {
    console.log("Player earned 5 points.");
} else if (alien_color === "yellow") {
    console.log("Player earned 10 points.");
} else if (alien_color === "red") {
    console.log("Player earned 15 points.");
}

// 28. Stages of Life
let age: number = 25;
if (age < 2) {
    console.log("Person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("Person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("Person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("Person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("Person is an adult.");
} else {
    console.log("Person is an elder.");
}

// 29. Favorite Fruit
let favorite_fruits: string[] = ["apple", "banana", "orange"];
for (let fruit of favorite_fruits) {
    console.log(`You really like ${fruit}s!`);
}

// 30. Hello Admin
let usernames: string[] = ["admin", "user1", "user2", "user3", "user4"];
for (let username of usernames) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
}

// 31. No Users
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}

// 32. Checking Usernames
let current_users: string[] = ["john", "sarah", "jacob", "emma", "william"];
let new_users: string[] = ["John", "jacob", "lucy", "grace", "olivia"];
for (let new_user of new_users) {
    if (current_users.some(user => user.toLowerCase() === new_user.toLowerCase())) {
        console.log(`Sorry, ${new_user} is already taken. Please choose a different username.`);
    } else {
        console.log(`${new_user} is available.`);
    }
}

// 33. Ordinal Numbers
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) {
    let ordinal: string;
    if (number === 1) {
        ordinal = "st";
    } else if (number === 2) {
        ordinal = "nd";
    } else if (number === 3) {
        ordinal = "rd";
    } else {
        ordinal = "th";
    }
    console.log(`${number}${ordinal}`);
}

// 34. Pizzas
let pizzas: string[] = ["Pepperoni", "Margherita", "Supreme"];
for (let pizza of pizzas) {
    console.log(`I like ${pizza} pizza.`);
}
console.log("I really love pizza!");

// 35. Animals
let animals: string[] = ["dog", "cat", "rabbit"];
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}
console.log("Any of these animals would make a great pet!");

// 36. T-Shirt
function make_shirt(size: string, message: string): void {
    console.log(`The shirt size is ${size} and it says "${message}".`);
}
make_shirt("M", "Hello World");

// 37. Large Shirts
function make_shirt2(size: string = "L", message: string = "I love TypeScript"): void {
    console.log(`The shirt size is ${size} and it says "${message}".`);
}
make_shirt2();
make_shirt2("M");
make_shirt2("S", "Hello!");

// 38. Cities
function describe_city(city: string, country: string = "USA"): void {
    console.log(`${city} is in ${country}.`);
}
describe_city("Karachi");
describe_city("Tokyo", "Japan");
describe_city("New York");

// 39. City Names
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Paris", "France"));
console.log(city_country("Sydney", "Australia"));

// 40. Album
function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album: { artist: string, title: string, tracks?: number } = { artist: artist, title: title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("Taylor Swift", "Folklore"));
console.log(make_album("Ed Sheeran", "÷", 16));

// 41. Magicians
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}
let magician_names: string[] = ["David Copperfield", "David Blaine", "Harry Houdini"];
show_magicians(magician_names);

// 42. Great Magicians
function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}
let great_magicians: string[] = make_great(magician_names);
show_magicians(great_magicians);

// 43. Unchanged Magicians
let magicians_copy: string[] = magician_names.slice();
let great_magicians2: string[] = make_great(magicians_copy);
show_magicians(magician_names);
show_magicians(great_magicians2);

// 44. Sandwiches
function make_sandwich(...ingredients: string[]): void {
    console.log("You ordered a sandwich with:");
    for (let ingredient of ingredients) {
        console.log("- " + ingredient);
    }
}
make_sandwich("ham", "cheese", "lettuce");
make_sandwich("turkey", "swiss");
make_sandwich("pb", "j");

// 45. Cars
function car_info(manufacturer: string, model: string, ...features: string[]): { manufacturer: string, model: string, features: string[] } {
    return {
        manufacturer: manufacturer,
        model: model,
        features: features
    };
}
let car1 = car_info("Toyota", "Camry", "red", "sunroof");
console.log(car1);
