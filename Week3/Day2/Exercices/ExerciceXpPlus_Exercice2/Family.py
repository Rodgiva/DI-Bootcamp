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