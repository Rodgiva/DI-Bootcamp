string = "Hello, World!"
index = 4
new_char = 'a'

string_list = list(string)
string_list[index] = new_char
new_string = "".join(string_list)

print(new_string)