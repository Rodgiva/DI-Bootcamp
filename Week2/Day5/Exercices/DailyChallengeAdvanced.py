import random

def guess_couples_numbers(numbers, target):
    founded = 0
    for i in range(len(numbers)):
        for j in range(i,len(numbers)):
            guess = numbers[i] + numbers[j]
            if guess == target:
                founded += 1

    return founded

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
target_number = 3728

print(guess_couples_numbers(numbers = list_of_numbers, target = target_number))