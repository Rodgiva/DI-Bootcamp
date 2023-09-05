# Challenge 1

#     Ask the user for a number and a length.
#     Create a program that prints a list of multiples of the number until the list length reaches length.

# Examples

# number: 7 - length 5 ➞ [7, 14, 21, 28, 35]

# number: 12 - length 10 ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

# number: 17 - length 6 ➞ [17, 34, 51, 68, 85, 102]


# Challenge 2

#     Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.

# Examples

# user's word : "ppoeemm" ➞ "poem"

# user's word : "wiiiinnnnd" ➞ "wind"

# user's word : "ttiiitllleeee" ➞ "title"

# user's word : "cccccaaarrrbbonnnnn" ➞ "carbon"

# Notes
# Final strings won’t include words with double letters (e.g. “passing”, “lottery”).

# Challenge 1
input_user = input("Give me a number and a length (separated with comma)\n")
input_user = input_user.split(",")
nb = int(input_user[0])
length = int(input_user[1])
list_res = []

# for i in range(1,length+1):
#     res = i * nb
#     list_res.append(res)

list_res = [i*nb for i in range(1,length+1)]

print(list_res)

# Challenge 2
word = input("Give me word, but write it like you were Porky Pig from the Looney Tunes\n")
i = 1
while True:
    if word[i] == word[i-1]:
        word = word[:i] + word[i+1:]
    else:
        i += 1
    if i == len(word):
        break
print(word)