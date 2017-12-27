'use strict'

// function search(input, target) {
//     var min = 0;
//     var max = input.length - 1;
//     var guess;

//     while(min <= max) {
//         guess = Math.floor((max + min) / 2);
    
//         if (input[guess] === target) {
//             return guess;
//         }
//         else if (input[guess] < target) {
//             min = guess + 1;
//         }
//         else {
//             max = guess - 1;
//         }
    
//     }
//     return -1;
// };

const binarySearch = (array, key, left, right) => {
    return left > right ? -1 : (() => { 
        const middle = Math.floor((right + left) / 2);
        const index = array[middle] === key ? middle : array[middle] > key 
                    ? binarySearch(array, key, left, middle - 1) :
                    binarySearch(array, key, middle + 1, right);
        return index;
    })()
}

function search(input, target){
    return binarySearch(input, target, 0, input.length - 1)
}

module.exports = search
