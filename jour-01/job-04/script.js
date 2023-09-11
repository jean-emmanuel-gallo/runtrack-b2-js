function myArraySum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

var myArray = [4, 24, 52, 14, 32, 56];
var result = myArraySum(myArray);

console.log(result); 
