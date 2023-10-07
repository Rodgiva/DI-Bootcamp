numbers = [5, 2, 9, 1, 5, 6]

def insertion_sort(numbers: list) -> None:
   for i in range(1, len(numbers)):
      value = numbers[i]
      j = i - 1
      while value < numbers[j] and j >= 0:
         numbers[j + 1] = numbers[j]
         j -= 1
      numbers[j + 1] = value


insertion_sort(numbers) # sorts the numbers list
print(numbers) # check that the sorting is successfull