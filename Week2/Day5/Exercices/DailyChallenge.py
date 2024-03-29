# Challenge 1 : Sorting
# Instructions

#     Write a program that accepts a comma separated sequence of words as input and prints the words in a comma-separated sequence after sorting them alphabetically.
#     Use List Comprehension

# Example:

# Suppose the following input is supplied to the program: without,hello,bag,world
# Then, the output should be: bag,hello,without,world

# Challenge 1 : Sorting
# I didnt understand well the instructions
list_names = "Bob,Alex,Zilean,Martin,Marie-Chantal"
list_names = [name for name in sorted(list_names.split(','))]
print(list_names)

# Challenge 2 : Longest Word
# Instructions

#     Write a function that finds the longest word in a sentence. If two or more words are found, return the first longest word.
#     Characters such as apostrophe, comma, period count as part of the word (e.g. O’Connor is 8 characters long).

# Examples

# longest_word("Margaret's toy is a pretty doll.") ➞ "Margaret's"

# longest_word("A thing of beauty is a joy forever.") ➞ "forever."

# longest_word("Forgetfulness is by all means powerless!") ➞ "Forgetfulness"

def longest_word(sentence):
    words = sentence.split(" ")
    longest = ""
    for word in words:
        if len(word) > len(longest):
            longest = word
    return longest

sentence = "Wisdom is easily acquired when hiding under the bed with a saucepan on your head."
print(longest_word(sentence))

# CORRECTION
# Challenge 2   

def longest_word(sentence):
    words = sentence.split(" ")
    return max(words)

sentence = "Wisdom is easily acquired when hiding under the bed with a saucepan on your head."
print(longest_word(sentence))
