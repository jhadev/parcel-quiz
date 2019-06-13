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

//make some question objects with the blueprint
const oop1 = new Question(
  'What is not a principle of Object Oriented Programming?',
  [
    'Abstraction',
    'Encapsulation',
    'Inheritence',
    'Polymorphism',
    'Impressionism'
  ],
  'Impressionism',
  'Object Oriented Programming'
);

const oop2 = new Question(
  'What type of inheritence pattern is utilized in JavaScript?',
  ['Prototypal', 'Classical', 'Trust'],
  'Prototypal',
  'Object Oriented Programming'
);

const oop3 = new Question(
  'Which is better? Functional Programming or Object Oriented Programming?',
  [
    'Object Oriented Programming',
    'Functional Programming',
    'Neither, everything has its uses'
  ],
  'Neither, everything has its uses',
  'Object Oriented Programming'
);

const trivia1 = new Question(
  "Which group released the hit song, 'Smells Like Teen Spirit'?",
  ['Nirvana', 'Backstreet Boys', 'The Offspring', 'No Doubt'],
  'Nirvana',
  "90's Trivia"
);

const trivia2 = new Question(
  "What was Doug's best friend's name?",
  ['Skeeter', 'Mark', 'Zach', 'Cody'],
  'Skeeter',
  "90's Trivia"
);

const trivia3 = new Question(
  'What was the name of the principal at Bayside High in Saved By The Bell?',
  ['Mr.Zhou', 'Mr.Driggers', 'Mr.Belding', 'Mr.Page'],
  'Mr.Belding',
  "90's Trivia"
);

const sciTrivia1 = new Question(
  "What is the name of Jupiter's largest moon",
  ['Oberon', 'Ganymede', 'Titan', 'Europa'],
  'Ganymede',
  'Science Quiz'
);

const sciTrivia2 = new Question(
  "What does the 'c' in E=mc^2 stand for?",
  ['Energy', 'Speed of Light', 'Mass', 'Dark Matter'],
  'Speed of Light',
  'Science Quiz'
);

const sciTrivia3 = new Question(
  'What precious stone is the hardest?',
  ['Diamond', 'Ruby', 'Sapphire', 'Emerald'],
  'Diamond',
  'Science Quiz'
);

//declare some question group arrays to use in the addQuestions method
const oopQuiz = [oop1, oop2, oop3];
const triviaQuiz = [trivia1, trivia2, trivia3];
const sciQuiz = [sciTrivia1, sciTrivia2, sciTrivia3];
const comboQuiz = [...oopQuiz, ...sciQuiz, ...triviaQuiz];

export { oopQuiz, triviaQuiz, sciQuiz, comboQuiz };
