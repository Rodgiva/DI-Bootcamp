# 🌟 Exercise 1: Currencies
# Instructions

# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount

#     #Your code starts HERE


#     Using the code above, implement the relevant methods and dunder methods which will output the results below.
#     Hint : When adding 2 currencies which don’t share the same label you should raise an error.

# >>> c1 = Currency('dollar', 5)
# >>> c2 = Currency('dollar', 10)
# >>> c3 = Currency('shekel', 1)
# >>> c4 = Currency('shekel', 10)

# >>> str(c1)
# '5 dollars'

# >>> int(c1)
# 5

# >>> repr(c1)
# '5 dollars'

# >>> c1 + 5
# 10

# >>> c1 + c2
# 15

# >>> c1 
# 5 dollars

# >>> c1 += 5
# >>> c1
# 10 dollars

# >>> c1 += c2
# >>> c1
# 20 dollars

# >>> c1 + c3
# TypeError: Cannot add between Currency type <dollar> and <shekel>

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        msg = f"{self.amount} {self.currency}"
        print(msg)
        return msg
    
    def __int__(self):
        print(self.amount)
        return self.amount
    
    def __repr__(self):
        msg = f"{self.amount} {self.currency}"
        print(msg)
        return msg
    
    def __add__(self, other):
        if type(other) == int:
            print(self.amount + other)
            return self.amount + other
        elif type(other) == Currency:
            if self.currency == other.currency:
                print(self.amount + other.amount)
                return self.amount + other.amount
            else:
                raise TypeError(f"Cannot add between Currency type {self.currency} and {other.currency}") 

    def __call__(self):
        print(f"{self.currency} {self.amount}")

    def __iadd__(self, other):
        if type(other) == int:
            self.amount += other
        elif type(other) == Currency:
            self.amount += other.amount
        return self

c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

str(c1)
int(c1)
repr(c1)
c1 + 5
c1 + c2
c1()
c1 += 5
c1()
c1 += c2
c1()
c1 + c3

# 🌟 Exercise 3: Random Module
# Instructions

#     Create a function that accepts a number between 1 and 100, then rolls a random number between 1 and 100,
#         if it’s the same number, display a success message to the user, else don’t.

from random import randint

def between1_100(nb):
    if 0 <= nb <= 100:
        secret_nb = randint(0, 100)
        if secret_nb == nb:
            print("Success!")
        else:
            print("...")
between1_100(42)

# 🌟 Exercise 4: String module
# Instructions

#     Generate random String of length 5
#     Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
#     Hint: use the string module

import string
from random import randint

def randStrLen5():
    ascii_letters = string.ascii_letters
    rand_str = ""
    for _ in range(5):
        rand_str += ascii_letters[randint(0, len(ascii_letters)-1)]
    print(rand_str)

randStrLen5()

# 🌟 Exercise 5 : Current Date
# Instructions

#     Create a function that displays the current date.
#     Hint : Use the datetime module.

from datetime import datetime

def now():
    now = datetime.now()
    print(f"Today is {now.day}/{now.month}{now.year}")

# Exercise 6 : Amount of time left until January 1st
# Instructions

#     Create a function that displays the amount of time left from now until January 1st.
#     (Example: the 1st of January is in 10 days and 10:34:01hours).

import datetime

def timeUntil1stJanuary():
    now = datetime.datetime.now()
    time1 = datetime.datetime(2024,1,1,0,0,0,0)
    timeLeft = (now - time1)*-1
    print(f"The 1st of January is in {timeLeft.days} days and {datetime.timedelta(seconds=timeLeft.seconds)}")

timeUntil1stJanuary()

# Exercise 7 : Birthday and minutes
# Instructions

#     Create a function that accepts a birthdate as an argument (in the format of your choice), then displays a message stating how many minutes the user lived in his life.

import datetime

def timeLiving(bd):
    bd_list = bd.split("/")
    bd = datetime.datetime(int(bd_list[2]), int(bd_list[1]), int(bd_list[0]))
    now = datetime.datetime.now()
    minutes_lived = (now - bd).days * 24 * 60
    print(f"You lived {minutes_lived} minutes")

timeLiving("20/08/1992")

# Exercise 8 : Faker Module
# Instructions

#     Install the faker module, and take a look at the documentation and learn how to properly implement faker in your code.
#     Create an empty list called users. Tip: It should be a list of dictionaries.
#     Create a function that adds new dictionaries to the users list. Each user has the following keys: name, adress, langage_code. Use faker to populate them with fake data.

from faker import Faker
from faker.providers import DynamicProvider

code_languages_provider = DynamicProvider(
    provider_name="code_languages",
    elements=["python", "php", "c#", "c++", "perl", "VB", "java", "javascript", "ruby", "assembly", "pascal"],
)

fake = Faker()
fake.add_provider(code_languages_provider)
users = []

def addUsersInList():
    for _ in range(10):
        a_dict = {"name": fake.name(), "adress": fake.address(), "langage_code": fake.code_languages()}
        users.append(a_dict)
        print(a_dict)
        
addUsersInList()