# Exercise 1 : Geometry
# Instructions

#     Write a class called Circle that receives a radius as an argument (default is 1.0).
#     Write two instance methods to compute perimeter and area.
#     Write a method that prints the geometrical definition of a circle.

import math

class Circle :
    def __init__(self, circle_radius = 1.0):
        self.radius = circle_radius

    def perimeter(self):
        return math.pi * self.radius * 2
    
    def area(self):
        return (self.radius ** 2) * math.pi
    
    def geometrical_def(self):
        print("A circle is a plane figure bounded by one curved line, and such that all straight lines drawn from a certain point within it to the bounding line, are equal.\nThe bounding line is called its circumference and the point, its centre.")

a_circle = Circle()
print(a_circle.perimeter())
print(a_circle.area())
a_circle.geometrical_def()

# Exercise 2 : Custom List Class
# Instructions

#     Create a class called MyList, the class should receive a list of letters.
#     Add a method that returns the reversed list.
#     Add a method that returns the sorted list.
#     Bonus : Create a method that generates a second list with the same length as mylist. The list should be constructed with random numbers. (use list comprehension).
import random

class MyList:
    def __init__(self, mylist_letters = ["a", "c", "b"]):
        self.letters = mylist_letters

    def reversed_list(self):
        return sorted(self.letters, reverse=True)
    
    def sorted_list(self):
        return sorted(self.letters)
    
    def bonus(self):
        rand_nb_list = []
        for i in range(len(self.letters)):
            rand_nb_list.append(random.randint(1, 100))
        return rand_nb_list

a_list = ["a", "c", "p", "g", "d", "k", "z", "q"]
a_mylist = MyList(a_list)
print(a_mylist.reversed_list())
print(a_mylist.sorted_list())
print(a_mylist.bonus())