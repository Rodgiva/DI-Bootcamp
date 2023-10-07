# Exercise 1: Counting Frequencies
# Problem Description

# Create a function that counts the frequency of each unique word in a given string and returns a dictionary. The keys will be the unique words and the values will be the counts of those words. The function should have a time complexity of (O(n)).

# Example


# Input: "apple orange apple banana orange apple"
# Output: {'apple': 3, 'orange': 2, 'banana': 1}


# Code Skeleton


# def word_frequency(input_str):
#     # Your code here

# input_str = "apple orange apple banana orange apple"
# result = word_frequency(input_str)
# print(result)

def word_frequency(input_str):
    words = input_str.split(" ")
    # O(n)
    a_dict = dict.fromkeys(words, 0)
    # O(n)
    for word in words:
        a_dict[word] += 1
    
    return a_dict

input_str = "apple orange apple banana orange apple"
result = word_frequency(input_str)
print(result)


# Exercise 2: Longest Substring Without Repeating Characters
# Problem Description

# You are given a string s. Your task is to find the length of the longest substring without repeating characters. A substring is a contiguous sequence of characters within a string.

# Write a function to accomplish this task with an efficient time complexity.


# Example


# Example 1:


# Input: s = "abcabcbb"
# Output: 3
# Explanation: The answer is "abc", with the length of 3.


# Example 2:


# Input: s = "bbbbb"
# Output: 1
# Explanation: The answer is "b", with the length of 1.


# Example 3:


# Input: s = "pwwkew"
# Output: 3
# Explanation: The answer is "wke", with the length of 3.


# Note: The answer must be a substring, not a subsequence. A subsequence is a sequence of characters that appear in the same order as they appear in the string, but not necessarily consecutively.


# Code Skeleton


# def longest_unique_substring(s):
#     # Your code here

# s = "abcabcbb"
# result = longest_unique_substring(s)
# print(result)
