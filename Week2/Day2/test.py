# ******************* #
# Here I test the codes
# ******************* #
input_user = input("Give me a number and a length (separated with comma)\n")
input_user = input_user.split(",")
nb = int(input_user[0])
length = int(input_user[1])
list_res = []

# for i in range(1,length+1):
#     res = i * nb
#     list_res.append(res)

list_res = [i*nb for i in range(1,length+1)]
print(list_res)
