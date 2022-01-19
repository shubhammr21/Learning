def is_prime(n):
    for i in range(2, n//2):
        if not (n%i):
            return 0
    return 1

def main():
    num_primes = 0
    for i in range(2, 250001):
        num_primes += is_prime(i)
    
    return num_primes

if __name__ == "__main__":
    print(main())