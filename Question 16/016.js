// 16. More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program 
//informing people that you found abigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array.
//• Use append() to add one new guest to the end of your list.
//• Print a new set of invitation messages, one for each person in your list.
var guestArray = ["fatima", "bismah", "eisha"];
var canNotAttend = "eisha";
var newGuest = "feeroza";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
//guestArray.map((items)=> console.log(`Hello, ${items} you are invited to party`))
console.log('welcome all we found a bigger dinner table');
guestArray.unshift("naiha");
var fGuest = "saima";
var middleIndex = guestArray.length / 2;
guestArray.splice(middleIndex, 0, fGuest);
guestArray.push("aysha");
guestArray.map(function (item) { return console.log("\nDear ".concat(item, " you are invited to dinner!")); });
