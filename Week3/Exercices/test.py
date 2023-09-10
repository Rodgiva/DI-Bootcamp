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