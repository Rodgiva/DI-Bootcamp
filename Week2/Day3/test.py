def encrypts(msg):
    encripted_msg = ""
    for char in msg:
        shifted_char = chr(ord(char)+3)
        encripted_msg += shifted_char
    return encripted_msg

def decrypts(msg):
    decripted_msg = ""
    for char in msg:
        shifted_char = chr(ord(char)-3)
        decripted_msg += shifted_char
    return decripted_msg

user_msg = input("Please write your message\n")

choose = input("Do you want to encrypts or decrypts ? If you want to encrypts, write '1'. If you want to decrypts, write '2'\n")

if choose == "1":
    print(encrypts(user_msg))
elif choose == "2":
    print(decrypts(user_msg))
