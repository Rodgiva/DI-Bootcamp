from random import randint

class Employee :
    def __init__(self, firstname, lastname, age, job, salary):
        self.firstname = firstname
        self.lastname = lastname
        self.age = age
        self.job = job
        self.salary = salary
        self.__address = None

    @property
    def address(self):
        return self.__address
    
    @address.setter
    def address(self, addr):
        if self.job == "developer":
            self.__address = addr
    
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
        
me = Employee("Avigdor", "Partouche", 31, "developer", 30000)
print(me.address)
me.address = "12 rue du Ferroux, 69450, Sy Cyr au mont d'Or"
print(me.address)

#-----------------------------------------------------------------------------

# Exercise

# Using the Employee class add an attribute address that should be private

# implement a method that return the address of the employee --> getter

# implement a method that modifies the address of the employee, only if his job is developer --> setter 

# Create an object and call all the methods

# example

# class Bank :

#     def __init__(self, customer) :
#         self.__current_amount = 10000
#         self.customer = customer
    
#     # getter
#     # return the value of the attribute
#     @property
#     def current_amount(self) :
#         return self.__current_amount

#     # makes it possible to change the value of a private attribute
#     @current_amount.setter
#     def current_amount(self, new_amount) :
#         if self.customer == True :
#             self.__current_amount = new_amount

#     def __str__(self):
#         return f"The person has {self.current_amount} dollars left"

# b1 = Bank(True)
# print(b1.current_amount) #getter
# b1.current_amount = 12000 #setter
# print(b1.current_amount) #getter

# # print(b1.__current_amount) #error

# b1.current_amount = 15000