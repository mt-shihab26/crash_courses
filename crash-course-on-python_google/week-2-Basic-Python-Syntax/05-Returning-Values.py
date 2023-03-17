def area_triangle(base: float, height: float) -> float:
    return base * height / 2


area_a = area_triangle(5, 4)
area_b = area_triangle(7, 3)
result = area_a + area_b
print(f"The sum of both areas is: {result}")


def convert_seconds(seconds: int) -> [int, int, int]:
    hours = seconds // 3600
    minutes = (seconds - hours * 3600) // 60
    remaining_seconds = seconds - hours * 3600 - minutes * 60
    return hours, minutes, remaining_seconds


val = convert_seconds(234234)
print(type(val))
print(val)
hours2, minutes2, seconds2 = convert_seconds(55555)
print(hours2, minutes2, seconds2)
