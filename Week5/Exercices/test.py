numbers = [5, 2, 9, 1, 5, 6]

def insertion_sort(numbers: list):
    for i in range(1, len(numbers)):
        for j in range(0, i):
            if numbers[i] < numbers[j]:
                temp = numbers[j]
                numbers[j] = numbers[i]
                numbers[i] = temp
    return numbers

# print(insertion_sort(numbers))


numbers = [1, 3, 5, 7, 9, 11]

def binary_search(numbers: list, value: int):
    # I can also use the function median() from the statistics library to find the mid value

    if value not in numbers:
        return "The value is not in the number list"

    numbers = insertion_sort(numbers)
    
    min_index = 0
    max_index = len(numbers)-1
    mid_index = int((max_index - min_index)/2) + min_index

    mid_val = numbers[mid_index]

    while mid_val != value:
        if value > mid_val:
            min_index = mid_index
            mid_index = int((max_index - min_index)/2) + min_index

            mid_val = numbers[mid_index]
        if value < mid_val:
            max_index = mid_index
            mid_index = int((max_index - min_index)/2) + min_index

            mid_val = numbers[mid_index]
    
    return mid_index

print(binary_search(numbers, 7))