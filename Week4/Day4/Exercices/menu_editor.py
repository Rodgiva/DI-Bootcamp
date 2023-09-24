from menu_item import MenuItem, MenuManager

class Menu_editor:
    @staticmethod
    def show_user_menu():
        user_inp = input("\nView an Item (V)\nAdd an Item (A)\nDelete an Item (D)\nUpdate an Item (U)\nShow the Menu (S)\n")
        an_item = None
        match user_inp:
            case "V":
                v_inp = input("Which item do you want to wiew ?\n")
                print(f"\n{MenuManager.get_by_name(v_inp)}")
                Menu_editor.show_user_menu()
            case "A":
                a_inp = input("Give the name and the price of the item (separate with a space)\n")
                item_values =  a_inp.split(" ")
                an_item = MenuItem(item_values[0], item_values[1])
                an_item.save()
                Menu_editor.show_user_menu()
            case "D":
                an_item.delete()
                Menu_editor.show_user_menu()
            case "U":
                u_inp = input("Give the name and the price of the item you want to update (separate with a space)\n")
                item_values =  u_inp.split(" ")
                an_item.update(item_values[0], item_values[1])
                Menu_editor.show_user_menu()
            case "S":
                items = MenuManager.all_items()
                for item in items:
                    print(item)
            case _:
                pass

    @staticmethod
    def add_item_to_menu():
        name_item_inp = input("What item do you want to add?\n")
        price_item_inp = input("And at what price?\n")

        try:
            a_menu_item = MenuItem(name=name_item_inp, price=price_item_inp)
            a_menu_item.save()
        except Exception as err:
            print(f"Error :{err}")
        else:
            print("Item was added successfully")

    @staticmethod
    def remove_item_from_menu():
        item_name = input("Which item do you want to delete?\n")
        a_menu_item = MenuItem(item_name)
        if a_menu_item.delete(item_name):
            print("The deletion is successful !")
        else:
            print("An error was encountered...")
    
    @staticmethod
    def update_item_from_menu():
        item_name = input("Which item do you want to update?\n")
        item_price = int(input("And at what price?\n"))
        a_menu_item = MenuItem(item_name)
        if a_menu_item.update(item_price):
            print("The update is successful !")
        else:
            print("An error was encountered...")
    
    @staticmethod
    def show_restaurant_menu():
        all_items = MenuManager.all_items()
        print("\n************\n*** Menu ***\n************\n")
        for item in all_items:
            print(f"{item[1]}: {item[2]}$")
        print("")

# Menu_editor.show_user_menu()
# Menu_editor.add_item_to_menu()
# Menu_editor.remove_item_from_menu()
# Menu_editor.update_item_from_menu()
# Menu_editor.show_restaurant_menu()
