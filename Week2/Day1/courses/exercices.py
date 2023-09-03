#exercice1
asked_miles = float(input("Give me a NUMBER (ONLY) in miles, I will convert it to you in km \n"))
miles_in_km = asked_miles * 1.60934
print(miles_in_km)

#exercice2
name = 'John Doe'
if len(name) > 20:
    print(f"Name '{name}' is more than 20 chars long")
    length_description = 'long'
elif len(name) > 15:
    print(f"Name '{name}' is more than 15 chars long")
    length_description = 'semi long'
elif len(name) > 10:
    print(f"Name '{name}' is more than 10 chars long")
    length_description = 'semi long'
elif 10 >= len(name) >= 8:
    print(f"Name '{name}' is 8, 9 or 10 chars long")
    length_description = 'semi short'
else:
    print(f"Name '{name}' is a short name")
    length_description = 'short'


#Exercise 3
asked_number_people = int(input("What is the number of people attending their wedding and prints the corresponding price? \n"))
price = 0
if asked_number_people <= 50:
    price = 4000
elif asked_number_people <= 100:
    price = 10000
elif asked_number_people <= 200:
    price = 15000
elif asked_number_people > 200:
    price = 20000
print(f"The wedding will cost '{price}' dollars")

