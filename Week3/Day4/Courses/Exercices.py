# Exercise

# Create a colorize(text, color) function that contain this tuple colors = ('cyan', 'yellow', 'blue', 'green', 'magenta')
# If the color is not present in the tuple, raise a ValueError exception
# If the text is not a string raise a TypeError Exception
# make sure to catch the exception

def colorize(text, color):
    colors = ('cyan', 'yellow', 'blue', 'green', 'magenta')
    try:
        if color not in colors:
            raise ValueError("The color dont match with the list.")
        if type(text) != str:
            raise TypeError("You didn't insert a text")
    except ValueError as error:
        print(error)
        print("problem with the color")
    except TypeError as error:
        print(error)
        print("problem with the text")
    else:
        print("everything is ok")
    # return [text, color]

colorize('bip', 'blue')
colorize(5, 'blue')
colorize('bip', '5')
colorize(5, '5')
    
# example

# class Bank :

#     def __init__(self) :
#         self.current_amount = 10000

#     def withdraw(self, amount) :
#         try :
#             if amount > self.current_amount :
#                 # raise ValueError("You want to withdraw too much")
#                 raise Exception("You want to withdraw too much")
#             else :
#                 self.current_amount -= amount
#         except TypeError as error :
#             print("Wrong Data Type")
#         except Exception as error:
#             print("The error is ", error)


#     def __str__(self):
#         return f"The person has {self.current_amount} dollars left"

# b1 = Bank()
# b1.withdraw("hello")
# b1.withdraw(15000)
# print(b1)


# #raising an exception
# # raise Exception("a problem happened")
# # print("hello")