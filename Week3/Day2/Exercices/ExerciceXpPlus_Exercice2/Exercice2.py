# Exercise 2 : TheIncredibles Family
# Instructions

#     Create a class called TheIncredibles. This class should inherit from the Family class:
#     This is no random family they are an incredible family, therefore we need to add the following keys to our dictionaries: power and incredible_name.

#     Initial members data:

#     [
#         {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
#         {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
#     ]


#     Add a method called use_power, this method should print the power of a member only if they are over 18 years old. If not raise an exception (look up exceptions) which stated they are not over 18 years old.

#     Add a method called incredible_presentation which :
#         Prints the family’s last name and all the members’ first name (ie. use the super() function, to call the family_presentation method)
#         Prints all the members’ incredible name and power.

#     Call the incredible_presentation method.

#     Use the born method inherited from the Family class to add Baby Jack with the following power: “Unknown Power”.

#     Call the incredible_presentation method again.

from Family import Family

class TheIncredibles(Family):
    def __init__(self, family_last_name):
        super().__init__(family_last_name)
        self.members = [
        {'name':'Michael','age':35,'gender':'Male','is_child':False,'power':'fly','incredible_name':'MikeFly'},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power':'read minds','incredible_name':'SuperWoman'}
        ]
    
    def use_power(self):
        for member in self.members:
            if member["age"] >= 18:
                print(f"The power of {member['name']} is {member['power']}")
            else:
                print(f"{member['name']} is not old enought to get a power")
    
    def incredible_presentation(self):
        super().family_presentation()
        print(f"The superpowers of the family are:")
        for member in self.members:
            print(f"    {member['name']}: {member['power']}")

    def born(self, **new_born):
        self.members.append(new_born)
        print(self.members[-1]["new_born"]['gender'])
        print(f"Congratulations to the {self.last_name} family!")

an_incredible_family = TheIncredibles("Incredibles")
an_incredible_family.incredible_presentation()
jack = {'name':'Jack', 'age':0, 'gender':'Male', 'is_child':True, 'power':'???', 'incredible_name':'Baby Jack'}
an_incredible_family.born(new_born=jack)
an_incredible_family.incredible_presentation()