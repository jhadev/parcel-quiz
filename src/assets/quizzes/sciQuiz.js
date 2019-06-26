import Question from '../question';

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

const sciQuiz = [sciTrivia1, sciTrivia2, sciTrivia3];

export default sciQuiz;
