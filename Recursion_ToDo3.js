// Recursive Binary Search. Given a sorted array and a value, recursively determine whether value is found within array. 
// Example: rBinarySearch([1,3,5,6],4) = false; 
// Example: rBinarySearch([4,5,6,8,12],5) = true.

function rBinarySearch(arr, value) {
    var mid = Math.floor(arr.length/2); //Finds the middle index
    if(arr[mid] == value) {
        return true;
    }
    else if(value < arr[mid] && arr.length > 1) {
        return rBinarySearch(arr.slice(0, mid), value); //Slicing array in half and re-running function with that half only.
    }
    else if(value > arr[mid] && arr.length > 1) {
        return rBinarySearch(arr.slice(mid, arr.length), value); //Slicing array in half and re-running function with that half only.
    } else {
        return false
    }
}
//It slices the array in half over and over, narrowing it down until either the mid equals the value, or the array length reaches 0, which really is 1...Then returns false. 
console.log(rBinarySearch([1, 3, 5, 6], 4)); //Result is false
console.log(rBinarySearch([4, 5, 6, 8, 12], 5)); //Result is true


// Greatest Common Factor. Given two integers, create rGCF(num1,num2) to recursively determine Greatest Common Factor (the largest integer dividing evenly into both). Greek mathematician Euclid demonstrated these facts:
// gcf(a,b) == a, if a == b;
// gcf(a,b) == gcf(a-b,b), if a>b;
// gcf(a,b) == gcf(a,b-a), if b>a.

function rGCF(param1, param2) {
    if (param1 == param2) {
        return param1;
    }
    if (param1 > param2) {
        return rGCF(param1-param2, param2);
    }
    if (param1 < param2) {
        return rGCF(param1, param2-param1);
    }
}

console.log(rGCF(3, 7)); //Result is 1
console.log(rGCF(18, 27)); //Result is 9
console.log(rGCF(49, 14)); //Result is 7


// Second: rework facts #2 and #3 to reduce stack consumption and expand rGCF’s reach. You should  be able to compute rGCF(123456,987654).

function GCF(param1, param2) {
    if (param1 == param2) {
        return param1;
    }
    if (param1 > param2) {
        if ((param1/param2) % 1 === 0) {
            return param2;
        } else {
            return GCF(param1-param2, param2);
        }
    }
    if (param1 < param2) {
        if ((param2/param1) % 1 === 0) {
            return param1;
        } else {
            return GCF(param1, param2-param1);
        }
    }
}
console.log(GCF(123456, 987654)); //Result is 6... surprisingly

