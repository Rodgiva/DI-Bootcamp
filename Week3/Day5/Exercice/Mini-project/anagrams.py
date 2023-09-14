from anagram_checker import AnagramChecker
import string

class UIAnagrams():
    @staticmethod
    def show_menu():
        print("\n**************************\n***ANAGRAM CHECKER MENU***\n**************************\n")
        user_in = None
        while True:
            try:
                user_in = input("Please insert your word (to exit the program, please insert 'exit')\n")
                if user_in == "exit":
                    break
                user_in = user_in.strip()
                if " " in user_in:
                    raise ValueError("More than one word found")
                elif not user_in.isalpha():
                    raise ValueError("More than one word found")
            except:
                print("\nPlease try again\n")
            else:
                anagram_checker = AnagramChecker("words.txt")
                anagrams = anagram_checker.get_anagrams(user_in)

                print(f"\nYOUR WORD: '{user_in}'")
                
                if anagram_checker.is_valid_word(user_in):
                    print("This is a valid English word.")
                    if len(anagrams) > 0:
                        print(f"Anagrams for your word: {', '.join(anagrams)}.\n")
                    else:
                        print(f"There is no anagram for your word.\n")
                else:
                    print("This is NOT a valid English word.\n")

UIAnagrams.show_menu()