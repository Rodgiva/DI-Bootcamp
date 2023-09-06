data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

wrong_answers = []
def starwarsquizz():
    correct = 0
    incorrect = 0
    for i in range(len(data)):
        user_answer = input(f"{data[i]['question']}\n")
        if user_answer == data[i]["answer"]:
            correct += 1
        else:
            incorrect += 1
            wrong_answers.append((i, user_answer))
        print("Noted.")
    quizz_correction(correct, incorrect)

def quizz_correction(correct, incorrect):
    print(f"Quizz is over! Let check you answers.\nYou did {correct} correct answers for {incorrect} incorrect answers")
    for i in range(len(wrong_answers)):
        print(f"In the question {data[i]['question']} you answered {wrong_answers[i][1]}, and the correct answer is {data[wrong_answers[i][0]]['answer']}")
    if incorrect > 3:
        print("Lets try again!")
        starwarsquizz()

starwarsquizz()