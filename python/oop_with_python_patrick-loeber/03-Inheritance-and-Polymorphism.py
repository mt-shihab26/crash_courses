# inherits, extend, override
class Employee:
    def __init__(self, name, age, salary):
        self.name = name
        self.age = age
        self.salary = salary

    def work(self):
        print(f"{self.name} is working...")


class SoftwareEngineer(Employee):
    def __init__(self, name, age, salary, level):
        super().__init__(name, age, salary)
        self.level = level

    def debug(self):
        print(f"{self.name} is debuging...")

    def work(self):
        print(f"{self.name} is coding...")


class Designer(Employee):
    def draw(self):
        print(f"{self.name} is drawing...")

    def work(self):
        print(f"{self.name} is desining...")


se = SoftwareEngineer("Max", 25, 9000, "Joniur")
# print(se.name, se.age)
# se.work()
# print(se.level)
# se.debug()

de = Designer("Philipp", 27, 7000)
# print(de.name, de.age)
# de.work()
# de.draw()


# Polymorphism
employees = [
    SoftwareEngineer("Max", 25, 9000, "Joniur"),
    SoftwareEngineer("Sajjad", 24, 8000, "Mid"),
    Designer("Philipp", 27, 7000)
]


def motivate_emplayees(em):
    for employee in em:
        employee.work()


motivate_emplayees(employees)

# Recap
# inheritance: ChildClass(BaseClass)
# inherit, extend, override
# super().__init__()
# polymorphims
