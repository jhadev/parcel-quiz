import Question from '../question';

const movies1 = new Question(
  'A group of Earth children help a stranded alien botanist return home is the plot outline of this movie.',
  [
    'The Hitch Hikers Guide to the Galaxy',
    'Cyborg',
    'E.T. the Extra-Terrestrial',
    'Star Wars: Episode VI - Return of the Jedi'
  ],
  'E.T. the Extra-Terrestrial',
  'Movies'
);

const movies2 = new Question(
  'What year did the movie The Shawshank Redemption hit the movie theatres?',
  ['1994', '1992', '1990', '1996'],
  '1994',
  'Movies'
);

const movies3 = new Question(
  'What was the name of Doc Browns dog in the film Back to the Future?',
  ['Shep', 'Einstein', 'Edsel', 'Shaggy'],
  'Einstein',
  'Movies'
);

const movies4 = new Question(
  'In which movie is there a character named Del Griffith',
  [
    'Planes, Trains & Automobiles',
    'Class Reunion',
    'Uncle Buck',
    ' Ferris Buellers Day Off'
  ],
  'Planes, Trains & Automobiles',
  'Movies'
);

const movies5 = new Question(
  'Robert DeNiro and Danny DeVito were first considered for the roles of burglars Harry and Marv in the hilarious movie Home Alone.',
  ['True', 'False'],
  'True',
  'Movies'
);

const movies6 = new Question(
  'Jason Voorhees, the main character in Friday the 13th series puts on a mask to hide his horrible face in which movie?',
  [
    'Friday the 13th: A New Beginning',
    'Friday the 13th Part VI: Jason Lives',
    'Friday the 13th Part 2',
    'Friday the 13th Part 3'
  ],
  'Friday the 13th Part 3',
  'Movies'
);

const movieQuiz = [movies1, movies2, movies3, movies4, movies5, movies6];

export default movieQuiz;
