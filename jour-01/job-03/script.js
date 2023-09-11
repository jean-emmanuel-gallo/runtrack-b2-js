function myIsInString(haystack, needle) {
    for (var i = 0; i <= haystack.length - needle.length; i++) {
        var found = true;
        for (var j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                found = false;
                break;
            }
        }
        if (found) {
            return true;
        }
    }
    return false;
}

console.log(myIsInString("Hello world", "llo")); 
console.log(myIsInString("Hello World", "riverjig")); 
