# Using the Employee class

# implement the gt dunder method that receives 2 different employees, and returns the employee with the highest salary

# implement the add dunder method that that receives 2 different employees, and returns the total salary of the 2 employees

# implement the str dunder method that introduce the employee

# Call all the methods

class Employee :
    def __init__(self, firstname, lastname, age, job, salary):
        self.firstname = firstname
        self.lastname = lastname
        self.age = age
        self.job = job
        self.salary = salary
    
    def get_fullname(self) :
        return f"{self.firstname} {self.lastname}"
    
    def happy_birthday(self):
        self.age += 1
    
    def get_promotion(self, new_promotion) :
        self.salary += new_promotion

    def show_info (self) :
        print(f"{self.get_fullname()} is {self.age} years old, his job is {self.job} and his salary is {self.salary}")

    # def __gt__(self, employee1, employee2):
    #     if employee1.salary > employee2.salary:
    #         return employee1
    #     else:
    #         return employee2
        
    def __gt__(self, employee):
        if self.salary > employee.salary:
            return self
        elif self.salary < employee.salary:
            return employee
        
    def __add__(self, employee):
        return self.salary + employee.salary
    
    def __str__(self):
        return f"Ladies and gentlemen! Let me introduce you...\n{self.firstname} {self.lastname}! {self.age} years old, {self.job} with a salary of {self.salary} per month, 'belle bête'"

an_employee = Employee("Avigdor", "Partouche", 31, "developer", 30000)
print(an_employee)