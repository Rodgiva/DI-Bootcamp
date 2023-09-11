# Instructions : Old MacDonald’s Farm

#     Take a look at the following code and output:

# File: market.py

# macdonald = Farm("McDonald")
# macdonald.add_animal('cow',5)
# macdonald.add_animal('sheep')
# macdonald.add_animal('sheep')
# macdonald.add_animal('goat', 12)
# print(macdonald.get_info())

# Output

# McDonald's farm

# cow : 5
# sheep : 2
# goat : 12

#     E-I-E-I-0!

# 1.
class Farm:
    def __init__(self, farm_name):
        self.name = farm_name
        self.animal = {}

# 2. The Farm class need an __init__ method with parameter "farm_name"
# 3. The class Farm need 2 methods: add_animal() and get_info()
# 4. In the output, we can see that the function add_animal have an optional parameter.
#   This function have 2 parameters: animal_name and animal_nb (which is optional)
# 5.

class Farm:
    def __init__(self, farm_name):
        self.name = farm_name
        self.animal = {}
    
    def add_animal(self, animal_name, animal_nb = 1):
        if self.animal.get(animal_name) == None:
            self.animal[animal_name] = animal_nb
        else:
            self.animal[animal_name] = self.animal.get(animal_name) + animal_nb

    def get_info(self):
        farm_info = f"{self.name}'s farm\n\n"
        for k, v in self.animal.items():
            farm_info += f"{k} : {v}\n"
        farm_info += "\n    E-I-E-I-0!"
        return(farm_info)

    
macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())


# Expand The Farm

# 1. Add a method called get_animal_types to the Farm class.
#   This method should return a sorted list of all the animal types (names) in the farm.
#   With the example above, the list should be: ['cow', 'goat', 'sheep'].

# 2. Add another method to the Farm class called get_short_info.
#   This method should return the following string: “McDonald’s farm has cows, goats and sheep.”.
#   The method should call the get_animal_types function to get a list of the animals.

class Farm:
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}
    
    def add_animal(self, animal_name, animal_nb = 1):
        if self.animals.get(animal_name) == None:
            self.animals[animal_name] = animal_nb
        else:
            self.animals[animal_name] = self.animals.get(animal_name) + animal_nb

    def get_info(self):
        farm_info = f"{self.name}'s farm\n\n"
        for k, v in self.animal.items():
            farm_info += f"{k} : {v}\n"
        farm_info += "\n    E-I-E-I-0!"
        return(farm_info)
    
    def get_animal_types(self):
        animal_list = sorted([animal for animal in self.animals])
        return animal_list
    
    def get_short_info(self):
        animal_list = self.get_animal_types()
        animal_types_without_last = ', '.join(animal_list[:-1])
        animal_type_last = animal_list[-1]
        animal_types = ' and '.join([animal_types_without_last, animal_type_last])
        info = f"McDonald’s farm has {animal_types}"
        return info

macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_animal_types())
print(macdonald.get_short_info())

# CORRECTION


class Farm:
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}
    
    def add_animal(self, animal_name, animal_nb = 1):
        if animal_name in self.animals:
            self.animals[animal_name] = animal_nb
        else:
            self.animals[animal_name] = self.animals.get(animal_name) + animal_nb

    def get_info(self):
        farm_info = f"{self.name}'s farm\n\n"
        for k, v in self.animal.items():
            farm_info += f"{k} : {v}\n"
        farm_info += "\n    E-I-E-I-0!"
        return(farm_info)
    
    def get_animal_types(self):
        animal_list = sorted([animal for animal in self.animals])
        return animal_list
    
    def get_short_info(self):
        animal_list = self.get_animal_types()
        animal_types_without_last = ', '.join(animal_list[:-1])
        animal_type_last = animal_list[-1]
        animal_types = ' and '.join([animal_types_without_last, animal_type_last])
        info = f"McDonald’s farm has {animal_types}"
        return info

macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_animal_types())
print(macdonald.get_short_info())