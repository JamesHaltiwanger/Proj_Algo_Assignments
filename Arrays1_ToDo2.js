// 1.) Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working ‘in-place’ means that you cannot use a second array – move values within the array that you are given. As always, do not use built-in array functions such as splice().
function reverse(arr) {
    for(var i=0; i < arr.length/2; i++) { // loop through half of the array, swap values across midpoint
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
}
var array1 = [1, 2, 3, 4, 5];
//1st loop: i=0, temp=1, arr[0]=arr[4], arr[4]=temp, array1=[5, 2, 3, 4, 1]
//2nd loop; i=1, temp=2, arr[1]=arr[3], arr[3]= temp, array1=[5, 4, 3, 2, 1]


//2.) Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr’s values to the right by that amount. ‘Wrap-around’ any values that shift off array’s end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don’t use built-in functions. Second: allow negative shiftBy (shift L, not R).Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions. Fourth: minimize the touches of each element.
function rotate(arr, shiftBy) {
	let t = Math.abs(shiftBy);
	while(t > 0) {

		if(shiftBy > 0) {
			let temp = arr[arr.length-1]
			
			for(let i = arr.length - 1; i > 0; i--){
				arr[i] = arr[i-1];
            }
			arr[0] = temp;
            return arr;
		} else {
			let temp = arr[0];
			for(let i = 0; i < arr.length - 1; i++) {
				arr[i] = arr[i + 1];
			}
			arr[arr.length-1] = temp;
            return arr;
		}
		t--;
	}
}
var array2 = [1, 2, 3] //shift by = 1
//temp=3
//1st loop: i=2, arr[2]=arr[1]; array2=[1, 2, 2]
//2nd loop: i=1, arr[1]=arr[0]; array2=[1, 1, 2]
//finish if statement: arr[0]=temp; array2=[3, 1, 2]


//3.) Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.
function filterRange(arr, min, max) {
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] > min && arr[i] < max) {
			for(let j = i; j < arr.length - 1; j++) {
                arr[j] = arr[j + 1];
            }
            arr.length = arr.length - 1;
			i--;
		}
	}
}
var array3 = [1, 2, 3, 4, 5]; //min=2, max=4
//first for loop checks to see if each index value is between min and max. 
//If it is, runs second for loop: see next line
//1st loop: j=2, arr[2]=arr[3]; array3=[1, 2, 4, 4, 5]
//2nd loop; j=3, arr[3]=arr[4]; array3=[1, 2, 4, 5, 5]
//if statement continued: arr.length=4; array3=[1, 2, 4, 5]
//if statement finishing: decrement i by 1, so we can check the index again since we shifted all the numbers to the left by 1.



//4.) Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array’s elements, followed by the second array’s elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].
function arrConcat(arr1, arr2) {
    var newArray4 = [];
    for(var i = 0; i < arr1.length; i++) {
        newArray4[i] = arr1[i];
    }
    var totalLength = arr1.length + arr2.length;
    for(var j = arr1.length; j < totalLength; j++) {
        newArray4[j] = arr2[j-arr1.length];
    }
    return newArray4;
}
var array4a = ['a', 'b'];
var array4b = [1, 2];
console.log(arrConcat(array4a, array4b)); //result is ['a', 'b', 1, 2]