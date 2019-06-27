import Question from '../question';

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

const triviaQuiz = [trivia1, trivia2, trivia3];

export default triviaQuiz;
