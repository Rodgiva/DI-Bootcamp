a_string = "7iiTsxh%?i #sM $a #t%^r!"

matrix = [a_string[i:i+3] for i in range(0, len(a_string), 3)]

dycripted_code = ""
for i in range(3):
    for j in range(len(matrix)):
        dycripted_code += matrix[j][i]

for char in dycripted_code:
    # if not char.isalpha() and char != " " and char != "!":
    if not char.isalpha():
        dycripted_code = dycripted_code.replace(char, "")
print(dycripted_code)