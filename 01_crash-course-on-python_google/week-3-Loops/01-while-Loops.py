x = 0
while x < 5:
    print(f"Not there yet, x = {x}")
    x = x + 1
print(f"x = {x}")


def attempts(n: int) -> None:
    x2 = 1
    while x2 <= n:
        print("Attempt " + str(x2))
        x2 += 1
    print("Done")


attempts(5)
