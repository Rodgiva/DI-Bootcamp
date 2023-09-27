expression = "(1 + 2) * {[(3 / 4) - 5]}"
# expression = "((1 + 2)"
# expression = "[1 + 2) * (3 - 4)]"

# BONUS
parentheses = {
    "(": ")",
    "[": "]",
    "{": "}",
    "\"": "\"",
    "'": "'"
}

def balanced_checker(expression, parentheses):
    stack = []

    for char in expression:
        if char in parentheses:
            stack.append(char)
        elif char in parentheses.values():
            if parentheses[stack[-1]] != char:
                return False
            else:
                stack.pop()
    if len(stack) != 0:
        return False
    else:
        return True

print(balanced_checker(expression, parentheses))