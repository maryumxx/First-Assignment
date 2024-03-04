"use strict";
function showMagicians(magicianName) {
    magicianName.forEach(magics => console.log(magics));
}
function greatMagicians(magicianName) {
    for (let i = 0; i < magicianName.length; i++) {
        console.log('The Great ' + magicianNames[i]);
        // magicianName[i] = "the Great " + magicianName[i];
    }
}
let magicianNames = ['Harry Houdini', 'David Blaine', 'Derren Brown', 'Dynamo', 'Ricky J', 'Teller'];
let copyOfOriginalNames = [...magicianNames];
console.log('Show with modification: ');
let greatMagician = greatMagicians(copyOfOriginalNames);
// greatMagicians(magicianNames)
console.log('Show without modification: ');
showMagicians(magicianNames);
