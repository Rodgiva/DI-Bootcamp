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