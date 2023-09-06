# 🌟 Exercise 1 : Set
# Instructions

#     Create a set called my_fav_numbers with all your favorites numbers.
#     Add two new numbers to the set.
#     Remove the last number.
#     Create a set called friend_fav_numbers with your friend’s favorites numbers.
#     Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.


# 🌟 Exercise 2: Tuple
# Instructions

#     Given a tuple which value is integers, is it possible to add more integers to the tuple?


# 🌟 Exercise 3: List
# Instructions

# Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];

#     Remove “Banana” from the list.
#     Remove “Blueberries” from the list.
#     Add “Kiwi” to the end of the list.
#     Add “Apples” to the beginning of the list.
#     Count how many apples are in the basket.
#     Empty the basket.
#     Print(basket)


# 🌟 Exercise 4: Floats
# Instructions

#     Recap – What is a float? What is the difference between an integer and a float?
#     Can you think of another way to generate a sequence of floats?
#     Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).


# 🌟 Exercise 5: For Loop
# Instructions

#     Use a for loop to print all numbers from 1 to 20, inclusive.
#     Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.


# 🌟 Exercise 6 : While Loop
# Instructions

#     Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.


# 🌟 Exercise 7: Favorite fruits
# Instructions

#     Ask the user to input their favorite fruit(s) (one or several fruits).
#     Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
#     Store the favorite fruit(s) in a list (convert the string of words into a list of words).
#     Now that we have a list of fruits, ask the user to input a name of any fruit.
#         If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
#         If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.


# Exercise 8: Who ordered a pizza ?
# Instructions

#     Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
#     As they enter each topping, print a message saying you’ll add that topping to their pizza.
#     Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).


# Exercise 9: Cinemax
# Instructions

#     A movie theater charges different ticket prices depending on a person’s age.
#         if a person is under the age of 3, the ticket is free.
#         if they are between 3 and 12, the ticket is $10.
#         if they are over the age of 12, the ticket is $15.

#     Ask a family the age of each person who wants a ticket.

#     Store the total cost of all the family’s tickets and print it out.

#     A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
#     Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
#     At the end, print the final list.


# Exercise 10 : Sandwich Orders
# Instructions

# Using the list below :

# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

#     The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
#     We need to prepare the orders of the clients:
#         Create an empty list called finished_sandwiches.
#         One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
#     After all the sandwiches have been made, print a message listing each sandwich that was made, such as:

# I made your tuna sandwich
# I made your avocado sandwich
# I made your egg sandwich
# I made your chicken sandwich


# 🌟 Exercise 1 : Set
my_fav_numbers = {12, 64, 128}

my_fav_numbers.add(42)
my_fav_numbers.add(36)

print(my_fav_numbers)

my_fav_numbers.remove(36)

print(my_fav_numbers)

friend_fav_numbers = {2, 4, 8, 16, 32}

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)

#*******************************************************************************#

# 🌟 Exercise 2: Tuple
print("It is not possible to add more integers to the tuples because they are immutable")

#*******************************************************************************#

# 🌟 Exercise 3: List
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Apples")
basket.insert(0, "Apples")
print(basket)

count = basket.count('Apples')
print(count)
basket.clear()
print(basket)

#*******************************************************************************#

# 🌟 Exercise 4: Floats
print("An int is a number WITHOUT a digit after the decimal point, unlike float which is a number WITH a digit after the decimal point")

a_list = []
for i in range(15, 50, 5):
    a_list.append(i/10)

print(a_list)

#*******************************************************************************#

# 🌟 Exercise 5: For Loop
for i in range(1, 21):
    print(i)

for i in range(2, 21, 2):
    print(i)
#OR
for i in range(1, 21):
    if i%2 == 0:
        print(i)

#*******************************************************************************#

#🌟 Exercise 6 : While Loop
my_name = "Avigdor"
while True:
    your_name = input("What is your name?\n")
    if your_name == my_name:
        print("Yes! It is my name too!")
        break
    print("Good. But it is not my name. Sooo...")

#*******************************************************************************#

#🌟 Exercise 7: Favorite fruits
your_favorite_fruits = input("What is your favorite fruits? Separate the fruits with a single space.\n")
list_of_fruits = your_favorite_fruits.split()
name_of_fruit = input("Give me a name of any fruit\n")

# Here, the index() methods return an error when the index is not found, so I manage this with "try"
try :
    list_of_fruits.index(name_of_fruit)
    print("You chose one of your favorite fruits! Enjoy!")
except ValueError:
    print("You chose a new fruit. I hope you enjoy")

#OR

check_if_found = False
for i in range(len(list_of_fruits)):
    if list_of_fruits[i] == name_of_fruit:
        check_if_found = True
        print("You chose one of your favorite fruits! Enjoy!")
        break
if not check_if_found:
    print("You chose a new fruit. I hope you enjoy")

#*******************************************************************************#

#Exercise 8: Who ordered a pizza ?
print("Hi and welcome to Greggo Pizza. You can say 'quit' exactly anytime if you want to stop.")
toppings = []
price_pizza = 10
price_topping = 2.5
while True:
    topping_to_add = input("What toppings do you want in your pizza?\n")
    if topping_to_add == "quit":
        break
    toppings.append(topping_to_add)
price_final = (len(toppings) * 2.5) + 10
toppings_str = ', '.join(toppings)
print(f"So, you ordered a pizza with {toppings_str}")
print(f"It will cost {price_final} dollars")

#*******************************************************************************#

#Exercise 9: Cinemax
tickets = []
price = 0
print("Hi and welcome to the Movie Theater. Please tell me the ages of each person. You can say 'quit' exactly anytime if you want to stop.")
while True:
    age = input("What is your age?\n")
    if age == "quit":
        break
    if age < 3:
        tickets.append("Ticket under 3")
    elif 3 <= age < 12:
        price += 10
        tickets.append("Ticket between 3 and 12")
    elif 12 <= age:
        price += 15
        tickets.append("Ticket over 12")
print(f"The total cost of will be {price} dollars")

# Teenages
teenagers = ["Bob", "Mark", "Henry", "John"]
teenagers_to_remove = []
print("Please tell me the ages of each person. You can say 'quit' exactly anytime if you want to stop.")
for i in teenagers:
    teen_age = int(input(f"{i}, what is your age?\n"))
    if 16 <= teen_age <= 21:
        print("You are authorized.")
    else:
        print("You are NOT authorized to enter. Bye.")
        teenagers_to_remove.append(i)
teenagers = list(set(teenagers) - set(teenagers_to_remove))
teenagers_list = ', '.join(teenagers)
print(f"So, {teenagers_list}, you can come in. The others, get out!")

#*******************************************************************************#

#Exercise 10 : Sandwich Orders
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

#using a while loop
i = 0
while i < len(sandwich_orders):
    if sandwich_orders[i] == "Pastrami sandwich":
        del sandwich_orders[i]
        i -= 1
    i += 1

finished_sandwiches = []
while len(sandwich_orders) > 0:
    finished_sandwiches.append(sandwich_orders[0])
    del sandwich_orders[0]

for j in finished_sandwiches:
    print(f"I made your {j}")

#**********CORRECTION**********#

# 🌟 Exercise 3: List
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.pop()
basket.append("Apples")
basket.insert(0, "Apples")
print(basket)

count = basket.count('Apples')
print(count)
basket.clear()
print(basket)

# 🌟 Exercise 4: Floats
a_list = []
for i in range(1,5):
    a_list.append(i)
    a_list.append(i+0.5)

print(a_list)

# 🌟 Exercise 5: For Loop
a_list = []

for i in range(1, 22):
    a_list.append(i)
    print(i)

for i in range(1, len(a_list)):
    if a_list[i] % 2 == 1:
        print(i)

#🌟 Exercise 7: Favorite fruits
your_favorite_fruits = input("What is your favorite fruits? Separate the fruits with a single space.\n").split()
name_of_fruit = input("Give me a name of any fruit\n")

if name_of_fruit in your_favorite_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
elif name_of_fruit not in your_favorite_fruits:
    print("You chose a new fruit. I hope you enjoy")