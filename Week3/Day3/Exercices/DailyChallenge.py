# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.

# Other abilities of a Circle instance:

#     Compute the circle’s area
#     Print the attributes of the circle - use a dunder method
#     Be able to add two circles together, and return a new circle with the new radius - use a dunder method
#     Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
#     Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
#     Be able to put them in a list and sort them
#     Bonus (not mandatory) : Install the Turtle module, and draw the sorted circles

import math

class Circle:
    # if we insert the radius only, we save the diameter as radius * 2
    # we respectly do the same with diameter
    # if both input, we save the radius and convert the diameter
    def __init__(self, radius = 10, diameter = 10):
        if radius != 0 and diameter == 0:
            self.radius = radius
            self.diameter = radius * 2
        elif radius == 0 and diameter != 0:
            self.diameter = diameter
            self.radius = diameter/2
        elif radius != 0 and diameter != 0:
            self.radius = radius
            self.diameter = radius * 2
    
    def area(self):
        return math.pi * self.radius**2
    
    def __repr__(self):
        return f"Radius: {self.radius} cm, or Diameter: {self.diameter} cm, Area: {int(self.area())} cm²"
    
    def __add__(self, other):
        new_radius = self.radius + other.radius
        new_circle = Circle(new_radius)
        return new_circle
    
    def __gt__(self, other):
        return self.radius > other.radius
    
    def __eq__(self, other):
        return self.radius == other.radius

a_circle = Circle(20)
print(repr(a_circle))
a_circle2 = Circle(30)
print(repr(a_circle + a_circle2))
print(a_circle > a_circle2)
print(a_circle < a_circle2)
a_circle3 = Circle(20)
print(a_circle == a_circle3)
print(a_circle2 == a_circle3)

a_circle4 = Circle(15)
a_circle5 = Circle(10)
a_circle6 = Circle(35)

circles = [a_circle, a_circle2, a_circle3, a_circle4, a_circle5, a_circle6]
for i in range(len(circles)):
    for j in range(i+1, len(circles)):
        if circles[i].radius > circles[j].radius:
            temp = circles[i].radius
            circles[i].radius = circles[j].radius
            circles[j].radius = temp

for circle in circles:
    print(circle.radius)