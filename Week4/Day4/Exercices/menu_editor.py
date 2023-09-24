from menu_item import MenuItem, MenuManager

def show_user_menu():
    user_inp = input("\nView an Item (V)\nAdd an Item (A)\nDelete an Item (D)\nUpdate an Item (U)\nShow the Menu (S)")
    an_item = None
    match user_inp:
        case "V":
            v_inp = input("Which item do you want to wiew ?")
            print(f"\n{MenuManager.get_by_name(v_inp)}")
            show_user_menu()
        case "A":
            a_inp = input("Give the name and the price of the item (separate with a space)")
            item_values =  a_inp.split(" ")
            an_item = MenuItem(item_values[0], item_values[1])
            an_item.save()
            show_user_menu()
        case "D":
            an_item.delete()
            show_user_menu()
        case "U":
            u_inp = input("Give the name and the price of the item you want to update (separate with a space)")
            item_values =  u_inp.split(" ")
            an_item.update(item_values[0], item_values[1])
            show_user_menu()
        case "S":
            items = MenuManager.all_items()
            for item in items:
                print(item)
        case _:
            pass

show_user_menu()