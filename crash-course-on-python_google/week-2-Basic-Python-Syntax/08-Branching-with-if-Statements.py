def hint_username(username: str) -> bool:
    if len(username) < 3:
        return False
    elif len(username) > 15:
        return False
    else:
        return True


def is_even(number: int):
    if number % 2 == 0:
        return True
    return False

