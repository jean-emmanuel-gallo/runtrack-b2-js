mySquareArray([3, 8, 4, 2, 5]) === [9, 64, 16, 4, 25];

function mySquareArray(array) {
    var squaredArray = []; 

    for (var i = 0; i < array.length; i++) {
        var square = array[i] * array[i]; 
        squaredArray.push(square); 
    }

    return squaredArray; 
}


var inputArray = [3, 8, 4, 2, 5];
var squaredResult = mySquareArray(inputArray);

console.log(squaredResult); 