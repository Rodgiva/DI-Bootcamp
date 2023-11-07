import express from "express";
import triviaQuestions from "../models/questions.js";

const router = express.Router();

let score = 0;

//   GET /quiz: Start the quiz and display the first question.
router.get("/", (req, res) => {
  const data = {
    id: triviaQuestions[0].id,
    question: triviaQuestions[0].question,
  };
  res.json(data);
});

//   POST /quiz: Submit an answer to the current question and move to the next question.
router.post("/", (req, res) => {
  const { id, answer } = req.body;
  console.log(req.body);
  if (answer.toLowerCase() == triviaQuestions[id - 1].answer.toLowerCase()) {
    score++;
  }
  //   console.log(triviaQuestions.length);
  if (id == triviaQuestions.length) {
    res.json(false)
  }
  else {
    const data = {
      id: triviaQuestions[id].id,
      question: triviaQuestions[id].question,
    };
    res.json(data);
  }
});

//   GET /quiz/score: Display the user’s final score at the end of the quiz.
router.get("/quiz/score", (req, res) => {
  res.json(score);
});

export default router;
