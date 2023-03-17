# position, name, age, level, salary
se1 = ["Software Engineer", "Max", 20, "Junior", 5000]
se2 = ["Software Engineer", "Lisa", 25, "Senior", 7000]


# class
class SoftwareEngineer:
    # class attributes
    alias = "Keyboard Magician"

    def __init__(self, name, age, level, salary):
        # instance attributes
        self.name = name
        self.age = age
        self.level = level
        self.salary = salary


# instance
se1 = SoftwareEngineer("Max", 20, "Junior", 5000)
print(se1.name, se1.age)
se2 = SoftwareEngineer("Lisa", 25, "Senior", 7000)

print(se2.alias)
print(se1.alias)
print(SoftwareEngineer.alias)

SoftwareEngineer.alias = "Something Else"

print(se2.alias)
print(se1.alias)
print(SoftwareEngineer.alias)


# Recap
# create a class (blueprint)
# create a instance (object)
# instance attributes: defined in __init__(self) method
# class attribute
