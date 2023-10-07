numbers = [1,-2,2,-3,6,-1,-4,7,-8,7,-7,5,-5,5]

def pair_sum_zero(numbers: list) -> list:
    pairs = []
    count = 0
    for i in range(len(numbers)-2):
        count+=1
        for j in range(i+1, len(numbers)-1):
            if numbers[i] + numbers[j] == 0:
                pairs.append((numbers[i], numbers[j]))
            count+=1
    return count

print(pair_sum_zero(numbers))