a_string = "7iiTsxh%?i #sM $a #t%^r!"

matrix = [a_string[i:i+3] for i in range(0, len(a_string), 3)]

dycripted_code = ""
for i in range(3):
    for j in range(len(matrix)):
        dycripted_code += matrix[j][i]

dycripted_code = dycripted_code.replace("7", "").replace("%", "").replace("#", "").replace("^", "").replace("%", "").replace("?", "").replace("$", " ")
print(dycripted_code)