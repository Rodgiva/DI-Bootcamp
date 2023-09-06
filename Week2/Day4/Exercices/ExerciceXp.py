# Exercise 1 : What are you learning ?
# Instructions

#     Write a function called display_message() that prints one sentence telling everyone what you are learning in this course.
#     Call the function, and make sure the message displays correctly.

def display_message():
    msg = "In this course, we are learning python language. Especially the functions in python."
    return msg
print(display_message())

# 🌟 Exercise 2: What’s your favorite book ?
# Instructions

#     Write a function called favorite_book() that accepts one parameter called title.
#     The function should print a message, such as "One of my favorite books is <title>".
#     For example: “One of my favorite books is Alice in Wonderland”
#     Call the function, make sure to include a book title as an argument when calling the function.

def favorite_book(title):
    msg = f"One of my favorite books is {title}"
    return msg
asked_book = str(input("What is you favorite book?\n"))
print(favorite_book(asked_book))

# 🌟 Exercise 3 : Some Geography
# Instructions

#     Write a function called describe_city() that accepts the name of a city and its country as parameters.
#     The function should print a simple sentence, such as "<city> is in <country>".
#     For example “Reykjavik is in Iceland”
#     Give the country parameter a default value.
#     Call your function.

def describe_city(city, country="France"):
    msg = f"{city} is in {country}"
    return msg
print(describe_city("Lyon"))

# Exercise 4 : Random
# Instructions

#     Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100.
#     Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.

import random
def rand_nb_game(nb):
    print("bip")
    if not 0 < nb <= 100:
        return "Your number is not between 1 and 100, try again."
    else:
        rand = random.randint(1, 100)
        if nb == rand:
            return "Congratulations! You had one chance in 100 to succeed and you did it!"
        else:
            return f"Nope. You didn't make it. Your number was {nb} and de randomnumber was {rand}"
user_nb = int(input("Please choose a number between 1 and 100 only\n"))
print(rand_nb_game(user_nb))

# 🌟 Exercise 5 : Let’s create some personalized shirts !
# Instructions

#     Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
#     The function should print a sentence summarizing the size of the shirt and the message printed on it, such as "The size of the shirt is <size> and the text is <text>"
#     Call the function make_shirt().

#     Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
#     Make a large shirt with the default message
#     Make medium shirt with the default message
#     Make a shirt of any size with a different message.

#     Bonus: Call the function make_shirt() using keyword arguments.

def make_shirt(size, msg):
    print(f"The size of the shirt is {size} and the text is {msg}")
make_shirt(20, "blablabla")

def make_shirt(size="large", msg="I love Python"):
    print(f"The size of the shirt is {size} and the text is '{msg}'")
make_shirt(size="large")
make_shirt(size="medium")
make_shirt(size="small", msg="I am groot")

make_shirt("extra-large", "I've got a jar of dirt!")

# 🌟 Exercise 6 : Magicians …
# Instructions

# Using this list of magician’s names

# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

#     Create a function called show_magicians(), which prints the name of each magician in the list.
#     Write a function called make_great() that modifies the original list of magicians by adding the phrase "the Great" to each magician’s name.
#     Call the function make_great().
#     Call the function show_magicians() to see that the list has actually been modified.

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
def show_magicians():
    for magician in magician_names:
        print(magician)
show_magicians()

def make_great():
    for i in range(len(magician_names)):
        magician_names[i] += " the Great"
make_great()

show_magicians()

# 🌟 Exercise 7 : Temperature Advice
# Instructions

#     Create a function called get_random_temp().
#         This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
#         Test your function to make sure it generates expected results.

#     Create a function called main().
#         Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
#         Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”

#     Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
#         below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
#         between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
#         between 16 and 23
#         between 24 and 32
#         between 32 and 40

#     Change the get_random_temp() function:
#         Add a parameter to the function, named ‘season’.
#         Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits based on the season, eg. if season is ‘winter’, temperatures should only fall between -10 and 16.
#         Now that we’ve changed get_random_temp(), let’s change the main() function:
#             Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly. Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
#             Use the season as an argument when calling get_random_temp().

#     Bonus: Give the temperature as a floating-point number instead of an integer.
#     Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December). Determine the season according to the month.

#1.
import random
def get_random_temp():
    temp = random.randint(-10, 40)
    return temp
#2.
def main():
    temp = get_random_temp()
    print(f"Hi! The temperature right now is {temp} degrees Celsius.")

#3.
def main():
    temp = get_random_temp()
    msg = f"Hi! The temperature right now is {temp} degrees Celsius.\n"
    if temp < 0:
        msg += "Brrr, that’s freezing! Wear some extra layers today"
    elif 0 <= temp < 16:
        msg += "Quite chilly! Don’t forget your coat."
    elif 16 <= temp < 23:
        msg += "Good temperature."
    elif 23 <= temp < 32:
        msg += "Let's go to the beach!"
    elif 32 <= temp <= 40:
        msg += "I bake my self like a little potato :)"
    print(msg)

main()

#4.
import random
def get_random_temp(season):
    temp = 0
    if season == "winter":
        temp = random.randint(-10, 16)
    if season == "spring":
        temp = random.randint(16, 25)
    if season == "summer":
        temp = random.randint(25, 45)
    if season == "autumn":
        temp = random.randint(0, 25)
    return temp

def main():
    season = str(input("Type a season\n"))
    temp = get_random_temp(season)
    msg = f"Hi! The temperature right now is {temp} degrees Celsius.\n"
    if temp < 0:
        msg += "Brrr, that’s freezing! Wear some extra layers today"
    elif 0 <= temp < 16:
        msg += "Quite chilly! Don’t forget your coat."
    elif 16 <= temp < 23:
        msg += "Good temperature."
    elif 23 <= temp < 32:
        msg += "Let's go to the beach!"
    elif 32 <= temp <= 40:
        msg += "I bake my self like a little potato :)"
    print(msg)

main()

# 🌟 Exercise 5 : Star Wars Quiz
# Instructions

# This project allows users to take a quiz to test their Star Wars knowledge.
# The number of correct/incorrect answers are tracked and the user receives different messages depending on how well they did on the quiz.

# Here is an array of dictionaries, containing those questions and answers

# data = [
#     {
#         "question": "What is Baby Yoda's real name?",
#         "answer": "Grogu"
#     },
#     {
#         "question": "Where did Obi-Wan take Luke after his birth?",
#         "answer": "Tatooine"
#     },
#     {
#         "question": "What year did the first Star Wars movie come out?",
#         "answer": "1977"
#     },
#     {
#         "question": "Who built C-3PO?",
#         "answer": "Anakin Skywalker"
#     },
#     {
#         "question": "Anakin Skywalker grew up to be who?",
#         "answer": "Darth Vader"
#     },
#     {
#         "question": "What species is Chewbacca?",
#         "answer": "Wookiee"
#     }
# ]


#     Create a function that asks the questions to the user, and check his answers. Track the number of correct, incorrect answers. Create a list of wrong_answers
#     Create a function that informs the user of his number of correct/incorrect answers.
#     Bonus : display to the user the questions he answered wrong, his answer, and the correct answer.
#     If he had more then 3 wrong answers, ask him to play again.

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

wrong_answers = []
def starwarsquizz():
    correct = 0
    incorrect = 0
    for i in range(len(data)):
        user_answer = input(f"{data[i]['question']}\n")
        if user_answer == data[i]["answer"]:
            correct += 1
        else:
            incorrect += 1
            wrong_answers.append((i, user_answer))
        print("Noted.")
    quizz_correction(correct, incorrect)

def quizz_correction(correct, incorrect):
    print(f"Quizz is over! Let check you answers.\nYou did {correct} correct answers for {incorrect} incorrect answers")
    for i in range(len(wrong_answers)):
        print(f"In the question {data[i]['question']} you answered {wrong_answers[i][1]}, and the correct answer is {data[wrong_answers[i][0]]['answer']}")
    if incorrect > 3:
        print("Lets try again!")
        starwarsquizz()

starwarsquizz()