list1 = [5, 10, 15, 20, 25, 50, 20]

# for i in range(len(list1)):
#     if list1[i] == 20:
#         list1[i] = 200

first_index = list1.index(20)
list1[first_index] = 200
print(list1)

#********************************

# a_tuple = (10, 20, 30, 40)
# variables = ["a", "b", "c", "d"]
# for i in range(4):
#     globals()[variables[i]] = a_tuple[i]

# print(a)
# print(b)
# print(c)
# print(d)

a_tuple = (10, 20, 30, 40)
a, b, c, d = a_tuple

print(a)
print(b)
print(c)
print(d)

#********************************

words = ["AAA", "BBB", "ccc", "DdD", "123", "eee", "fFf", "GGG"]
words2 = []
for i in words:
    if i.isupper():
        words2.append(i)
print(words2)

#********************************
bank_amount = 10000
computer_price = 2000
computer_count = 0

while bank_amount > 0:
    bank_amount -= computer_price
    computer_count += 1
print(computer_count)