
#     Ask the user for their birthdate (specify the format, for example: DD/MM/YYYY).
#     Display a little cake as seen below:

#        ___iiiii___
#       |:H:a:p:p:y:|
#     __|___________|__
#    |^^^^^^^^^^^^^^^^^|
#    |:B:i:r:t:h:d:a:y:|
#    |                 |
#    ~~~~~~~~~~~~~~~~~~~

# The number of candles on the cake should be the last number of the users age, if they are 53, then add 3 candles.

# Bonus : If they were born on a leap year, display two cakes !

# from datetime import date
bd = input("What is your birthday? (in the format DD/MM/YYYY)\n")
today = "04/09/2023"
today_list = today.split("/")

today_day = int(today_list[0])
today_month = int(today_list[1])
today_year = int(today_list[2])

bd_list = bd.split("/")
bd_day = int(bd_list[0])
bd_month = int(bd_list[1])
bd_year = int(bd_list[2])

age = today_year - bd_year
if today_month < bd_month or (today_month == bd_month and today_day < bd_day):
    age -= 1

#******#

line_1 = "       ___________    "
line_2 = "      |:H:a:p:p:y:|   "
line_3 = "    __|___________|__ "
line_4 = "   |^^^^^^^^^^^^^^^^^|"
line_5 = "   |:B:i:r:t:h:d:a:y:|"
line_6 = "   |                 |"
line_7 = "   ~~~~~~~~~~~~~~~~~~~"

ascii_art = [line_2, line_3, line_4, line_5, line_6, line_7]

last_nb_age = int(str(age)[-1])
position_first_candles = ((11 - last_nb_age) // 2) + 7
character_candle = "i"

candle_line = line_1

for i in range(position_first_candles, position_first_candles + last_nb_age):
    candle_line = candle_line[:i] + character_candle + candle_line[i+1:]

if (bd_year % float(4) == 0 or bd_year % 400 == 0) and bd_year % 100 != 0:
   print(f"\n{candle_line}")
   for i in ascii_art:
      print(i)

print(f"\n{candle_line}")
for i in ascii_art:
    print(i)