// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//  [4,5,6],
//  [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]

// NOTE: The idea is not sort the elements from the lowest value to the highest; 
// the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside 
// an array [[]].

function snail(array) {
    let result = [];
    let startRow = 0;
    let endRow = array.length - 1
    let startColumn = 0;
    let endColumn = array.length - 1

    if (endRow == 0 && endColumn == 0) {
        return array[0]
    }

    while (startRow <= endRow && startColumn <= endColumn) {
        //first row
        for (let i = startColumn; i <= endColumn; i++) {
            result.push(array[startRow][i])
            console.log('firstrow', result)
        }
        //right column
        startRow++
        for (let i = startRow; i <= endRow; i++) {
            result.push(array[i][endColumn])
            console.log('rightcolumn', result)
        }
        // BottomRow
        endColumn--
        for (let i = endColumn; i >= startColumn; i--) {
            result.push(array[endRow][i])
            console.log('bottomrow', result)
        }
        // middle row
        endRow--
        for (let i = endRow; i >= startRow; i--) {
            result.push(array[i][startColumn])
            console.log('middleRow', result)
        }
        startColumn++
    }
    return result
}

// need to understand
function snail1(array) {
    var vector = [];
    while (array.length) {
        vector.push(...array.shift());
        array.map(row => vector.push(row.pop()));
        array.reverse().map(row => row.reverse());
    }
    return vector;
}

console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))