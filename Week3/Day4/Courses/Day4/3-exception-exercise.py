# Create a colorize(text, color) function that contain this tuple colors = ('cyan', 'yellow', 'blue', 'green', 'magenta')
# If the color is not present in the tuple, raise a ValueError exception
# If the text is not a string raise a TypeError Exception
# make sure to catch the exception

def colorize(text, color) :
    colors = ('cyan', 'yellow', 'blue', 'green', 'magenta')
    try :
        if color not in colors :
            raise ValueError("The color is not in the tuple")
        if not isinstance(text, str) :
            raise TypeError("The text is not a string")
    except ValueError as error:
        print(error)
        print("Problem with the color")
    except TypeError as error:
        print(error)
        print("Problem with the text")
    else :
        print("everything is ok")

colorize("abc", "green")
colorize(123, "green")
colorize("abc", "black")
colorize(123, "black")