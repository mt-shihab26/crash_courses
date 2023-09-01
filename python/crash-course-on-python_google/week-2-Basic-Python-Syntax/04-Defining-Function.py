def greeting(name: str) -> None:
    print("Welcome, " + name)


def greeting2(name: str, department: str) -> None:
    print("Welcome, " + name)
    print("You are part of " + department)


greeting("Shihab")
greeting("Saimon")
greeting2("Shihab", "Backend")
