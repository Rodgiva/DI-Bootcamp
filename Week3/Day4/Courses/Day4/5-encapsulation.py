class Bank :

    def __init__(self, customer) :
        self.__current_amount = 10000
        self.customer = customer
    
    # getter
    # return the value of the attribute
    @property
    def current_amount(self) :
        return self.__current_amount

    # makes it possible to change the value of a private attribute
    @current_amount.setter
    def current_amount(self, new_amount) :
        if self.customer == True :
            self.__current_amount = new_amount

    def __str__(self):
        return f"The person has {self.current_amount} dollars left"

b1 = Bank(True)
print(b1.current_amount) #getter
b1.current_amount = 12000 #setter
print(b1.current_amount) #getter

# print(b1.__current_amount) #error

b1.current_amount = 15000
