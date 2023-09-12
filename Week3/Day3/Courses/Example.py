class Dog : 
    
    def __init__(self, name, color, age) :
        self.name = name
        self.color = color
        self.age = age

    def bark(self) :
        print("Woof")

    # pleasing sentence informing the user of the information
    # called when we print the object
    def __str__(self) :
        return f"the dog name is {self.name}, the dog color is {self.color}"

    # straight to the point sentence 
    # inform the developer of the information
    # called in the python shell while calling the object
    # >>> my_dog
    def __repr__(self):
        return f"name : {self.name} color : {self.color}"
    
    # the 2 parameters are objects
    def __gt__(self, other_dog) :
        if self.age > other_dog.age :
            print(f"{self.name}  is bigger than {other_dog.name}")
            return self
        else :
            print(f"{other_dog.name}  is bigger than {self.name}")
            return other_dog
    
    # add 2 dogs together
    # return the new puppy that was conceived
    def __add__(self, other_dog) :
        puppy_name = input("what is the name of the new puppy")
        puppy_color = f"{self.color} {other_dog.color}"
        print("a new puppy is born")
        return Dog(puppy_name, puppy_color, 0)
    
my_dog = Dog("rex", "black", 12)
my_friend_dog = Dog("lola", "brown", 2)
print(my_dog > my_friend_dog)
# calling the str dunder method
# the dog name is rex, the dog color is black
# print(my_dog)
new_puppy = my_dog + my_friend_dog
new_puppy.bark()


class Student :

    school_name = "DevelopersInstitute"

    def __init__(self, name, level) :
        self.name = name
        self.level = level

    # instance method
    def do_exams(self, test_name) :
        print(f"{self.name} is doing a {test_name} exam")

    @classmethod
    def create_new_student(cls, grade) :
        print(cls.school_name)
        if grade == "A" :
            new_student_name = input("Your name \n")
            new_student_level = input("Your level \n")
            return cls(new_student_name, new_student_level) 
            # creating a new student
            # Student("John", "1st")
    

class BestStudent(Student) :
    pass


new_student = BestStudent.create_new_student("A")
print(new_student)



