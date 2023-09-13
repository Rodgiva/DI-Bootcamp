class Employee :
    def __init__(self, firstname, lastname, age, job, salary, address):
        self.firstname = firstname
        self.lastname = lastname
        self.age = age
        self.job = job
        self.salary = salary
        self.__address = address
    
    def get_fullname(self) :
        return f"{self.firstname} {self.lastname}"
    
    def happy_birthday(self):
        self.age += 1
    
    def get_promotion(self, new_promotion) :
        self.salary += new_promotion

    def show_info (self) :
        print(f"{self.get_fullname()} is {self.age} years old, his job is {self.job} and his salary is {self.salary}")

    # getter
    @property
    def address (self) :
        return self.__address
    
    # setter
    @address.setter
    def address(self, new_address) :
        if self.job == "developer" :
            self.__address = new_address

emp1 = Employee("John", "Smith", 30, "developer", 20000, "tel aviv")
# emp1.__address = "Haifa" # error
# print(emp1.__address) #error

print("emp1 before", emp1.address) #tlv
emp1.address = "Jerusalem"
print("emp1 after", emp1.address) #jerusalem

emp2 = Employee("John", "Smith", 30, "dancer", 20000, "ramat gan")
print("emp2", emp2.address) #ramat gan
emp2.address = "Jerusalem"
print("emp2 after", emp2.address) #ramat gan