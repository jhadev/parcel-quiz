// import { sciQuiz, triviaQuiz, oopQuiz, comboQuiz, movieQuiz } from './quizzes';
import sciQuiz from './quizzes/sciQuiz';
import Quiz from './quiz';

// declare variable for timer

// declare variable for the quiz object
let thisQuiz;
// keep track of quiz totals since a new quiz object is being created for each new quiz.

$('#quiz').on('change', '.form-check-input', function() {
  // GET question index out of "name" attribute so we know what question you answered
  const questionIndex = $(this).attr('name');
  // get value out of radio button selected
  const answer = $(this).val();
  // set answer to question's userAnswer property
  thisQuiz.questionsArray[questionIndex].userAnswer = answer;
});

$(document).on('click', '#start', function() {
  $('#quiz').empty();
  //create newQuiz object
  thisQuiz = new Quiz();
  //add quiz question arrays declared earlier
  thisQuiz.addQuestionBank(sciQuiz);
  //set the questionBank to the new quiz
  thisQuiz.setQuestionBank();
  //start quiz
  // thisQuiz.startQuiz();
});

$(document).on('click', '#finish', function() {
  thisQuiz.finishQuiz();
});

$(document).on('click', '#start-over', function() {
  window.location.reload();
});
