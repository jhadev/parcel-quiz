//class for making the question objects, takes in the question, choices, and correctAnswer.
class Question {
  constructor(question, choices, correctAnswer, title) {
    this.question = question;
    this.choices = choices;
    this.correctAnswer = correctAnswer;
    this.title = title;
    this.userAnswer = '';
  }
}

export default Question;
