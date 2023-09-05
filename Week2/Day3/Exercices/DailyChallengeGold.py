# Instructions

# In cryptography, a Caesar cipher is one of the simplest and most widely known encryption techniques.
# It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet.

# For example, with a left shift of 3 –> D would be replaced by A,
# –> E would become B, and so on.

# The method is named after Julius Caesar, who used it in his private correspondence.

# Create a python program that encrypts and decrypts messages with ceasar cypher.
# The user enters the program, and then the program asks him if he wants to encrypt or decrypt, and then execute encryption/decryption on a given message and a given shift.

# Check out this tutorial

# Hint:

# for letter in text:
#     cypher_text += chr(ord(letter) + 3)

def encrypts(msg):
    encripted_msg = ""
    for char in msg:
        shifted_char = chr(ord(char)+3)
        encripted_msg += shifted_char
    return encripted_msg

def decrypts(msg):
    decripted_msg = ""
    for char in msg:
        shifted_char = chr(ord(char)-3)
        decripted_msg += shifted_char
    return decripted_msg

user_msg = input("Please write your message\n")

choose = input("Do you want to encrypts or decrypts ? If you want to encrypts, write '1'. If you want to decrypts, write '2'\n")

if choose == "1":
    print(encrypts(user_msg))
elif choose == "2":
    print(decrypts(user_msg))
