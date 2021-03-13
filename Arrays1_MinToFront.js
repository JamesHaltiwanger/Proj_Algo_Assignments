//Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.
function minToFront(arr) {
    var min = arr[0];
    var idx = 0;
    for (var i = 1; i < arr.length; i++){ //This for loop finds what the min is, and what index it is located.
        if (arr[i] < min) { 
            min = arr[i];
            idx = i;
        }
    }
    for (var x = idx; x > 0; x--){ //Now, we start looping at index of min, save min in temp. Set value of index x to the value of the next index to the left. Then set the index to the left to temp, which is min. Repeat until min is at front!
        var temp = arr[x];
        arr[x] = arr[x-1];
        arr[x-1] = temp;
    }
    return arr;
}
var array1 = [4, 2, 1, 3, 5];
console.log(minToFront(array1)); //result is [1, 4, 2, 3, 5]
