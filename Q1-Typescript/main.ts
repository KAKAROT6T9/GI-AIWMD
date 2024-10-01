// Quesiton No 2
let personName: string = "Kakarot";
console.log(`Hello ${personName}, would you like to learn some Python today?`);

// Question No 3
let personName2: string = "Kakarot";
console.log(personName2.toLowerCase());
console.log(personName2.toUpperCase());
console.log(personName2.charAt(0).toUpperCase() + personName2.slice(1).toLowerCase());

// Question No 4
let quote: string = "Any betrayal you can see is trivial. What is truly fearsome, is the betrayal you cannot see.";
let author: string = "Aizen Sosuke";
console.log(`${author} once said, "${quote}"`);

// Question No 5
let famous_person: string = "Aizen Sosuke";
let phrase: string = "Any betrayal you can see is trivial. What is truly fearsome, is the betrayal you cannot see.";
let message: string = `${famous_person} once said, "${phrase}"`;
console.log(message);

// Question 6
let namewithwhitespace: string = "  Son Goku \t\n";
console.log(namewithwhitespace);
console.log(namewithwhitespace.trim());

// Question 7 & 8
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

// Question 9
let favoriteNumber: number = 7;
console.log(`My favorite number is: ${favoriteNumber}`);

// Question 10
//Adding comments to code is simple, just use // for single-line comments or /*for multi-line comments */ 
//For Example thsi is a Single Line Comment.
/*For Example this 
is a Multi-Line Comment*/

// Question 11
let names: string[] = ["Kakarot", "Vegeta", "Gohan"];
for (let name of names) {
    console.log(name);
}

// Question 12
let Names: string[] = ["Luffy", "Zoro", "Sanji"];
for (let name of Names) {
    console.log(`Hello ${name}, nice to see you!`);
}

// Question 13
let transportation: string[] = ["Flying Carpet", "Bugatti Chiron", "Neiman Marcus Limited Edition Fighter Motorcycle"];
for (let mode of transportation) {
    console.log(`I would like to own a ${mode}.`);
}

// Question 14
let guests: string[] = ["Muhammad Sumbul", "Abdul Jaleel Shisha", "Ismail Ahmed Kanabawi"];
for (let guest of guests) {
    console.log(`Janab ${guest} Sahab, apko mere ghar khana khane aana hoga.`);
}

// Question 15
let mehmaan: string[] = ["Muhammad Sumbul", "Abdul Jaleel Shisha", "Ismail Ahmed Kanabawi"];

function printInvitations(guestList: string[]): void {
    for (let guest of guestList) {
        console.log(`Janab ${guest} Sahab, apko mere ghar khana khane aana hoga.`);
    }
}

function updateGuestList(guestList: string[], originalGuest: string, newGuest: string): void {
    const index = guestList.indexOf(originalGuest);
    if (index !== -1) {
        console.log(`${originalGuest} can't make it.`);
        guestList.splice(index, 1, newGuest);
        console.log(`Inviting ${newGuest} instead.`);
    }
}

console.log("Initial invitation list:");
printInvitations(mehmaan);

const originalGuest: string = "Abdul Jaleel Shisha";
const newGuest: string = "Khidr Karawita";

updateGuestList(mehmaan, originalGuest, newGuest);

console.log("\nUpdated invitation list:");
printInvitations(mehmaan);

// Questions 16
let dost: string[] = ["Muhammad Sumbul", "Abdul Jaleel Shisha", "Ismail Ahmed Kanabawi"];

function printInvitation(guestList: string[]): void {
    for (let guest of guestList) {
        console.log(`Janab ${guest} Sahab, apko mere ghar khana khane aana hoga.`);
    }
}

function updateGuestsList(guestList: string[], originalGuest: string, newGuest: string): void {
    const index = guestList.indexOf(originalGuest);
    if (index !== -1) {
        console.log(`${originalGuest} can't make it.`);
        guestList.splice(index, 1, newGuest);
        console.log(`Inviting ${newGuest} instead.`);
    }
}

console.log("Initial invitation list:");
printInvitation(dost);

const originalGuests: string = "Abdul Jaleel Shisha";
const newGuests: string = "Khidr Karawita";

updateGuestList(dost, originalGuests, newGuests);

console.log("\nUpdated invitation list:");
printInvitation(dost);

console.log("\nFound a bigger dinner table!");

// Add one new guest to the beginning of the array
dost.unshift("Khalid Kashmiri");

// Add one new guest to the middle of the array
const middleIndex: number = Math.floor(dost.length / 2);
dost.splice(middleIndex, 0, "John Cena");

// Use append() to add one new guest to the end of the list
dost.push("Peela Peter");

console.log("\nInvitation list with additional guests:");
printInvitation(dost);

// Question 17

let Guests: string[] = ["Muhammad Sumbul", "Abdul Jaleel Shisha", "Ismail Ahmed Kanabawi"];

function printInvitationss(guestList: string[]): void {
    for (let guest of guestList) {
        console.log(`Janab ${guest} Sahab, apko mere ghar khana khane aana hoga.`);
    }
}

function updateGuestsLists(guestList: string[], originalGuest: string, newGuest: string): void {
    const index = guestList.indexOf(originalGuest);
    if (index !== -1) {
        console.log(`${originalGuest} can't make it.`);
        guestList.splice(index, 1, newGuest);
        console.log(`Inviting ${newGuest} instead.`);
    }
}

console.log("Initial invitation list:");
printInvitation(guests);

const originalsGuest: string = "Abdul Jaleel Shisha";
const newGuestss: string = "Khidr Karawita";

updateGuestsList(guests, originalsGuest, newGuestss);

console.log("\nUpdated invitation list:");
printInvitation(guests);

console.log("\nFound a bigger dinner table!");

// Add one new guest to the beginning of the array
guests.unshift("Khalid Kashmiri");

// Add one new guest to the middle of the array
const middleIndex2: number = Math.floor(guests.length / 2);
guests.splice(middleIndex2, 0, "John Cena");

// Use push() to add one new guest to the end of the list
guests.push("Peela Peter");

console.log("\nInvitation list with additional guests:");
printInvitation(guests);

console.log("\n Ary Yaar Sirf 2 log he khaane pe aasakte hain , Mazrat !.");

// Remove guests from the list until only two names remain
while (guests.length > 2) {
    const removedGuest = guests.pop();
    console.log(`Janab ${removedGuest} Sahab! Ap hamare ghar khana khane nahi aasakte.`);
}

console.log("\nTwo people are still invited:");

// Print invitation messages to the two remaining guests
printInvitation(guests);

// Remove the last two names from the list
guests.pop();
guests.pop();

// Question 18 

let places: string[] = ["Italy", "Tokyo", "Mecca", "Medina", "Japan"];
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

// Question 19

console.log(`We are inviting ${guests.length} people to dinner.`);