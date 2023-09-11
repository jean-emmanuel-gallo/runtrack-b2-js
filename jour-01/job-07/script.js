myNearZero([3, 8, 4, 2, 5]) === 2;

myNearZero([-1, -4, 2, 5, 6, 9]) === -1;


function myNearZero(array) {
    if (array.length === 0) {
      
        return null; 
    }

    var closest = array[0]; 

    for (var i = 1; i < array.length; i++) {
        if (Math.abs(array[i]) < Math.abs(closest)) {
            closest = array[i];
        } else if (Math.abs(array[i]) === Math.abs(closest) && array[i] !== closest) {
            closest = Math.abs(closest);
        }
    }

    return closest; 
}

console.log(myNearZero([3, 8, 4, 2, 5])); 
console.log(myNearZero([-1, -4, 2, 5, 6, 9]));  
