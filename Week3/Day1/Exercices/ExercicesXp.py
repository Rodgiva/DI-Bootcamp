# 🌟 Exercise 1: Cats
# Instructions

# Instantiate three Cat objects using the code provided above.
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

cat = Cat("Felix", 6)

# Outside of the class, create a function that finds the oldest cat and returns the cat.
cat1 = Cat("Bob", 2)
cat2 = Cat("John", 4)
cat3 = Cat("Patrik", 7)
cat4 = Cat("Henry", 3)
cats = [cat1, cat2, cat3, cat4]

def oldest(cats):
    cat_ages = [cat.age for cat in cats]
    older_age = cat_ages.index(max(cat_ages))
    return cats[older_age]

print(oldest(cats=cats).name)

# Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.
print(f"The oldest cat is {oldest(cats).name}, and is {oldest(cats).age} years old.")

# 🌟 Exercise 2 : Dogs
# Instructions

#     Create a class called Dog.
#     In this class, create an __init__ method that takes two parameters : name and height. This function instantiates two attributes, which values are the parameters.
#     Create a method called bark that prints the following string “<dog_name> goes woof!”.
#     Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
#     Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.
#     Print the details of his dog (ie. name and height) and call the methods bark and jump.
#     Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
#     Print the details of her dog (ie. name and height) and call the methods bark and jump.
#     Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.

class Dog:
    def __init__(self, dog_name, dog_height):
        self.name = dog_name
        self.height =dog_height

    def bark(self):
        print(f"{self.name} goes woof!")
    
    def jump(self):
        print(f"{self.name} jumps {self.height*2} cm high!")

davids_dog = Dog("Rex", 50)
print(f"I present you {davids_dog.name} the David's dog, {davids_dog.height} cm height.\n...\nC'mon {davids_dog.name}, say something!")
davids_dog.bark()
davids_dog.jump()
davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog("Teacup", 20)
print(f"And I present you also {sarahs_dog.name} the sarah's dog, {sarahs_dog.height} cm height.")
sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height > sarahs_dog.height:
    print(f"{davids_dog.name} is the higher dog")
elif davids_dog.height < sarahs_dog.height:
    print(f"{sarahs_dog.name} is the higher dog")


#🌟 Exercise 3 : Who’s the song producer?
# Instructions

#     Define a class called Song, it will show the lyrics of a song.
#     Its __init__() method should have two arguments: self and lyrics (a list).
#     Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.

#     Create an object, for example:

#     stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])


#     Then, call the sing_me_a_song method. The output should be:

#     There’s a lady who's sure
#     all that glitters is gold
#     and she’s buying a stairway to heaven

class Song:
    def __init__(self, song_lyrics):
        self.lyrics = song_lyrics
    
    def sing_me_a_song(self):
        [print(word) for word in self.lyrics]
        # print(",".join(self.lyrics))

stairway_to_haven_lyrics = ["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"]
stairway = Song(stairway_to_haven_lyrics)
stairway.sing_me_a_song()


# Exercise 4 : Afternoon at the Zoo
# Instructions

#     Create a class called Zoo.
#     In this class create a method __init__ that takes one parameter: zoo_name.
#     It instantiates two attributes: animals (an empty list) and name (name of the zoo).
#     Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn’t already in the list.
#     Create a method called get_animals that prints all the animals of the zoo.
#     Create a method called sell_animal that takes one parameter animal_sold. This method removes the animal from the list and of course the animal needs to exist in the list.

#     Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.
#     Example

#     { 
#         1: "Ape",
#         2: ["Baboon", "Bear"],
#         3: ['Cat', 'Cougar'],
#         4: ['Eel', 'Emu']
#     }


#     Create a method called get_groups that prints the animal/animals inside each group.
#     Create an object called ramat_gan_safari and call all the methods.
#     Tip: The zookeeper is the one who will use this class.
#     Example

#     Which animal should we add to the zoo --> Giraffe
#     x.add_animal(Giraffe)


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

# CORRECTION

# Exercice 4
