# Exercise 1 : Hello World
# Instructions

# Print the following output in one line of code:

# Hello world
# Hello world
# Hello world
# Hello world

#*****************************************************************

# Exercise 2 : Some Math
# Instructions

#     Write code that calculates the result of: (99^3)*8 (meaning 99 to the power of 3, times 8).

#*****************************************************************

# Exercise 3 : What is the output ?
# Instructions

#     Predict the output of the following code snippets:

# >>> 5 < 3

# >>> 3 == 3

# >>> 3 == "3"

# >>> "3" > 3

# >>> "Hello" == "hello"

#*****************************************************************

# 🌟 Exercise 4 : Your computer brand
# Instructions

#     Create a variable called computer_brand which value is the brand name of your computer.
#     Using the computer_brand variable print a sentence that states the following: "I have a <computer_brand> computer".

#*****************************************************************

# 🌟 Exercise 5 : Your information
# Instructions

#     Create a variable called name, and set it’s value to your name.
#     Create a variable called age, and set it’s value to your age.
#     Create a variable called shoe_size, and set it’s value to your shoe size.
#     Create a variable called info and set it’s value to an interesting sentence about yourself. The sentence must contain all the variables created in parts 1, 2 and 3.
#     Have your code print the info message.
#     Run your code

#*****************************************************************

# 🌟 Exercise 6 : A & B
# Instructions

#     Create two variables, a and b.
#     Each variable value should be a number.
#     If a is bigger then b, have your code print Hello World.

#*****************************************************************

# Exercise 7 : Odd or Even
# Instructions

#     Write code that asks the user for a number and determines whether this number is odd or even.

#*****************************************************************

# 🌟 Exercise 8 : What’s your name ?
# Instructions

#     Write code that asks the user for their name and determines whether or not you have the same name, print out a funny message based on the outcome.

#*****************************************************************

# 🌟 Exercise 9 : Tall enough to ride a roller coaster
# Instructions

#     Write code that will ask the user for their height in inches.
#     If they are over 145cm print a message that states they are tall enough to ride.
#     If they are not tall enough print a message that says they need to grow some more to ride.

#*****************************************************************

# Exercise 1 : Hello World
for i in range(0,4):
    print("Hello World")

#*******************************

# Exercise 2 : Some Math
res = (pow(99, 3) * 8)
print(res)

#*******************************

# Exercise 3 : What is the output ?
# >>> 5 < 3
#    --->False

# >>> 3 == 3
#    --->True

# >>> 3 == "3"
#    --->False

# >>> "3" > 3
#    --->False

# >>> "Hello" == "hello"
#    --->False

#*******************************

# 🌟 Exercise 4 : Your computer brand
computer_brand = "Dell"
print(f"I have a '{computer_brand}' computer")

#*******************************

# 🌟 Exercise 5 : Your information
name = "Avigdor"
age = 31
shoe_size = 43
info = f"Hi! My name is {name}, I am {age} years old and my shoe size is {43}. I like to read, play videogames, smithing, electronics, codes, and do sports"

print(info)

#*******************************

# 🌟 Exercise 6 : A & B
a = 5
b = 8
if a > 8:
    print("Hello World")
else:
    print("Goodbye World")

#*******************************

# Exercise 7 : Odd or Even
nb = input("Give me a number, I will tell you if it is odd or even \n")
if nb%2 == 0:
    print("Your number is even")
else:
    print("Your number is odd")

#OR

if nb%2 == 0:
    print("Your number is even")
elif nb%3 == 0:
    print("Your number is odd")

#*******************************

# 🌟 Exercise 8 : What’s your name ?
your_name = input("What is your name? \n")
my_name = "Avigdor"

if your_name == my_name:
    print("No way!!!")
else:
    print("Good to know")

#*******************************

# 🌟 Exercise 9 : Tall enough to ride a roller coaster
height_inches = int(input("What is you height? (in inches) \n"))
height_cm = height_inches * 2,54

if height_cm > 145:
    print("Oh, excuse me sir. Here your tickets, good ride. :)")
else: {
    print("You shall not pass!!!")
}
    

#*********CORRECTION*********#

# Exercise 1 : Hello World
txt = "hello world "
print(txt * 4)

# Exercise 2 : Some Math
res = (99**3)*8
print(res)

# 🌟 Exercise 9 : Tall enough to ride a roller coaster
height_inches = float(input("What is you height? (in inches) \n"))
height_cm = height_inches * 2,54

if height_cm > 145:
    print("Oh, excuse me sir. Here your tickets, good ride. :)")
else: {
    print("You shall not pass!!!")
}