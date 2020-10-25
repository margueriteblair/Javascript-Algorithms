function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(137));
console.log(isPrime(237));

function isPrime2(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(isPrime2(127));
console.log(isPrime2(237));
console.log(isPrime(7));