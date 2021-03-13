// 1.) Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
function pushFront(arr, value) {
	// move all values in array over
	for(var i = arr.length; i > 0; i--)
		arr[i] = arr[i-1]
	
	arr[0] = value;
    return arr;
}
var array1 = [4, 6, 8];
var value1 = 2;
//console.log(pushFront(array1, value1)); //result is [2,4,6,8]


// 2.) Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
function popFront(arr) {
	const val = arr[0];
	for(var i = 0; i < arr.length; i++)
		arr[i] = arr[i + 1];
	arr.length = arr.length - 1;
	return val;
}
var array2 = [1, 2, 3, 4, 5];
//console.log(popFront(array2)); //result is 1
//console.log(array2); //result is [2, 3, 4, 5]


// 3.) Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. 
// You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
function insertAt(arr, idx, val) {
	for(var i = arr.length; i > idx; i--)
		arr[i] = arr[i-1]
	 
	arr[idx] = val;
    return arr;
}
var array3 = [1, 2, 3, 4, 5]; 
var index3 = 2;
var value3 = 21;
//Moving the numbers over to the right one index... until you get to "idx". 
//Our example array3 would be [1, 2, 3, 3, 4, 5] at this point. 
//Then we set the value3 at the index of 2.
//console.log(insertAt(array3, index3, value3)); //result is [1, 2, 21, 3, 4, 5]


// 4.) Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). 
// Think of popFront(arr) as equivalent to removeAt(arr,0).
function removeAt(arr, idx) {
    // shift array values right from idx
	toRemove = arr[idx];
	for(var i = idx; i < arr.length-1; i++) {
        arr[i] = arr[i+1];
    }
    arr.length = arr.length-1;
    return toRemove;
}
var array4 = [1, 2, 3, 4, 5];
var index4 = 1
//It would be [1, 3, 4, 5, 5] before it "pops" the last index by reducing the array length by 1. 
//console.log(removeAt(array4, index4)); //result is 2
//console.log(array4); //result is [1, 3, 4, 5]


// 5.) Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. 
// As with all array challenges, do this without using any built-in array methods.
function swapPairs(arr) {
	for(var i = 0; i < arr.length - 1; i = i + 2) {
		var temp = arr[i];
		arr[i] = arr[i + 1];
		arr[i + 1] = temp;
	}
    return arr;
}
var array5 = [1, 2, 3, 4, 5];
//This for loop increments by 2!
//console.log(swapPairs(array5)); //result is [2, 1, 4, 3, 5]


// 6.) Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. 
function removeDupesUnnested(arr) {
	let newArr = [];
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] !== arr[i+1]) 
			newArr.push(arr[i])
	}
	return newArr;
}
var array6 = [1, 2, 2, 3, 3, 3];
console.log(removeDupesUnnested(array6)); //result is [1, 2, 3]