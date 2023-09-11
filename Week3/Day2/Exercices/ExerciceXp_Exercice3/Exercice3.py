# 🌟 Exercise 3 : Dogs Domesticated
# Instructions

#     Create a new python file and import your Dog class from the previous exercise.
#     In the new python file, create a class named PetDog that inherits from Dog.
#     Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.
#     Add the following methods:
#         train: prints the output of bark and switches the trained boolean to True

#         play: takes a parameter which value is a few names of other Dog instances (use *args). The method should print the following string: “dog_names all play together”.

#         do_a_trick: If the dog is trained the method should print one of the following sentences at random:
#             “dog_name does a barrel roll”.
#             “dog_name stands on his back legs”.
#             “dog_name shakes your hand”.
#             “dog_name plays dead”.

from Dog import Dog
from random import randint

class PetDog(Dog):
    def __init__(self, dog_name, dog_age, dog_weight, trained = False):
        self.name = dog_name
        self.age = dog_age
        self.weight = dog_weight
        self.trained = trained
    
    def train(self):
        print(super().bark())
        self.trained = True

    def play(self, *names):
        # I don't know why *names return a list with names[0] all the names and names [1] empty.
        str_names = ', '.join(list(names[0]))
        print(f"{str_names} and {self.name} all play together")
    
    def do_a_trick(self):
        sentences = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead", "confirmed his diploma at Developers Institute", "left for work this morning", "takes care of his accounting"]
        if self.trained:
            print(f"{self.name} {sentences[randint(0,len(sentences))]}")
        else:
            print(f"{self.name} is not enought trained to apply any tricks")

a_dog = PetDog("Bob", 6, 15)
a_dog.play(["Kiwi", "Spike", "Moka"])
a_dog.do_a_trick()
a_dog.train()
a_dog.do_a_trick()
