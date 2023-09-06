# Exercise
# 1. create a function that takes a number as an argument, and check if this number is even or odd
# 2. create a function that takes a list of numbers as an argument, and check if each number is even or odd

# Exercice 1
def oddoreven(nb):
    res = f"The number {nb} is "
    if nb % 2 == 0:
        res += "even"
    else:
        res += "odd"
    return res
msg1 = oddoreven(5)
msg2 = oddoreven(8)

print(msg1)
print(msg2)

# Exercice 2
def oddorevenList(list_nb):
    list_oddeven = []
    for nb in list_nb:
        if nb % 2 == 0:
            list_oddeven.append("even")
        else:
            list_oddeven.append("odd")
    return list_oddeven

a_list = [2,3,5,6,8,9,14,21,35]
print(oddorevenList(a_list))

#*******************************

# 1st function - get_price_car
# receive the age of the user 
# and if the user is > 40
#     --> 200
# if the user is < 40
#     --> 300

# 2nd function - get_price_flight
# receive a destination from the user
# if the destinatation is Paris
#     --> 400
# if the destinatation is Paris
#     --> 600

# 3rd function
# is going to use the result from the 2 functions above
# and inform the user of the total price of the vacation

def get_price_car(age):
    price = 0
    if age > 40:
        price = 200
    else:
        price = 300
    return price

def get_price_flight(destination):
    price = 0
    if destination == "Paris":
        price = 400
    else:
        price = 600
    return price

def info_price(age, destination):
    total_price = get_price_car(age) + get_price_flight(destination)
    msg = f"Your vacations will cost you {total_price} dollars"
    return msg

print(info_price(45, "Paris"))
print(info_price(42, "Istambul"))
print(info_price(31, "Paris"))
print(info_price(34, "Lyon"))
