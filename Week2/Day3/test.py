items_purchase = {
  "Apple": "$4",
  "Honey": "$3",
  "Fan": "$14",
  "Bananas": "$4",
  "Pan": "$100",
  "Spoon": "$2"
}

wallet = int(input("How much do you have in your bank account?\n"))
list_items_affordable = []

for key, val in items_purchase.items():
    items_purchase[key] = int(val[1:])

for key, val in items_purchase.items():
    if val <= wallet:
        list_items_affordable.append(key)

if len(list_items_affordable) == 0:
    list_items_affordable.append("Nothing")

list_items_affordable.sort()
print(list_items_affordable)