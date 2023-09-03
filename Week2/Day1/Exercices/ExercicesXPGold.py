# Exercise 1 : Hello World-I love Python
# Instructions

#     Print the following output in one line of code:

# Hello world
# Hello world
# Hello world
# Hello world
# I love python
# I love python
# I love python
# I love python


# Exercise 2 : What is the Season ?
# Instructions

#     Ask the user to input a month (1 to 12).
#     Display the season of the month received :
#         Spring runs from March (3) to May (5)
#         Summer runs from June (6) to August (8)
#         Autumn runs from September (9) to November (11)
#         Winter runs from December (12) to February (2)


# Exercise 1 : Hello World-I love Python
words = ["Hello world", "I love python"]
for i in words:
    for x in range(0,4):
        print(i)

# Exercise 2 : What is the Season ?
month = float(input("Give me a month (the number of the month only, between 1 and 12) \n"))
if 3 <= month <= 5:
    print("Spring")
if 6 <= month <= 8:
    print("Summer")
if 9 <= month <= 11:
    print("Autumns")
if month <= 2 or month == 12:
    print("Winter")

