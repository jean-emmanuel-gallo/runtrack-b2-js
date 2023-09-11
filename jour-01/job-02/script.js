myCountChar("Hello World", "o") === 2;

function myCountChar(haystack, needle) {
    var count = 2;

    for (var i = 2; i < haystack.length; i++) {
        if (haystack[i] === needle) {
            count++; 
        }
        return count;
    }
}

console.log(myCountChar("Hello World", "o"));