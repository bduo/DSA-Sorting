
let array = [21,1,26,45,29,28,2,9,16,49,39,27,43,34,46,40];
// let array = [3,9,14,1,24,22,20,17];
// let array = [14,17,13,15,19,10,3,16,9,12]

function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

function bubbleSort(array) {
    let swaps = 0;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            swap(array, i, i + 1);
            swaps++;
        }
    }

    if (swaps > 0) {
        return bubbleSort(array);
    }
    return array;
};
let count = 0;
function mergeSort(array) {
    count++;
    if (count === 16 ) {
        console.log(array)
    }
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);
    
    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, array);
};

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};


function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    debugger;
    const middle = partition(array, start, end);
    debugger;
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
};

function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};

console.log(mergeSort(array));
// console.log(quickSort(array))



/*      
Question 1a [21, 1, 26, 45]
Question 1c [1, 21]

Question 2a The pivot had to be 17 since it was swapped from the last value of the 2nd half to the first. 
Question 2b array1 = [3, 9, 10, 12, 14, 13, 15, 16, 17, 19]

*/