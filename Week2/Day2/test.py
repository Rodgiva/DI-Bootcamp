# ******************* #
# Here I test the codes
# ******************* #
bd_year = float(input("vasy\n"))

if (bd_year % float(4) == 0 or bd_year % 400 == 0) and bd_year % 100 != 0:
    print("bissextile")
else:
    print("not bissextile")
    
# 1999 % 4 == 0 or 1999 % 100 != 0 or 1999 % 400 == 0