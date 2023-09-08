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

"____ "
"|/ O "
"| /|\\"
"| / \\"
"|____ "



import random

wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
letters_already_guessed = []
alphabet_ascii_index = [i for i in range(97, 123)]


def display(hp):
    head = "   O \n"
    body = head + "   | \n"
    left_arm = head + "  /| \n"
    right_arm = head + "  /|\\\n"
    left_leg = right_arm + "  /  \n"
    right_leg = right_arm + "  / \\\n"
    hanged = [right_leg, left_leg, right_arm, left_arm, body, head, ""]

    print(hanged[hp])

def player_input():
    player_letter = input("Guess a letter: ")
    if ord(player_letter) not in alphabet_ascii_index :
        print("Please type a letter, and not something else")
        player_input()
    elif player_letter in letters_already_guessed:
        print("This letter is already guessed, try with another one.")
        player_input()
    else:
        letters_already_guessed.append(player_letter)
        return player_letter
        
def check_letters(word, letter, word_hidden):
    word_hidden_res = word_hidden
    for i in range(len(word)):
        if word[i] == letter:
            word_hidden_list = list(word_hidden_res)
            word_hidden_list[i] = letter
            word_hidden_res = "".join(word_hidden_list)

    if word_hidden != word_hidden_res:
        return[0, word_hidden_res]
    else:
        return [-1, word_hidden]

def game():
    print("Hi and welcome to the Hangman Game!")
    word = random.choice(wordslist)
    word_hidden = ''.join(["_" for i in range(len(word))])
    hp = 6
    while True:
        print(word_hidden)
        player_letter = player_input()
        check_letters_res = check_letters(word = word, letter = player_letter, word_hidden = word_hidden)
        hp += check_letters_res[0]
        word_hidden = check_letters_res[1]
        display(hp)
        if hp == 0:
            print(f"Game Over\nThe word was {word}")
            break
        elif word_hidden == word:
            print("Congratulations, you win!")
            break

game()