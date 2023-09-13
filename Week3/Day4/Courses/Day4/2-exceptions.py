# def division (a, b) :
#     return a/b

# division(2,0)

# print("hello")

def division (a, b) :
    try :
        return a/b
    except :
        print("a problem occured")

division(2,0)

print("hello")

# -----------------
def division_other (a, b) :
    try :
        print("a", a)
        print("b", b)
        print("the division result is", a/b)
    except :
        print("a problem occured")
        new_a = int(input("give me another number"))
        new_b = int(input("give me another number"))
        division(new_a, new_b)

division_other(2,0)

print("hello")

#----- several excepts

def division_again (a, b) :
    try :
        print("a", a)
        print("b", b)
        print("the division result is", a/b)
    except ZeroDivisionError :
        print("a problem occured")
        # new_a = int(input("give me another number"))
        # new_b = int(input("give me another number"))
        # division(new_a, new_b)
    except Exception :
        print("big problem")
    else :
        print("congratulations") # OPTIONAL run only if no exceptions
    finally :
        print("finally") # OPTIONAL no matter what

division_again(2,0)