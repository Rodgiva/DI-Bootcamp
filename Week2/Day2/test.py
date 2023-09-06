# ******************* #
# Here I test the codes
# ******************* #
your_favorite_fruits = input("What is your favorite fruits? Separate the fruits with a single space.\n").split()
name_of_fruit = input("Give me a name of any fruit\n")

if name_of_fruit in your_favorite_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
elif name_of_fruit not in your_favorite_fruits:
    print("You chose a new fruit. I hope you enjoy")