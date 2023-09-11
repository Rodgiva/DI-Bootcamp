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

# def create_employees():
#     lst_names = ["John", "Lea", "Emma", "Josh", "Eli"]
#     lst_lastnames = ["Cohen", "Smith", "Doe", "Sevi", "Swtazh"]
#     lst_jobs = ["developer", "dancer", "cowboy", "tennis player", "doctor"]
    
#     list_employees = []
#     for i in range(10):
#         an_employee = Employee(lst_names[randint(0,4)], lst_lastnames[randint(0,4)], randint(18,67), lst_jobs[randint(0,4)], randint(10000, 45000))
#         list_employees.append(an_employee)
#         an_employee.show_info()

# create_employees()

