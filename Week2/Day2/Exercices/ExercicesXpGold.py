# Exercise 1: Concatenate lists
# Instructions

#     Write code that concatenates two lists together without using the + sign.


# Exercise 2: Range of numbers
# Instructions

#     Create a loop that goes from 1500 to 2500 and prints all multiples of 5 and 7.


# Exercise 3: Check the index
# Instructions

# Using this variable

# names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

#     Ask a user for their name, if their name is in the names list print out the index of the first occurence of the name.

#     Example: if input is 'Cortana' we should be printing the index 1


# Exercise 4: Greatest Number
# Instructions

#     Ask the user for 3 numbers and print the greatest number.

#     Test Data
#     Input the 1st number: 25
#     Input the 2nd number: 78
#     Input the 3rd number: 87

#     The greatest number is: 87


# Exercise 5: The Alphabet
# Instructions

#     Create a string of all the letters in the alphabet
#     Loop over each letter and print a message that contains the letter and whether its a vowel or a consonant.


# Exercise 6: Words and letters
# Instructions

#     Ask a user for 7 words, store them in a list named words.
#     Ask the user for a single character, store it in a variable called letter.
#     Loop through the words list and print the index of the first appearence of the letter variable in each word of the list.
#     If the letter doesn’t exist in one of the words, print a friendly message with the word and the letter.


# Exercise 7:
# Instructions

#     Create a list of numbers from one to one million and then use min() and max() to make sure your list actually starts at one and ends at one million. Use the sum() function to see how quickly Python can add a million numbers.


# Exercise 8 : List and Tuple
# Instructions

#     Write a program which accepts a sequence of comma-separated numbers. Generate a list and a tuple which contain every number.

# Suppose the following input is supplied to the program: 34,67,55,33,12,98

# Then, the output should be:

# ['34', '67', '55', '33', '12', '98']
# ('34', '67', '55', '33', '12', '98')


# Exercise 9 : Random number
# Instructions

#     Ask the user to input a number from 1 to 9 (including).
#     Get a random number between 1 and 9. Hint: random module.
#     If the user guesses the correct number print a message that says Winner.
#     If the user guesses the wrong number print a message that says better luck next time.
#     Bonus: use a loop that allows the user to keep guessing until they want to quit.
#     Bonus 2: on exiting the loop tally up and display total games won and lost.


# Exercise 1: Concatenate lists
list1 = ["A", "B", "C"]
list2 = ["D", "E", "F"]
list3 = []
length = len(list1) + len(list2)

for i in list1:
    list3.append(i)

for j in list2:
    list3.append(j)

# print(''.join(list3))

# Exercise 2: Range of numbers
for nb in range(1500, 2500):
    if nb % 5 == 0 or nb % 7 == 0:
        print(nb)

# Exercise 3: Check the index
names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
name = input("What is your name ?\n")

for index_names in range(len(names)):
    if name == names[index_names]:
        print(index_names)
        break

# Exercise 4: Greatest Number
nb = []
for i in range(3):
    user_nb = int(input("Give me a number\n"))
    nb.append(user_nb)
greatest = max(nb)
print(f"The greatest number is {greatest}")

# Exercise 5: The Alphabet
alphabet_list = []
alphabet_str = ""
for i in range(65, 91):
    alphabet_list.append(chr(i))
alphabet_str = ''.join(alphabet_list)

vowel = ["A", "E", "I", "O", "U", "Y"]
for i in range(65, 91):
    character = chr(i)
    if character in vowel:
        msg = " is a vowel"
    else:
        msg = " is a consonant"
    print(f"{character}{msg}")

# Exercise 6: Words and letters
words = []
for i in range(7):
    word_input = input("Give me a word\n")
    words.append(word_input)
letter = input("Ok, now give me a letter\n")

for i in range(len(words)):
    if letter in words[i]:
        print(i)
    else:
        print("Hello friend! Unfortunatly we couldn't find...")

# Exercise 7:
a_list = []
for i in range(1000000):
    a_list.append(i)
print(sum(a_list))

# Exercise 8 : List and Tuple
an_input = "34,67,55,33,12,98"
a_list = an_input.split(",")
a_tuple = tuple(a_list)
print(a_tuple)
print(a_list)

# Exercise 9 : Random number
import random
nb = int(input("Give me a number between 1 and 9\n"))
rand_nb = random.randint(1,9)
if nb == rand_nb:
    print("Winner!")
else:
    print("Better luck next time... Looooooooser!")
#*************************************************
rand_nb = random.randint(1,9)
win = 0
lose = 0
while True:
    nb = input("Give me a number between 1 and 9. You can 'quit' anytime if you want\n")
    if nb == "quit":
        print("You abandon the game.")
        break
    elif int(nb) == rand_nb:
        print("Winner!")
        print("The random number has changed.")
        rand_nb = random.randint(1,9)
        win += 1
    else:
        print("Nope. Try again.")
        lose += 1

print(f"Win: {win}\nLose: {lose}")
#*************************************************
#HARDER
rand_nb2 = random.randint(1,9)
win = 0
lose = 0
while True:
    nb2 = input("Give me a number between 1 and 9. You can 'quit' anytime if you want\n")
    if nb2 == "quit":
        print("You abandon the game.")
        break
    elif int(nb2) == rand_nb2:
        print("Winner!")
        win += 1
    else:
        print("Nope. Try again.")
        lose += 1
    print("The random number has changed.")

print(f"Win: {win}\nLose: {lose}")