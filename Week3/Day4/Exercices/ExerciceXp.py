# 🌟 Exercise 1 – Random Sentence Generator
# Instructions

# 3. Create a function called get_words_from_file.
# This function should read the file’s content and return the words as a collection.
# What is the correct data type to store the words?
import os

def get_words_from_file():
    dir_path = os.path.dirname(os.path.realpath(__file__))
    # with open('C:\\Users\\avigd\\Desktop\\DI-Bootcamp\\Week3\\Day4\\Exercices\\word_list.txt', "r") as file:
    with open(dir_path + r"\word_list.txt", "r") as file:
        words = tuple(file.read().splitlines())
    return words

# print(get_words_from_file())
# As we will not modify the words collection, the correct data type to store the words is a tuple type.

# 4. Create another function called get_random_sentence which takes a single parameter called length. The length parameter will be used to determine how many words the sentence should have. The function should:
#     use the words list to get your random words.
#     the amount of words should be the value of the length parameter.
from random import randint

def get_random_sentence(length = 1):
    words = get_words_from_file()
    rand_words = []
    for _ in range(length):
        rand_words.append(words[randint(0, len(words))])
    return rand_words

# print(get_random_sentence(5))

# 5. Take the random words and create a sentence (using a python method), the sentence should be lower case.
def rand_sentence(length):
    return ' '.join(get_random_sentence(length)).lower()

# 6. Create a function called main which will:
#     a. Print a message explaining what the program does.

#     b. Ask the user how long they want the sentence to be. Acceptable values are: an integer between 2 and 20. Validate your data and test your validation!
#         If the user inputs incorrect data, print an error message and end the program.
#         If the user inputs correct data, run your code.
def main():
    print('This function give you a random sentence.')
    try:
        length = int(input("How long do you want the sentence to be? (between 2 and 20 pls)\n"))
        if length < 2 or length > 20:
            raise ValueError("This number is not betwenn 2 and 20")
        if type(length) != int:
            raise TypeError("This is not a number (pls insert an integer)")
    except ValueError:
        print("Try again :)")
        main()
    except TypeError:
        print("Well... Try again...")
        main()
    else:
        print(rand_sentence(length=length))

main()

# 🌟 Exercise 2: Working with JSON
# Instructions

#     Access the nested “salary” key from the JSON-string above.
#     Add a key called “birth_date” to the JSON-string at the same level as the “name” key.
#     Save the dictionary as JSON to a file.

import json
import os

# Init the json file "sample.json"
dir_path = os.path.dirname(os.path.realpath(__file__))
with open(dir_path + r"\sample.json", "w") as file:
    json.dump({}, file)

sampleJson = """{ 
    "company":{ 
        "employee":{ 
            "name":"emma",
            "payable":{ 
                "salary":7000,
                "bonus":800
            }
        }
    }
}"""

dict_data = json.loads(sampleJson)
print(dict_data["company"]["employee"]["payable"]["salary"])
dict_data["company"]["employee"]["birth_date"] = None
print(dict_data)

dir_path = os.path.dirname(os.path.realpath(__file__))
with open(dir_path + r"\sample.json", "w") as file:
    json.dump(dict_data, file)