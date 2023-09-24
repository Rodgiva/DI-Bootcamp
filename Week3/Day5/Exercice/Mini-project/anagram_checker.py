import os
import enchant

class AnagramChecker:
    def __init__(self, filename):
        dir_path = os.path.dirname(os.path.realpath(__file__))
        with open(dir_path + fr"\{filename}", "r") as file:
            words = tuple(file.read().splitlines())
        self.words_list = words

    def is_valid_word(self, word):
        d = enchant.Dict("en_US")
        return d.check(word)
    
    def get_anagrams(self, word):
        anagrams_list = []
        for list_word in self.words_list:
            if self.is_anagram(word, list_word):
                anagrams_list.append(list_word.lower())
        return anagrams_list

    def is_anagram(self, word1, word2):
        if word1.lower() != word2.lower():
            return sorted(word1.lower()) == sorted(word2.lower())
        else:
            return False

# test = AnagramChecker("words.txt")
# print(test.is_valid_word("test"))
# print(test.get_anagrams('test'))