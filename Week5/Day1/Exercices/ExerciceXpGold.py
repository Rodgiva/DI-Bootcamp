# Exercise 1:
# Instructions

# Write a Python function first_and_last that takes a list of integers as an input and returns the sum of the first and the last element of the list. Analyze the time complexity of your solution.

# Sample Function Signature

numbers = [1,2,3,4,5,6,7,8,9,10]

def first_and_last(numbers: list) -> int:
    return numbers[0] + numbers[-1]

print(first_and_last(numbers))


# Questions

#     What is the time complexity of your solution?
#       --> a constant O(1)
#     Can you think of a situation where the time complexity would change?
#       --> if we apply the sum of every number in the list, the time complexion would be linear O(n)

# --------------------------------------------

# Exercise 2:
# Instructions

# Write a Python function duplicates_count that takes a list of integers and returns the count of duplicate elements in the list. Analyze the time complexity of your solution.

# Sample Function Signature

numbers = [1,2,2,3,4,4,5,6,7,7,7,8,9,1,1,2,4]

def duplicates_count(numbers: list) -> int:
    checked = []
    duplicates = []
    for nb in numbers:
        if nb not in checked:
            checked.append(nb)
        elif nb not in duplicates:
            duplicates.append(nb)
    return len(duplicates)

print(duplicates_count(numbers))

# Questions

#     What is the time complexity of your solution?
#       --> linear O(n)
#     Can you optimize your solution to improve its time complexity?
#       --> there must be a way to use only one list, but we will use more operations to distinguish if the number is checked or duplicate

# --------------------------------------------

# Exercise 3:
# Instructions

# Write a Python function pair_sum_zero that takes a list of integers and returns a list of unique pairs (a, b) where a + b = 0. Analyze the time complexity of your solution.

# Sample Function Signature

numbers = [1,-2,2,-3,6,-1,-4,7,-8,7,-7,5,-5,5]

def pair_sum_zero(numbers: list) -> list:
    pairs = []
    for i in range(len(numbers)-2):
        for j in range(i+1, len(numbers)-1):
            if numbers[i] + numbers[j] == 0:
                pairs.append((numbers[i], numbers[j]))
    return pairs

print(pair_sum_zero(numbers))


# Questions

#     What is the time complexity of your solution?
#       --> quadratic O(n²)
#     Is it possible to improve the time complexity of this function? If yes, how?
#       --> maybe search each unique numbers and find their opposite directly


