# 🌟 Exercise 1 : Convert lists into dictionaries
# Instructions

#     Convert the two following lists, into dictionaries.
#     Hint: Use the zip method

# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]

# Expected output:
# {'Ten': 10, 'Twenty': 20, 'Thirty': 30}


# 🌟 Exercise 2 : Cinemax
# Instructions

#     A movie theater charges different ticket prices depending on a person’s age.
#         if a person is under the age of 3, the ticket is free.
#         if they are between 3 and 12, the ticket is $10.
#         if they are over the age of 12, the ticket is $15.

#     Given the following object:

#     family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}


#     How much does each family member have to pay ?
#     Print out the family’s total cost for the movies.
#     Bonus: Ask the user to input the names and ages instead of using the provided family variable (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).


# 🌟 Exercise 3: Zara
# Instructions

#     Here is some information about a brand.

#     name: Zara 
#     creation_date: 1975 
#     creator_name: Amancio Ortega Gaona 
#     type_of_clothes: men, women, children, home 
#     international_competitors: Gap, H&M, Benetton 
#     number_stores: 7000 
#     major_color: 
#         France: blue, 
#         Spain: red, 
#         US: pink, green



#     2. Create a dictionary called brand which value is the information from part one (turn the info into keys and values).
#     The values type_of_clothes and international_competitors should be a list. The value of major_color should be a dictionary.
#     3. Change the number of stores to 2.
#     4. Print a sentence that explains who Zaras clients are.
#     5. Add a key called country_creation with a value of Spain.
#     6. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
#     7. Delete the information about the date of creation.
#     8. Print the last international competitor.
#     9. Print the major clothes colors in the US.
#     10. Print the amount of key value pairs (ie. length of the dictionary).
#     11. Print the keys of the dictionary.
#     12. Create another dictionary called more_on_zara with the following details:

#     creation_date: 1975 
#     number_stores: 10 000



#     13. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.
#     14. Print the value of the key number_stores. What just happened ?


# Exercise 4 : Disney characters
# Instructions

# Use this list :

# users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

# Analyse these results :

# #1/

# >>> print(disney_users_A)
# {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}

# #2/

# >>> print(disney_users_B)
# {0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}

# #3/ 

# >>> print(disney_users_C)
# {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}


#     Use a for loop to recreate the 1st result. Tip : don’t hardcode the numbers.
#     Use a for loop to recreate the 2nd result. Tip : don’t hardcode the numbers.
#     Use a method to recreate the 3rd result. Hint: The 3rd result is sorted alphabetically.
#     Only recreate the 1st result for:
#         The characters, which names contain the letter “i”.
#         The characters, which names start with the letter “m” or “p”.


# 🌟 Exercise 1 : Convert lists into dictionaries
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

dict_converted = zip(keys, values)
print(dict_converted)

# 🌟 Exercise 2 : Cinemax
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

total_cost = 0
for age in family.values():
    if 3 < age < 12:
        total_cost += 10
    elif age > 12:
        total_cost += 15
print(total_cost)

#bonus

# 🌟 Exercise 3: Zara
brand = {
    "name": "Zara", 
    "creation_date": "1975", 
    "creator_name": "Amancio Ortega Gaona", 
    "type_of_clothes": ["men", "women", "children", "home"], 
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000, 
    "major_color": {
        "France": "blue", 
        "Spain": "red", 
        "US": ["pink", "green"]}
}

brand["number_stores"] = 2
countries = ""
for country in brand["major_color"].keys():
    countries += ", " + country

type_clothes = ""
for cloth in brand["type_of_clothes"]:
    type_clothes += ", " +cloth

print(f"Clients of Zara are from{countries}. They also buys cloths for every{type_clothes}")

brand["country_creation"] = "Spain"

if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

del brand["creation_date"]

last_international_competitor = brand["international_competitors"][-1]
print(last_international_competitor)

US_major_clothes_colors = ' and '.join(brand["major_color"]["US"])
print(US_major_clothes_colors)

count = 0
for i in brand:
    count += 1
print(f"The amount of key value pairs: {count}")

brand_keys = ""
for key in brand.keys():
    brand_keys += key + " "
print(brand_keys)

more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

for key, value in more_on_zara.items():
    brand[key] = value
print(brand["number_stores"])
# The value was overwrited

# Exercise 4 : Disney characters
users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

disney_users_A = {}
for i in range(len(users)):
    disney_users_A[users[i]] = i
print(disney_users_A) 

disney_users_B= {}
for i in range(len(users)):
    disney_users_B[i] = users[i]
print(disney_users_B)

disney_users_C = {}
a_list = sorted(disney_users_A)
for i in range(len(a_list)):
    disney_users_C[a_list[i]] = i
print(disney_users_C)

disney_users_A_bis = {}
for i in range(len(users)):
    if "i" in users[i]:
        disney_users_A_bis[users[i]] = i
print(disney_users_A_bis)

disney_users_A_bis2 = {}
for i in range(len(users)):
    if "o" in users[i] or "p" in users[i]:
        disney_users_A_bis2[users[i]] = i
print(disney_users_A_bis2)

# CORRECTION

# 🌟 Exercise 1 : Convert lists into dictionaries
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

dict_converted = dict(zip(keys, values))
print(dict_converted)

# 🌟 Exercise 3: Zara
brand = {
    "name": "Zara", 
    "creation_date": "1975", 
    "creator_name": "Amancio Ortega Gaona", 
    "type_of_clothes": ["men", "women", "children", "home"], 
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000, 
    "major_color": {
        "France": "blue", 
        "Spain": "red", 
        "US": ["pink", "green"]}
}

brand["number_stores"] = 2
countries = ""
for country in brand["major_color"].keys():
    countries += ", " + country

type_clothes = ""
for cloth in brand["type_of_clothes"]:
    type_clothes += ", " +cloth

print(f"Clients of Zara are from{countries}. They also buys cloths for every{type_clothes}")

brand["country_creation"] = "Spain"

if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

del brand["creation_date"]

last_international_competitor = brand["international_competitors"][-1]
print(last_international_competitor)

US_major_clothes_colors = ' and '.join(brand["major_color"]["US"])
print(US_major_clothes_colors)

count = len(brand)
print(f"The amount of key value pairs: {count}")

brand_keys = ""
for key in brand.keys():
    brand_keys += key + " "
print(brand_keys)

more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

for key, value in more_on_zara.items():
    brand[key] = value
print(brand["number_stores"])
# The value was overwrited

# Exercise 4 : Disney characters
users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
keys = [1,2,3,4,5,6]

#1.
disney_users_A = []
disney_users_A = [user for user in users]
print(dict(zip(disney_users_A, keys))) 

#2.
disney_users_B = []
disney_users_B = [user for user in users]
print(dict(zip(keys, disney_users_B))) 

#3.
disney_users_C = []
disney_users_C = [user for user in sorted(users)]
print(dict(zip(disney_users_C, keys))) 

#4.1.
disney_users_A_bis = []
disney_users_A_bis = [user for user in users if "i" in user]
print(dict(zip(disney_users_A_bis, keys)))

#4.2.
disney_users_A_bis2 = []
disney_users_A_bis2 = [user for user in users if "o" in user or "p" in user]
print(dict(zip(disney_users_A_bis2, keys)))