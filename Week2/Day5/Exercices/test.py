#     *
#    **
#   ***
#  ****
# *****

pattern = "     "

for i in range(5,0,-1):
    line = pattern[:i] + "*"*(6-i) + pattern[5:]
    print(line)

# for i in range(1,6,2):
#     line = pattern[:half_length-int((i/2)+0.5)+1] + "*"*i + pattern[half_length+int((i/2)+0.5):]
#     print(line)