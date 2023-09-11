# Exercise 1 : Family
# Instructions

#     Create a class called Family and implement the following attributes:
#         members: list of dictionaries with the following keys : name, age, gender and is_child (boolean).
#         last_name : (string)

#     Initial members data:

#     [
#         {'name':'Michael','age':35,'gender':'Male','is_child':False},
#         {'name':'Sarah','age':32,'gender':'Female','is_child':False}
#     ]



#     2. Implement the following methods:
#         born: adds a child to the members list (use **kwargs), don’t forget to print a message congratulating the family.
#         is_18: takes the name of a family member as a parameter and returns True if they are over 18 and False if not.
#         family_presentation: a method that prints the family’s last name and all the members’ first name.

class Family:
    def __init__(self, family_last_name):
        self.last_name = family_last_name
        self.members = [
            {'name':'Michael','age':35,'gender':'Male','is_child':False},
            {'name':'Sarah','age':32,'gender':'Female','is_child':False}
            ]
        
    def born(self, **new_born):
        self.members.append(new_born)
        print(f"Congratulations to the {self.last_name} family! It is a {self.members[-1]['gender']}!")
    
    def is_18(self, name):
        for member in self.members:
            if name in member["name"]:
                return member["age"] >= 18
        print('nothing found')
    
    def family_presentation(self):
        names = ", ".join([member_name["name"] for member_name in self.members])
        print(f"Welcome to the {self.last_name} family. I present you {names}")
        

a_family = Family("Tartuffe")
print(a_family.is_18('Michael'))
a_family.family_presentation()