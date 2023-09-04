# ******************* #
# Here I test the codes
# ******************* #

print("Hi and welcome to Greggo Pizza. You can say 'quit' exactly anytime if you want to stop.")
toppings = []
price_pizza = 10
price_topping = 2.5
while True:
    topping_to_add = input("What toppings do you want in your pizza?\n")
    if topping_to_add == "quit":
        break
    toppings.append(topping_to_add)
price_final = (len(toppings) * 2.5) + 10
toppings_str = ', '.join(toppings)
print(f"So, you ordered a pizza with {toppings_str}")
print(f"It will cost {price_final} dollars")