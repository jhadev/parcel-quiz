import Question from '../question';

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

const oopQuiz = [oop1, oop2, oop3];

export default oopQuiz;
