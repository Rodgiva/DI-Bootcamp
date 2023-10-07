def factorial(n):
    print(f"Calling factorial({n})")  # This line will help in debugging
    if n == 0:  # Base Case
        return 1
    else:       # Recursive Case
        return n * factorial(n - 1)

# RECURSIVE FUNCTION 
# condition 1 - calls itsels from inside 
# condition 2 - has a BASE CASE (condition to stop)

factorial(5)  


# factorial(5)  ->  5 * 24
# factorial(4)  ->  4 * 6
# factorial(3)  ->  3 * 2
# factorial(2)  ->  2 * 1
# factorial(1)  ->  1 * 1

# factorial(0) (BASE CASE - RETURN 1)




HEAD -> GO LEFT, GO RIGHT, CHECK VALUE, CHECK IF LEFT EXISTS, CHECK IF RIGHT EXISTS

