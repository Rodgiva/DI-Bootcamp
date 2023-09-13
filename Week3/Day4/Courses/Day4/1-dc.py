from math import pi
# import math

class Circle :

    all_circles = []

    def __init__(self, radius=None, diameter=None) :
        self.radius = diameter / 2 if diameter != None else radius
        self.diameter = radius * 2 if radius != None else diameter
        Circle.all_circles.append(self)

    def compute_area(self) :
        area = (self.radius**2)*pi
        return area

    def __str__(self):
        return f"The circle has a radius of {self.radius} and a diameter of {self.diameter}"

    def __add__(self, other_circle):
        return Circle(radius = self.radius + other_circle.radius)

    def __gt__(self, other_circle) :
       return self.radius > other_circle.radius
    
    def __eq__(self, other_circle) :
        return self.radius == other_circle.radius
    
    # taken by default
    def __lt__(self, other_circle) :
       return self.radius > other_circle.radius

    # @staticmethod
    # def get_radius(circle) :
    #     return circle.radius

    # @classmethod
    # def sort_circles(cls) :
    #     new_circles = sorted(cls.all_circles, key=cls.get_radius)
    #     # for circle in new_circles :
    #     #     print(circle)
    #     return new_circles


c1 = Circle(radius = 2) #keyword argument
c2 = Circle(radius = 4)
c2 = Circle(radius = 1)
c2 = Circle(radius = 3)
# print(c1+c2) 

# NOT SORTED
circles = Circle.all_circles
for circle in circles :
    print(circle)

# SORTED
# using the lt dunder method by default
new_circles = sorted(circles)

for circle in circles :
    print(circle)

# INTERESTING ARTICLE:  https://medium.com/@chaoren/comparing-class-instances-in-python-is-easy-80f487223228