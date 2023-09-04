# ******************* #
# Here I test the codes
# ******************* #

# test = "PATATE"
# test = test[:1] + test[2:]
# print(test)

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