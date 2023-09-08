# Instructions

#     The computer choose a random word and mark stars for each letter of each word.
#     Then the player will guess a letter.
#         If that letter is in the word(s) then the computer fills the letter in all the correct positions of the word.
#         If the letter isn’t in the word(s) then add a body part to the gallows (head, body, left arm, right arm, left leg, right leg).
#         The player will continue guessing letters until they can either solve the word(s) (or phrase) or all six body parts are on the gallows.
#         The player can’t guess the same letter twice.


# Starter code

# Here is a piece of code that will give you a random word.

#head, body, left arm, right arm, left leg, right leg


# "   O "
# "   | "
# "  /| "
# "  /|\\"
# "  /  "
# "  / \\"

# "   O "
# "  /|\\"
# "  / \\"


import random

wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
letters_already_guessed = []

def display(word, hp):
    head = "   O \n"
    body = head + "   | \n"
    left_arm = head + "  /| \n"
    right_arm = head + "  /|\\\n"
    left_leg = right_arm + "  /  \n"
    right_leg = right_arm + "  / \\\n"
    hanged = [right_leg, left_leg, right_arm, left_arm, body, head, ""]

    print(hanged[hp])
    print(word)

def player_input():
    player_letter = input("Guess a letter\n")
    if player_letter not in letters_already_guessed:
        letters_already_guessed.append(player_letter)
        return player_letter
    else:
        print("This letter is already guessed, try with another one.")
        player_input()
        
def find_letters(word, discovering_word, letter):
    for char in word:
        if char == letter:
            # ajouter la/les lettres(s) dans discovering word
        # sinon hp - 1

def game():
    print("Hi and welcome to the hunge.. I mean Hangman Game!")
    word = random.choice(wordslist)
    discovering_word = ''.join(["_ " for i in range(len(word))])
    while True:
        player_letter = player_input()
        discovering_word = find_letters(word, discovering_word, player_letter)
    hp = 0
    display(word, hp)

game()