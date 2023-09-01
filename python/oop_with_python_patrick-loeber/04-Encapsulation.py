class SoftwareEngineer:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.__salary = None
        self.__num_bugs_solved = 0

    def code(self):
        self.__num_bugs_solved += 1

    # getter
    def get_salary(self):
        return self.__salary

    # setter
    def set_salary(self, base_value):
        # check value, conforce constraints
        self.__salary = self.__calculate_salary(base_value)

    def __calculate_salary(self, base_value):
        if self.__num_bugs_solved < 10:
            return base_value
        if self.__num_bugs_solved < 100:
            return base_value * 2
        return base_value * 3


se = SoftwareEngineer("Shihab", 18)

for _ in range(20):
    se.code()

se.set_salary(5000)

print(se.get_salary())


print(help(SoftwareEngineer))
