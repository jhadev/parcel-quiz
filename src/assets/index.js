import { comboQuiz, sciQuiz, triviaQuiz, oopQuiz } from './questions';

// declare variable for timer
let timer;
// declare variable for the quiz object
let thisQuiz;
// keep track of quiz totals since a new quiz object is being created for each new quiz.
const quizzes = {
  repeatedQuizIndex: [],
  quizzesAlreadyTaken: [],
  totalCorrect: 0,
  totalIncorrect: 0,
  totalQuestionCount: 0,
  totalScore: 0
};

//class blueprint for new Quiz objects, sets correct and incorrect to 0, sets questionsArray and quizQuestionBanks to an empty array
class Quiz {
  constructor() {
    this.correct = 0;
    this.incorrect = 0;
    this.counter = 0;
    //questionsArray will hold the quiz array for the specific instance of the quiz being generated
    this.questionsArray = [];
    //this array holds all the questionBanks as an array of arrays, allowing the quiz to be randomly generated.
    this.quizQuestionBanks = [];
  }

  //method to add questions to any array. Since the exact number of questions for each quiz can be anything the rest parameter is used.
  addQuestionBank(...questions) {
    //push our array of questionBanks
    this.quizQuestionBanks.push(...questions);
  }
  //use lodash to check for 2 equal arrays
  areEqual(arr1, arr2) {
    return _.isEqual(arr1, arr2);
  }

  setQuestionBank() {
    //grab random index based on question bank array
    let randomIndex = Math.floor(Math.random() * this.quizQuestionBanks.length);
    console.log(randomIndex);
    //add randomIndex to repeatedQuizIndex[0]
    //if repeated Quiz index does not include the random index
    if (!quizzes.repeatedQuizIndex.includes(randomIndex)) {
      //set index to [0]
      quizzes.repeatedQuizIndex.unshift(randomIndex);
      //set questions array to the randomly chosen bank
      this.questionsArray = this.quizQuestionBanks[randomIndex];
      //set counter to a certain amount of seconds per question
      this.counter = this.questionsArray.length * 10;
      //start the quiz
      this.startQuiz();
    } else {
      //run this again
      this.setQuestionBank();
    }
  }

  //method to convert seconds into minutes for the counter
  convertTime(timeInSeconds) {
    return `${Math.floor(timeInSeconds / 60)}:${(timeInSeconds % 60 < 10
      ? '0'
      : '') +
      (timeInSeconds % 60)}`;
  }

  // method to randomize both the questions and answers
  randomize(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  runCounter() {
    this.counter--;
    $('#counter-number').html(this.convertTime(this.counter));
    if (this.counter === 0) {
      this.finishQuiz();
    }
  }

  // this allows combo quizzes to combine titles
  setTitle() {
    //get title
    const titleArray = this.questionsArray.map(question => question.title);
    //use a set to remove dupes instead
    const $titleArray = Array.from(new Set(titleArray));
    $('#quiz-wrapper').prepend(
      `<h2 class="title my-4">${$titleArray.join(` & `)}</h2>`
    );

    // $(".title").css("background", "black");
    //   //starting themes based on title
    // if ($titleArray[0] === "90's Trivia") {
    //   $("body").css("background-image", "url('assets/images/tacky.jpg')");
    // } else {
    //   $("body").css("background", "black");
    // }
  }

  startQuiz() {
    this.setTitle();
    $('.jumbo-style').hide();
    $('#quiz-wrapper').addClass('mt-5');
    $('.card-bg').addClass('border-light');
    //checking if the 2 arrays are equal before allowing quiz to be taken.
    const { quizzesAlreadyTaken } = quizzes;
    if (
      !this.areEqual(quizzesAlreadyTaken.sort(), this.quizQuestionBanks.sort())
    ) {
      //setInterval method called to run the counter method every second. Bind this so it doesn't lose context.
      timer = setInterval(this.runCounter.bind(this), 1000);

      $('.title').after(
        `<h2 class="my-4">Time Remaining: <span id="counter-number">${this.convertTime(
          this.counter
        )}</span></h2>`
      );

      $('#start').remove();
      this.randomize(this.questionsArray);
      this.questionsArray.forEach((quizQuestion, index) => {
        const { question, choices } = quizQuestion;

        $('#quiz').append(`
        <h2 class="rounded my-4">${question}</h2>
       `);
        this.randomize(choices);

        choices.forEach(choice => {
          $('#quiz').append(
            `<div class="form-check form-check-inline my-2">
            <input class="form-check-input" name="${index}" type="radio" id="${choice}" value="${choice}">
            <label class="form-check-label answers" for="${choice}">${choice}</label>
          </div>`
          );
        });
      });

      $('#quiz').append(`
    <div class="row justify-content-center">
      <button class="mt-4 btn btn-outline-danger" id="finish">Finish</button>
    </div`);
    } else {
      this.result();
    }
  }

  finishQuiz() {
    const { quizzesAlreadyTaken } = quizzes;
    //push quiz here once it is finished
    quizzesAlreadyTaken.push(this.questionsArray);
    for (let i = 0; i < this.questionsArray.length; i++) {
      const { correctAnswer, userAnswer } = this.questionsArray[i];
      if (userAnswer === correctAnswer) {
        this.correct++;
      } else {
        this.incorrect++;
      }
    }
    this.result();
  }

  result() {
    clearInterval(timer);

    $('#quiz-wrapper h2').remove();

    let score = `${((this.correct / this.questionsArray.length) * 100).toFixed(
      2
    )}%`;

    quizzes.totalCorrect += this.correct;
    quizzes.totalIncorrect += this.incorrect;
    quizzes.totalQuestionCount += this.questionsArray.length;
    quizzes.totalScore = `${(
      (quizzes.totalCorrect / quizzes.totalQuestionCount) *
      100
    ).toFixed(2)}%`;

    $('#quiz').html(`
    <h2 class="finished">Finished</h2>
    <div class="card-body game-stats"></div>
    `);
    $('.game-stats').append(`
    <h3>Correct: ${this.correct}</h3>
    <h3>Incorrect: ${this.incorrect}</h3>
    <h2>Your Score: ${score}</h2>
    <hr class="my-4">
    <h3>Total Correct: ${quizzes.totalCorrect}</h3>
    <h3>Total Incorrect: ${quizzes.totalIncorrect}</h3>
    <h2>Total Score: ${quizzes.totalScore}</h3>
    <button class="btn btn-outline-success mt-4" id="start">Start Next Quiz</button>
    `);

    if (quizzes.quizzesAlreadyTaken.length === this.quizQuestionBanks.length) {
      //remove start button so you can't click it again bc the browser will crash. condition in set question bank causes it.
      $('#start').remove();
      $('.finished').html(`<h3>You've taken all the quizzes!</h3>`);
      $('.game-stats').append(
        `<button class="btn btn-outline-success mt-4" id="start-over">Start Over</button>`
      );
    }
  }
}

$('#quiz').on('change', '.form-check-input', function() {
  // GET question index out of "name" attribute so we know what question you answered
  const questionIndex = $(this).attr('name');
  // get value out of radio button selected
  const answer = $(this).val();

  console.log(answer);
  // set answer to question's userAnswer property
  thisQuiz.questionsArray[questionIndex].userAnswer = answer;
});

$(document).on('click', '#start', function() {
  $('#quiz').empty();
  //create newQuiz object
  thisQuiz = new Quiz();
  //add quiz question arrays declared earlier
  thisQuiz.addQuestionBank(comboQuiz, sciQuiz, oopQuiz, triviaQuiz);
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
