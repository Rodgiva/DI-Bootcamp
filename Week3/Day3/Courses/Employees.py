from random import randint

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

    @classmethod
    def create_best_employee(cls, salary):
        if salary > 30000:
            name = input("The names of the best employee is:\n")
            lastname = input("The lastname of the best employee is:\n")
            age = input("The age of the best employee is:\n")
            job = input("The job of the best employee is:\n")
            return cls(name, lastname, age, job)

#-----------------------------------------------------------------------------

# Exercise

# Using the Employee class
# implement a method create_best_employee that should create a new employee
# only if their salary is > 30000 --> class method

