def encrypts_decrypts(msg, opt):
    res_msg = ""
    to_inc = 0
    if opt == "1":
        to_inc = 3
    elif opt == "2":
        to_inc = -3

    for char in msg:
        shifted_char = chr(ord(char)+to_inc)
        res_msg += shifted_char
    return res_msg

user_msg = input("Please write your message\n")

choose = input("Do you want to encrypts or decrypts ? If you want to encrypts, write '1'. If you want to decrypts, write '2'\n")

print(encrypts_decrypts(user_msg, choose))