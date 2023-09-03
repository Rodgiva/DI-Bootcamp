    # 1. Using the input function, ask the user for a string. The string must be 10 characters long.
    #     If it’s less than 10 characters, print a message which states “string not long enough”.
    #     If it’s more than 10 characters, print a message which states “string too long”.
    #     If it’s 10 characters, print a message which states “perfect string” and continue the exercise.

    # 2. Then, print the first and last characters of the given text.

    # 3. Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed. For example:

    # The user enters "HelloWorld"
    # Then, you have to construct the string character by character
    # H
    # He
    # Hel
    # ... etc
    # HelloWorld



    # 4. Bonus: Swap some characters around then print the newly jumbled string (hint: look into the shuffle method). For example:

    # Hlrolelwod

text = input("Give me a string, it must be 10 characters long\n")
length_text = len(text)
if length_text > 10:
    print("I said 10 characters long, yours is too long")
elif length_text < 10:
    print("I said 10 characters long, yours is not long enough")
elif length_text == 10:
    print("PERFECT. Thanks.")

print(f"The first character is {text[0]}")
print(f"The last character is {text[-1]}")

looped_text = ""
for i in text:
    looped_text += i
    print(looped_text)


# BONUS
import random
text_list = list(text)
random.shuffle(text_list)
text_shuffled = ''.join(text_list)
print(text_shuffled)