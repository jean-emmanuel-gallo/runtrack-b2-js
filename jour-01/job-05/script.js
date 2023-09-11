
function myPrimeList(limit) {
    var isPrime = new Array(limit + 1).fill(true);
    isPrime[0] = isPrime[1] = false; 

    for (var i = 2; i * i <= limit; i++) {
        if (isPrime[i]) {
            for (var j = i * i; j <= limit; j += i) {
                isPrime[j] = false;
            }
        }
    }

    var primes = [];
    for (var i = 2; i <= limit; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }

    return primes;
}

var limit = 18;
var primeNumbers = myPrimeList(limit);

console.log(primeNumbers); 
