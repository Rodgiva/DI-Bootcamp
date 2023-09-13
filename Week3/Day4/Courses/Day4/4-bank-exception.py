class Bank :

    def __init__(self) :
        self.current_amount = 10000

    def withdraw(self, amount) :
        try :
            if amount > self.current_amount :
                # raise ValueError("You want to withdraw too much")
                raise Exception("You want to withdraw too much")
            else :
                self.current_amount -= amount
        except TypeError as error :
            print("Wrong Data Type")
        except Exception as error:
            print("The error is ", error)


    def __str__(self):
        return f"The person has {self.current_amount} dollars left"

b1 = Bank()
b1.withdraw("hello")
b1.withdraw(15000)
print(b1)


#raising an exception
# raise Exception("a problem happened")
# print("hello")