# Instructions :

# The goal of the exercise is to create a class that will help you analyze a specific text. A text can be just a simple string, like “Today, is a happy day” or it can be an external text file.

# Part I

# First, we will analyze a simple string, like “A good book would sometimes cost as much as a good house.”

#     Create a class called Text that takes a string as an argument and store the text in a attribute.
#     Hint: You need to manually copy-paste the text, straight into the code

#     Implement the following methods:
#         a method to return the frequency of a word in the text (assume words are separated by whitespace) return None or a meaningful message.
#         a method that returns the most common word in the text.
#         a method that returns a list of all the unique words in the text.


# Part II

# Then, we will analyze a text coming from an external text file. Download the_stranger.txt file.

#     Implement a classmethod that returns a Text instance but with a text file:

#         >>> Text.from_file('the_stranger.txt')

#     Hint: You need to open and read the text from the text file.

#     Now, use the provided the_stranger.txt file and try using the class you created above.


# Bonus:

#     Create a class called TextModification that inherits from Text.

#     Implement the following methods:
#         a method that returns the text without any punctuation.
#         a method that returns the text without any english stop-words (check out what this is !!).
#         a method that returns the text without any special characters.

# Note: Feel free to implement/create any attribute, method or function needed to make this work, be creative :)

import os

class Text():
    text = "A good book would sometimes cost as much as a good house."

    def __init__(self, text):
        Text.text = text
        self.text = text
    
    @staticmethod
    def freq_word(word):
        text_list = Text.text.lower().split(" ")
        print(text_list.count(word))
        return text_list.count(word)
    
    @staticmethod
    def most_common_word():
        text_list = Text.text.lower().split(" ")
        word_res = max(set(text_list), key=text_list.count)
        print(f"The most common word is {word_res}")
        return(word_res)
    
    @staticmethod
    def unique_words():
        text_list = Text.text.lower().split(" ")
        words = set(text_list)
        print(list(words))
        print(list(words))

    @classmethod
    def from_file(cls, file_name):
        dir_path = os.path.dirname(os.path.realpath(__file__))
        with open(dir_path + "\\" + file_name, "r") as file:
            file_text = file.read()
            return cls(file_text)


# Text.freq_word("a")
# Text.most_common_word()
# Text.unique_words()
# a_text = Text.from_file("the_stranger.txt")
# a_text.unique_words()

import string
import re

class TextModification(Text):
    def __init__(self, text):
        super().__init__(text)

    def remove_punct(self):
        a_text = self.text
        for punc in string.punctuation:
            a_text = a_text.replace(punc, "")
        return(a_text)
    
    # I found a list of stop-words here: stop_words.txt
    # https://github.com/igorbrigadir/stopwords/blob/master/en/terrier.txt
    # Or here: stop_words2.txt
    # https://gist.github.com/sebleier/554280
    # It seems to work
    def remove_stop_words(self):
        a_text = self.text

        dir_path = os.path.dirname(os.path.realpath(__file__))
        with open(dir_path + r"\stop_words.txt", "r") as file:
            stop_words_list = file.read().splitlines()
            
        for stop_word in stop_words_list:
            a_text = re.sub(fr'\b{stop_word}\b', "", a_text)
        return a_text
    
    # I don't know the difference between the punctuation characters and the special characters
    def remove_spec_char(self):
        pass
        

txt_modif = TextModification.from_file("the_stranger.txt")
# print(txt_modif.text)
# print(txt_modif.remove_punct())
# print(txt_modif.remove_stop_words())