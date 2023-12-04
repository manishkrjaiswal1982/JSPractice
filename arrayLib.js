import * as arrayObjec from "./arrayLibSource.js";

let arr1 = [23, 24, 7, 30, 30, 56, 30, 45, 30, 390, 30, 35];

document.querySelector("#sort").innerHTML = `<b>Arrray Sort Value:</b> ` +arrayObjec.default(arr1);
document.querySelector("#ArrMax").innerHTML = `<b>Arrray Max Value:</b> ` +Math.max(...arr1);
document.querySelector("#ArrMin").innerHTML = `<b>Arrray Min Value:</b> ` +Math.min(...arr1);
document.querySelector("#revereArr").innerHTML = `<b>Reverse Array:</b> ` +arrayObjec.arrayReverse(arr1);
document.querySelector("#includeArr").innerHTML = `<b>Array Includes:</b> ` +arrayObjec.arrayInclude(arr1,30);
document.querySelector("#noOfOccuranceArr").innerHTML = `<b>No of occurance array:</b> ` +arrayObjec.arraynoOfOccurance(arr1,30);
document.querySelector("#DuplicateArr").innerHTML = `<b>Duplicate array:</b> ` +arrayObjec.arraynoDuplicate(arr1);


