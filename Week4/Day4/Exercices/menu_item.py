# Exercise 1 : Restaurant Menu Manager
# Instructions

# Description: Create a restaurant menu management system for a manager.
# The program should allow the manager to view the menu, add an item and delete an item.


# PART 1

# In this exercise we will use PostgreSQL and Python.

#     Create a new database and a new table in pgAdmin (or in psql). The table is named Menu_Items and contains the columns
#         item_id : SERIAL PRIMARY KEY
#         item_name : VARCHAR(30) NOT NULL
#         item_price : SMALLINT DEFAULT 0

#     In the file menu_item.py, create a new class called MenuItem, the attributes should be the name and price of each item.

#     Create several methods (save, delete, update) these methods will allow a user to save, delete and update items from the Menu_Items table.
# The update method can update the name as well as the price of an item.

#     In the file menu_manager.py, create a new class called MenuManager
#         Create a Class Method called get_by_name that will return a single item from the Menu_Items table depending on it’s name, if an object is not found (there is no item matching the name in the get_by_name method) return None.

#         Create a Class Method called all_items which will return a list of all the items from the Menu_Items table.

import psycopg2

DB_NAME = "menu_manager"
USER = "postgres"
PASSWORD = "917364"
HOST = "localhost"
PORT = "5432" #5433

try:
    connection = psycopg2.connect(
        dbname = DB_NAME,
        user = USER,
        password = PASSWORD,
        host = HOST,
        port = PORT
    )
    
except Exception as err:
    print(f"Error :{err}")

cursor = connection.cursor()


class MenuItem:
    def __init__(self, name:str, price:int):
        self.item_name = name
        self.item_price = price
    
    def save(self):
        query = f'''
        insert into Menu_Items (item_name, item_price)
        values ('{self.item_name}', {self.item_price})
        '''
        cursor.execute(query)
        connection.commit()

    def delete(self):
        query = f'''
        delete from Menu_Items
        where item_name = '{self.item_name}'
        and item_price = {self.item_price}
        '''
        cursor.execute(query)
        connection.commit()

    def update(self, name = None, price = None):
        if name == None:
            name = self.item_name
        if price == None:
            price = self.item_price

        query = f'''
        update Menu_Items
        set
            item_name = '{name}',
            item_price = {price}
        where item_name = '{self.item_name}'
        and item_price = {self.item_price}
        
        '''
        cursor.execute(query)
        connection.commit()

class MenuManager:
    @staticmethod
    def get_by_name(name):
        query = f'''
        select * from Menu_Items
        where item_name = '{name}'
        '''

        cursor.execute(query)
        output = cursor.fetchall()

        if len(output) == 0:
            return None

        return output
    @staticmethod
    def all_items():
        query = f'''
        select * from Menu_Items
        '''

        cursor.execute(query)
        output = cursor.fetchall()

        if len(output) == 0:
            return None

        return output
# connection.close()
# an_item1 = MenuItem('truc', 50)
# # an_item1.save()
# # an_item1.delete()
# # an_item2 = MenuItem('machin', 100)
# print(MenuManager.get_by_name('truc'))
# print(MenuManager.get_by_name('machin'))
# print(MenuManager.all_items())

