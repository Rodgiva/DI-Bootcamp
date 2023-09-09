class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []
    
    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
        return self
    
    def get_animals(self):
        [print(animal) for animal in self.animals]

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
    
    # Maybe I hard coded this, I didnt found an easy solution to group the animals by the first letter
    def sort_animals(self):
        dict_animals = {}
        index = 1
        dict_animals[index] = [self.animals[0]]

        for i in range(0, len(self.animals)-1):
            if self.animals[i][0] == self.animals[i+1][0]:
                dict_animals[index].append(self.animals[i])
            else:
                index +=1
                dict_animals[index] = [self.animals[i]]
        return dict_animals
    
    def get_groups(self):
        animals_grouped = self.sort_animals()

a_zoo = Zoo("The zoo")
a_zoo.add_animal("dog").add_animal("cat").add_animal("giraffe").add_animal("dada")
a_zoo.get_groups()
print(a_zoo.sort_animals())