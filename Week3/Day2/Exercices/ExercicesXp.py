# 🌟 Exercise 1 : Pets
# Instructions

#     Create another cat breed named Siamese which inherits from the Cat class.
#     Create a list called all_cats, which holds three cat instances : one Bengal, one Chartreux and one Siamese.
#     Those three cats are Sara’s pets. Create a variable called sara_pets which value is an instance of the Pet class, and pass the variable all_cats to the new instance.
#     Take all the cats for a walk, use the walk method.


class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
all_cats = [Bengal("Bengal", 5), Chartreux("Chartreux", 2), Siamese("Siamese", 7)]
sara_pets = Pets(all_cats)
for cat in sara_pets.animals:
    print(cat.walk())

# 🌟 Exercise 2 : Dogs
# Instructions

#     Create a class called Dog with the following attributes name, age, weight.
#     Implement the following methods in the Dog class:
#         bark: returns a string which states: “<dog_name> is barking”.
#         run_speed: returns the dogs running speed (weight/age*10).
#         fight : takes a parameter which value is another Dog instance, called other_dog. This method returns a string stating which dog won the fight. The winner should be the dog with the higher run_speed x weight.

#     Create 3 dogs and run them through your class.

class Dog:
    def __init__(self, dog_name, dog_age, dog_weight):
        self.name = dog_name
        self.age = dog_age
        self.weight = dog_weight

    def bark(self):
        return f"{self.name} is barking"
    
    def run_speed(self):
        return (self.weight/self.age*10)
    
    def fight(self, other_dog):
        stats_self = self.run_speed() * self.weight
        stats_other_dog = other_dog.run_speed() * other_dog.weight
        if stats_self > stats_other_dog:
            return self
        elif stats_self < stats_other_dog:
            return other_dog

kiwi = Dog("Kiwi", 3, 8)
# print(f"{kiwi.bark()*100}")
moka = Dog("Moka", 8, 20)
spike = Dog("Spike", 15, 30)

print(kiwi.fight(moka).name)
print(kiwi.fight(spike).name)
print(moka.fight(spike).name)

