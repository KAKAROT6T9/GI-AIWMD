// Quesiton No 2
var personName = "Kakarot";
console.log("Hello ".concat(personName, ", would you like to learn some Python today?"));
// Question No 3
var personName2 = "Kakarot";
console.log(personName2.toLowerCase());
console.log(personName2.toUpperCase());
console.log(personName2.charAt(0).toUpperCase() + personName2.slice(1).toLowerCase());
// Question No 4
var quote = "Any betrayal you can see is trivial. What is truly fearsome, is the betrayal you cannot see.";
var author = "Aizen Sosuke";
console.log("".concat(author, " once said, \"").concat(quote, "\""));
// Question No 5
var famous_person = "Aizen Sosuke";
var phrase = "Any betrayal you can see is trivial. What is truly fearsome, is the betrayal you cannot see.";
var message = "".concat(famous_person, " once said, \"").concat(phrase, "\"");
console.log(message);
// Question 6
var namewithwhitespace = "  Son Goku \t\n";
console.log(namewithwhitespace);
console.log(namewithwhitespace.trim());
// Question 7 & 8
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
// Question 9
var favoriteNumber = 7;
console.log("My favorite number is: ".concat(favoriteNumber));
// Question 10
//Adding comments to code is simple, just use // for single-line comments or /*for multi-line comments */ 
//For Example thsi is a Single Line Comment.
/*For Example this
is a Multi-Line Comment*/
// Question 11
var names = ["Kakarot", "Vegeta", "Gohan"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log(name_1);
}
// Question 12
var Names = ["Luffy", "Zoro", "Sanji"];
for (var _a = 0, Names_1 = Names; _a < Names_1.length; _a++) {
    var name_2 = Names_1[_a];
    console.log("Hello ".concat(name_2, ", nice to see you!"));
}
// Question 13
var transportation = ["Flying Carpet", "Bugatti Chiron", "Neiman Marcus Limited Edition Fighter Motorcycle"];
for (var _b = 0, transportation_1 = transportation; _b < transportation_1.length; _b++) {
    var mode = transportation_1[_b];
    console.log("I would like to own a ".concat(mode, "."));
}
// Question 14
var guests = ["Muhammad Sumbul", "Abdul Jaleel Shisha", "Ismail Ahmed Kanabawi"];
for (var _c = 0, guests_1 = guests; _c < guests_1.length; _c++) {
    var guest = guests_1[_c];
    console.log("Janab ".concat(guest, " Sahab, apko mere ghar khana khane aana hoga."));
}
// Question 15
var mehmaan = ["Muhammad Sumbul", "Abdul Jaleel Shisha", "Ismail Ahmed Kanabawi"];
function printInvitations(guestList) {
    for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
        var guest = guestList_1[_i];
        console.log("Janab ".concat(guest, " Sahab, apko mere ghar khana khane aana hoga."));
    }
}
function updateGuestList(guestList, originalGuest, newGuest) {
    var index = guestList.indexOf(originalGuest);
    if (index !== -1) {
        console.log("".concat(originalGuest, " can't make it."));
        guestList.splice(index, 1, newGuest);
        console.log("Inviting ".concat(newGuest, " instead."));
    }
}
console.log("Initial invitation list:");
printInvitations(mehmaan);
var originalGuest = "Abdul Jaleel Shisha";
var newGuest = "Khidr Karawita";
updateGuestList(mehmaan, originalGuest, newGuest);
console.log("\nUpdated invitation list:");
printInvitations(mehmaan);
// Questions 16
var dost = ["Muhammad Sumbul", "Abdul Jaleel Shisha", "Ismail Ahmed Kanabawi"];
function printInvitation(guestList) {
    for (var _i = 0, guestList_2 = guestList; _i < guestList_2.length; _i++) {
        var guest = guestList_2[_i];
        console.log("Janab ".concat(guest, " Sahab, apko mere ghar khana khane aana hoga."));
    }
}
function updateGuestsList(guestList, originalGuest, newGuest) {
    var index = guestList.indexOf(originalGuest);
    if (index !== -1) {
        console.log("".concat(originalGuest, " can't make it."));
        guestList.splice(index, 1, newGuest);
        console.log("Inviting ".concat(newGuest, " instead."));
    }
}
console.log("Initial invitation list:");
printInvitation(dost);
var originalGuests = "Abdul Jaleel Shisha";
var newGuests = "Khidr Karawita";
updateGuestList(dost, originalGuests, newGuests);
console.log("\nUpdated invitation list:");
printInvitation(dost);
console.log("\nFound a bigger dinner table!");
// Add one new guest to the beginning of the array
dost.unshift("Khalid Kashmiri");
// Add one new guest to the middle of the array
var middleIndex = Math.floor(dost.length / 2);
dost.splice(middleIndex, 0, "John Cena");
// Use append() to add one new guest to the end of the list
dost.push("Peela Peter");
console.log("\nInvitation list with additional guests:");
printInvitation(dost);
// Question 17
var Guests = ["Muhammad Sumbul", "Abdul Jaleel Shisha", "Ismail Ahmed Kanabawi"];
function printInvitationss(guestList) {
    for (var _i = 0, guestList_3 = guestList; _i < guestList_3.length; _i++) {
        var guest = guestList_3[_i];
        console.log("Janab ".concat(guest, " Sahab, apko mere ghar khana khane aana hoga."));
    }
}
function updateGuestsLists(guestList, originalGuest, newGuest) {
    var index = guestList.indexOf(originalGuest);
    if (index !== -1) {
        console.log("".concat(originalGuest, " can't make it."));
        guestList.splice(index, 1, newGuest);
        console.log("Inviting ".concat(newGuest, " instead."));
    }
}
console.log("Initial invitation list:");
printInvitation(guests);
var originalsGuest = "Abdul Jaleel Shisha";
var newGuestss = "Khidr Karawita";
updateGuestsList(guests, originalsGuest, newGuestss);
console.log("\nUpdated invitation list:");
printInvitation(guests);
console.log("\nFound a bigger dinner table!");
// Add one new guest to the beginning of the array
guests.unshift("Khalid Kashmiri");
// Add one new guest to the middle of the array
var middleIndex2 = Math.floor(guests.length / 2);
guests.splice(middleIndex2, 0, "John Cena");
// Use push() to add one new guest to the end of the list
guests.push("Peela Peter");
console.log("\nInvitation list with additional guests:");
printInvitation(guests);
console.log("\n Ary Yaar Sirf 2 log he khaane pe aasakte hain , Mazrat !.");
// Remove guests from the list until only two names remain
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Janab ".concat(removedGuest, " Sahab! Ap hamare ghar khana khane nahi aasakte."));
}
console.log("\nTwo people are still invited:");
// Print invitation messages to the two remaining guests
printInvitation(guests);
// Remove the last two names from the list
guests.pop();
guests.pop();
// Question 18 
var places = ["Italy", "Tokyo", "Mecca", "Medina", "Japan"];
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
console.log("We are inviting ".concat(guests.length, " people to dinner."));
