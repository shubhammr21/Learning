const isPrime = num => {
    for (let i = 2; i < num / 2; i++) {
        if (!(num % i)) {
            return 0;
        }
    }
    return 1;
}

const main = () => {
    let numPrimes = 0; // number of primes found
    for (let i = 2; i <= 250001; i++) {
        numPrimes += isPrime(i);
    }
    return numPrimes;
}

console.log(main());