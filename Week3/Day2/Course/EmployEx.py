# Exercise

# Using the Employee class of yesterday

# 1. Create a Developer class, that inherits from the Employee class with the attributes :
# - firstname, lastname, age,
# - job is developer as default,
# - salary is 15000 by default,
# - coding skills (a list by default) : all developers should start with an empty list of skills

# 2. Create 2 developers objects and display their attribute
# - Tom Cruiz 30 years old
# - Angelina Jolie 23 years old

# 3. Add those methods to the class

# - add_skills(self, *skills) : receives a tuple of skills and append them to the coding skills list
# - coding(self) : print a nice sentence with all the coding languages the developer knows
# - coding_with_partner(self, other_developer) : print a nice sentence with the name of both developers, and their skills
# - override the get_promotion(self, promotion_amount) : that multiplies the salary of the user by the promotion

# 4. Call all the methods, also those from the Employee Class

from Employees import Employee

class Developer(Employee):
    def __init__(self, firstname, lastname, age):
        super().__init__(firstname, lastname, age, "Developer", 15000)
        self.coding_skills = []
    
    def add_skills(self, *skills):
        [self.coding_skills.append(skill) for skill in skills]
    
    def coding(self):
        sentence = "The coding skills: "
        for skill in self.coding_skills:
            sentence += f"{skill} "
            # to ameliorate
    
    # def coding_with_partner(self, other_developer):
    #     if other_developer in super().
    #     sentence = f"The coding skills of {} "
    #     for skill in self.coding_skills:
    #         sentence += f"{skill} "


a_dev1 = Developer("Tom", "Cruise", "30")
print(f"{a_dev1.firstname} {a_dev1.lastname} {a_dev1.age}")
a_dev2 = Developer("Angelina", "Jolie", "23")
print(f"{a_dev2.firstname} {a_dev2.lastname} {a_dev2.age}")
