#conditionals
nb = int(input("Give me a number wetween 1 and 100 \n"))
if nb%3 == 0:
    print("Fizz")
elif nb%5 == 0:
    print("Buzz")
elif nb%3 == 0 and nb%5 == 0:
    print("FizzBuzz")