"use strict";
var guests = ['Huma Ani', 'Uzma Ani', 'Hina Ani', 'Mona Khala', 'Rehan Mama', 'Shaan Mama'];
for (let i = 0; i < guests.length; i++) {
    console.log('Dear ' + guests[i] + ' You"re invited for a dinner party at our place on Saturday. Looking forward to catching up!');
}
console.log('Sadly ' + guests[4] + ' and ' + guests[5] + ' wont be able to join us at the party because they are out of Pakistan, so i have to make the changes in the invitations');
guests[4] = 'Ramsha';
guests[5] = 'Unaib';
guests.push('Daniyal', 'Hafsa', 'Farwa', 'Ahmed', 'Mahnoor', 'Faizan', 'Mustafa', 'Waleed', 'Hamza', 'Talha');
guests.unshift('Inaya');
guests.splice(3, 0, 'Sufyan');
for (let i = 0; i < guests.length; i++) {
    console.log('Dear ' + guests[i] + "You're invited for a dinner party at our place on Saturday. Looking forward to catching up! This time it's a bigger dinner table");
}
console.log("I'm really embarassed to let all the guests know that the bigger dinner table is not arriving so I can only invite two guests now!");
let p1 = guests.pop();
console.log("Sorry, " + p1 + " due to the table misarrangements, now I can only invite two people. ");
let p2 = guests.pop();
console.log("Sorry, " + p2 + " due to the table misarrangements, now I can only invite two people. ");
let p3 = guests.pop();
console.log("Sorry, " + p3 + " due to the table misarrangements, now I can only invite two people. ");
let p4 = guests.pop();
console.log("Sorry, " + p4 + " due to the table misarrangements, now I can only invite two people. ");
let p5 = guests.pop();
console.log("Sorry, " + p5 + " due to the table misarrangements, now I can only invite two people. ");
let p6 = guests.pop();
console.log("Sorry, " + p6 + " due to the table misarrangements, now I can only invite two people. ");
let p7 = guests.pop();
console.log("Sorry, " + p7 + " due to the table misarrangements, now I can only invite two people. ");
let p8 = guests.pop();
console.log("Sorry, " + p8 + " due to the table misarrangements, now I can only invite two people. ");
let p9 = guests.pop();
console.log("Sorry, " + p9 + " due to the table misarrangements, now I can only invite two people. ");
let p10 = guests.pop();
console.log("Sorry, " + p10 + " due to the table misarrangements, now I can only invite two people. ");
let p11 = guests.pop();
console.log("Sorry, " + p11 + " due to the table misarrangements, now I can only invite two people. ");
let p12 = guests.pop();
console.log("Sorry, " + p12 + " due to the table misarrangements, now I can only invite two people. ");
let p13 = guests.pop();
console.log("Sorry, " + p13 + " due to the table misarrangements, now I can only invite two people. ");
let p14 = guests.pop();
console.log("Sorry, " + p14 + " due to the table misarrangements, now I can only invite two people. ");
let p15 = guests.pop();
console.log("Sorry, " + p15 + " due to the table misarrangements, now I can only invite two people. ");
let p16 = guests.pop();
console.log("Sorry, " + p16 + " due to the table misarrangements, now I can only invite two people. ");
for (let i = 0; i < guests.length; i++) {
    console.log('Dear ' + guests[i] + ' You"re invited for a dinner party at our place on Saturday. Looking forward to catching up!');
}
let p17 = guests.pop();
console.log("Sorry, " + p17 + " due to the table misarrangements, now I can only invite two people. ");
let p18 = guests.pop();
console.log("Sorry, " + p18 + " due to the table misarrangements, now I can only invite two people. ");
console.log(guests);
// question number 18 
var locs = ['Turkey', 'Margalla Hills', 'Cevahir Mall', 'Switzerland', 'Murree', 'Europe'];
console.log(locs);
let copyOfOriginalArray = [...locs];
// sorting in alphabetical order
let sortedlocs = locs.sort();
console.log(sortedlocs);
// showing original array
console.log(copyOfOriginalArray);
// reverse alphabetical order
let revsort = locs.sort().reverse();
console.log(revsort);
console.log(copyOfOriginalArray);
// reverse again
console.log(revsort.reverse());
// reverse once more
console.log(revsort.reverse());
// sort alphabetically
console.log(revsort.sort());
// reverse alphabetical order
console.log(revsort.reverse());
//question no 19
let arraylength = guests.length;
console.log(arraylength);
