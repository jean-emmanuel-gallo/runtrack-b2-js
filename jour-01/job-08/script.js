myArraySort([3, 8, 4, 2, 5], "ASC") === [2, 3, 4, 5, 8];
myArraySort([-1, -4, 2, 5, 6, 9], "DESC") === [9, 6, 5, 2, -1, -4];

function myArraySort(array, order) {
    if (order === "ASC") {

        array.sort(function(a, b) {
            return a - b;
        });
    } else if (order === "DESC") {
      
        array.sort(function(a, b) {
            return b - a;
        });
    } else {

        return null; 
    }

    return array; 
}


console.log(myArraySort([1000, 3, 500, 5555], "DESC")); 
