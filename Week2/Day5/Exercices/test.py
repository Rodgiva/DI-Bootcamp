users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
keys = [1,2,3,4,5,6]

disney_users_A_bis = []
disney_users_A_bis = [user for user in users if "i" in user]
print(dict(zip(disney_users_A_bis, keys)))