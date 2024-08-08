// 16. More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.

//• Start with your program from Exercise 15. Add a print statement to the end of your program 
//informing people that you found abigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array.
//• Use append() to add one new guest to the end of your list.
//• Print a new set of invitation messages, one for each person in your list.


let guestArray: string[] = ["fatima","bismah","eisha"];



let canNotAttend:string = "eisha";

 let newGuest: string = "feeroza";

 guestArray[guestArray.indexOf(canNotAttend)]=newGuest;


console.log('welcome all we found a bigger dinner table');

guestArray.unshift("naiha");


let fmGuest: string = "saima";

let middleIndex = guestArray.length/2;

guestArray.splice(middleIndex,0,fmGuest);

guestArray.push("aysha");

guestArray.map((item)=>console.log (`\nDear ${item} you are invited to dinner!`));

