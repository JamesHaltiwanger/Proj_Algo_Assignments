// 1.) Remove Blanks: Create a function that, given a string, returns all of that string’s contents, but without blanks. If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".

function removeBlanks(str) {
    return str.split(" ").join(""); //splits the string into an array of 7 strings, split at the spaces. Then joins all back into one string. 
}
var string1 = "Pl ayTha tFu nkyM usi c";
//console.log(removeBlanks(string1)); //result is PlayThatFunkyMusic


// 2.) Get Digits: Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.

function getDigits(str) {
    var stringArr = str.split("");
    var intStr = "";
    for (var ind = 0; ind < stringArr.length; ind++) {
        if (stringArr[ind]%1 == 0) {
            intStr += stringArr[ind];
        }
    }
    return intStr/1;
}
var string2 = "0s1a3y5w7h9a2t4?6!8?0";
//console.log(getDigits(string2)); //result is 1357924680


// 3.) Acronyms: Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". Given "Live from New York, it's Saturday Night!", return "LFNYISN".

function acronyms(str) {
    var strArr = str.split(" ");
    var retStr = "";
    for (var ind = 0; ind < strArr.length; ind++) {
        if (strArr[ind] == false) { //I think this checks if its a space, or blank index?
            continue;
        } else {
            retStr += strArr[ind][0].toUpperCase();
        }
    }
    return retStr;
}
var string3a = " there's no free lunch - gotta pay yer way. ";
var string3b = "Live from New York, it's Saturday Night!";
var test = ["hello", "world"];
//console.log(acronyms(string3a)); //result is TNFL-GPYW
//console.log(acronyms(string3b));  //result is LFNYISN
//console.log(test[0][0]); //will display the first string in arrays first letter. in this cace, "h"


// 4.) Count Non-Spaces: Accept a string and return the number of non-space characters found in the string. For example, given "Honey pie, you are driving me crazy", return 29 (not 35).

function countNS(str) {
    var strArr = str.split(""); //splits the string up into an array with each character, including spaces. It splits on the "", or "no character"...
    var count = 0;
    for (var ind = 0; ind < strArr.length; ind++) {
        if (strArr[ind] == false) { //I think this checks if its a space, or blank index?
            continue;
        } else {
            count++;
        }
    }
    return count;
}
var string4 = "Honey pie, you are driving me crazy";  
//console.log(countNS(string4)); // result is 29. It counts the "," too.


// 5.) Remove Shorter Strings: Given a string array and value (length), remove any strings shorter than the length from the array.

function removeShort(strArr, val) {
    for (var ind = strArr.length-1; ind >= 0; ind--) {
        if (strArr[ind].length < val) { //if the string length is less than given value,
            for (var i = ind; i < strArr.length-1; i++){ //moves it to end of array, then pops it. 
                var temp = strArr[i];
                strArr[i] = strArr[i+1];
                strArr[i+1] = temp;
            }
            strArr.pop();
        }
    }
    return strArr;
}
var array5 = ["hello", "world", "I", "like", "to", "program"];
//console.log(removeShort(array5, 5)); //result is ['hello', 'world', 'program']
