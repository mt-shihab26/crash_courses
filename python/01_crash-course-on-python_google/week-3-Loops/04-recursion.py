def factorial(n: int) -> int:
    print(f"Factorial called with {n}")
    if n < 2:
        print("Returning 1")
        return 1
    result = n * factorial(n-1)
    print(f"Returning {result} for factorial of {n}")
    return result

