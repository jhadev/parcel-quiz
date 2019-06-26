// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/question.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//class for making the question objects, takes in the question, choices, and correctAnswer.
var Question = function Question(question, choices, correctAnswer, title) {
  _classCallCheck(this, Question);

  this.question = question;
  this.choices = choices;
  this.correctAnswer = correctAnswer;
  this.title = title;
  this.userAnswer = '';
};

var _default = Question;
exports.default = _default;
},{}],"assets/quizzes/sciQuiz.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _question = _interopRequireDefault(require("../question"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sciTrivia1 = new _question.default("What is the name of Jupiter's largest moon", ['Oberon', 'Ganymede', 'Titan', 'Europa'], 'Ganymede', 'Science Quiz');
var sciTrivia2 = new _question.default("What does the 'c' in E=mc^2 stand for?", ['Energy', 'Speed of Light', 'Mass', 'Dark Matter'], 'Speed of Light', 'Science Quiz');
var sciTrivia3 = new _question.default('What precious stone is the hardest?', ['Diamond', 'Ruby', 'Sapphire', 'Emerald'], 'Diamond', 'Science Quiz');
var sciQuiz = [sciTrivia1, sciTrivia2, sciTrivia3];
var _default = sciQuiz;
exports.default = _default;
},{"../question":"assets/question.js"}],"assets/quizzes/triviaQuiz.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _question = _interopRequireDefault(require("../question"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var trivia1 = new _question.default("Which group released the hit song, 'Smells Like Teen Spirit'?", ['Nirvana', 'Backstreet Boys', 'The Offspring', 'No Doubt'], 'Nirvana', "90's Trivia");
var trivia2 = new _question.default("What was Doug's best friend's name?", ['Skeeter', 'Mark', 'Zach', 'Cody'], 'Skeeter', "90's Trivia");
var trivia3 = new _question.default('What was the name of the principal at Bayside High in Saved By The Bell?', ['Mr.Zhou', 'Mr.Driggers', 'Mr.Belding', 'Mr.Page'], 'Mr.Belding', "90's Trivia");
var triviaQuiz = [trivia1, trivia2, trivia3];
var _default = triviaQuiz;
exports.default = _default;
},{"../question":"assets/question.js"}],"assets/quizzes/oopQuiz.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _question = _interopRequireDefault(require("../question"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var oop1 = new _question.default('What is not a principle of Object Oriented Programming?', ['Abstraction', 'Encapsulation', 'Inheritence', 'Polymorphism', 'Impressionism'], 'Impressionism', 'Object Oriented Programming');
var oop2 = new _question.default('What type of inheritence pattern is utilized in JavaScript?', ['Prototypal', 'Classical', 'Trust'], 'Prototypal', 'Object Oriented Programming');
var oop3 = new _question.default('Which is better? Functional Programming or Object Oriented Programming?', ['Object Oriented Programming', 'Functional Programming', 'Neither, everything has its uses'], 'Neither, everything has its uses', 'Object Oriented Programming');
var oopQuiz = [oop1, oop2, oop3];
var _default = oopQuiz;
exports.default = _default;
},{"../question":"assets/question.js"}],"assets/quizzes/comboQuiz.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sciQuiz = _interopRequireDefault(require("./sciQuiz"));

var _triviaQuiz = _interopRequireDefault(require("./triviaQuiz"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var comboQuiz = [].concat(_toConsumableArray(_triviaQuiz.default), _toConsumableArray(_sciQuiz.default), _toConsumableArray(_triviaQuiz.default));
var _default = comboQuiz;
exports.default = _default;
},{"./sciQuiz":"assets/quizzes/sciQuiz.js","./triviaQuiz":"assets/quizzes/triviaQuiz.js"}],"assets/quizzes/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "sciQuiz", {
  enumerable: true,
  get: function () {
    return _sciQuiz.default;
  }
});
Object.defineProperty(exports, "triviaQuiz", {
  enumerable: true,
  get: function () {
    return _triviaQuiz.default;
  }
});
Object.defineProperty(exports, "oopQuiz", {
  enumerable: true,
  get: function () {
    return _oopQuiz.default;
  }
});
Object.defineProperty(exports, "comboQuiz", {
  enumerable: true,
  get: function () {
    return _comboQuiz.default;
  }
});

var _sciQuiz = _interopRequireDefault(require("./sciQuiz"));

var _triviaQuiz = _interopRequireDefault(require("./triviaQuiz"));

var _oopQuiz = _interopRequireDefault(require("./oopQuiz"));

var _comboQuiz = _interopRequireDefault(require("./comboQuiz"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./sciQuiz":"assets/quizzes/sciQuiz.js","./triviaQuiz":"assets/quizzes/triviaQuiz.js","./oopQuiz":"assets/quizzes/oopQuiz.js","./comboQuiz":"assets/quizzes/comboQuiz.js"}],"assets/quiz.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var timer;
var quizzes = {
  repeatedQuizIndex: [],
  quizzesAlreadyTaken: [],
  totalCorrect: 0,
  totalIncorrect: 0,
  totalQuestionCount: 0,
  totalScore: 0
}; //class blueprint for new Quiz objects, sets correct and incorrect to 0, sets questionsArray and quizQuestionBanks to an empty array

var Quiz =
/*#__PURE__*/
function () {
  function Quiz() {
    _classCallCheck(this, Quiz);

    this.correct = 0;
    this.incorrect = 0;
    this.counter = 0; //questionsArray will hold the quiz array for the specific instance of the quiz being generated

    this.questionsArray = []; //this array holds all the questionBanks as an array of arrays, allowing the quiz to be randomly generated.

    this.quizQuestionBanks = [];
  } //method to add questions to any array. Since the exact number of questions for each quiz can be anything the rest parameter is used.


  _createClass(Quiz, [{
    key: "addQuestionBank",
    value: function addQuestionBank() {
      var _this$quizQuestionBan;

      //push our array of questionBanks
      (_this$quizQuestionBan = this.quizQuestionBanks).push.apply(_this$quizQuestionBan, arguments);
    } //use lodash to check for 2 equal arrays

  }, {
    key: "areEqual",
    value: function areEqual(arr1, arr2) {
      return _.isEqual(arr1, arr2);
    }
  }, {
    key: "setQuestionBank",
    value: function setQuestionBank() {
      //grab random index based on question bank array
      var randomIndex = Math.floor(Math.random() * this.quizQuestionBanks.length);
      console.log(randomIndex); //add randomIndex to repeatedQuizIndex[0]
      //if repeated Quiz index does not include the random index

      if (!quizzes.repeatedQuizIndex.includes(randomIndex)) {
        //set index to [0]
        quizzes.repeatedQuizIndex.unshift(randomIndex); //set questions array to the randomly chosen bank

        this.questionsArray = this.quizQuestionBanks[randomIndex]; //set counter to a certain amount of seconds per question

        this.counter = this.questionsArray.length * 10; //start the quiz

        this.startQuiz();
      } else {
        //run this again
        this.setQuestionBank();
      }
    } //method to convert seconds into minutes for the counter

  }, {
    key: "convertTime",
    value: function convertTime(timeInSeconds) {
      return "".concat(Math.floor(timeInSeconds / 60), ":").concat((timeInSeconds % 60 < 10 ? '0' : '') + timeInSeconds % 60);
    } // method to randomize both the questions and answers

  }, {
    key: "randomize",
    value: function randomize(arr) {
      for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var _ref = [arr[j], arr[i]];
        arr[i] = _ref[0];
        arr[j] = _ref[1];
      }

      return arr;
    }
  }, {
    key: "runCounter",
    value: function runCounter() {
      this.counter--;
      $('#counter-number').html(this.convertTime(this.counter));

      if (this.counter === 0) {
        this.finishQuiz();
      }
    } // this allows combo quizzes to combine titles

  }, {
    key: "setTitle",
    value: function setTitle() {
      //get title
      var titleArray = this.questionsArray.map(function (question) {
        return question.title;
      }); //use a set to remove dupes instead

      var $titleArray = Array.from(new Set(titleArray));
      $('#quiz-wrapper').prepend("<h2 class=\"title my-4\">".concat($titleArray.join(" & "), "</h2>")); // $(".title").css("background", "black");
      //   //starting themes based on title
      // if ($titleArray[0] === "90's Trivia") {
      //   $("body").css("background-image", "url('assets/images/tacky.jpg')");
      // } else {
      //   $("body").css("background", "black");
      // }
    }
  }, {
    key: "startQuiz",
    value: function startQuiz() {
      var _this = this;

      this.setTitle();
      $('.jumbo-style').hide();
      $('#quiz-wrapper').addClass('mt-5');
      $('.card-bg').addClass('border-light'); //checking if the 2 arrays are equal before allowing quiz to be taken.

      var quizzesAlreadyTaken = quizzes.quizzesAlreadyTaken;

      if (!this.areEqual(quizzesAlreadyTaken.sort(), this.quizQuestionBanks.sort())) {
        //setInterval method called to run the counter method every second. Bind this so it doesn't lose context.
        timer = setInterval(this.runCounter.bind(this), 1000);
        $('.title').after("<h2 class=\"my-4\">Time Remaining: <span id=\"counter-number\">".concat(this.convertTime(this.counter), "</span></h2>"));
        $('#start').remove();
        this.randomize(this.questionsArray);
        this.questionsArray.forEach(function (quizQuestion, index) {
          var question = quizQuestion.question,
              choices = quizQuestion.choices;
          $('#quiz').append("\n        <h2 class=\"rounded my-4\">".concat(question, "</h2>\n       "));

          _this.randomize(choices);

          choices.forEach(function (choice, index) {
            $('#quiz').append("<div class=\"form-check form-check-inline my-2\">\n            <input class=\"form-check-input\" name=\"".concat(index, "\" type=\"radio\" id=\"").concat(choice, "\" value=\"").concat(choice, "\">\n            <label class=\"form-check-label answers\" for=\"").concat(choice, "\">").concat(choice, "</label>\n          </div>"));
          });
        });
        $('#quiz').append("\n    <div class=\"row justify-content-center\">\n      <button class=\"mt-4 btn btn-outline-danger\" id=\"finish\">Finish</button>\n    </div");
      } else {
        this.result();
      }
    }
  }, {
    key: "finishQuiz",
    value: function finishQuiz() {
      var quizzesAlreadyTaken = quizzes.quizzesAlreadyTaken; //push quiz here once it is finished

      quizzesAlreadyTaken.push(this.questionsArray);

      for (var i = 0; i < this.questionsArray.length; i++) {
        var _this$questionsArray$ = this.questionsArray[i],
            correctAnswer = _this$questionsArray$.correctAnswer,
            userAnswer = _this$questionsArray$.userAnswer;

        if (userAnswer === correctAnswer) {
          this.correct++;
        } else {
          this.incorrect++;
        }
      }

      this.result();
    }
  }, {
    key: "result",
    value: function result() {
      clearInterval(timer);
      $('#quiz-wrapper h2').remove();
      var score = "".concat((this.correct / this.questionsArray.length * 100).toFixed(2), "%");
      quizzes.totalCorrect += this.correct;
      quizzes.totalIncorrect += this.incorrect;
      quizzes.totalQuestionCount += this.questionsArray.length;
      quizzes.totalScore = "".concat((quizzes.totalCorrect / quizzes.totalQuestionCount * 100).toFixed(2), "%");
      $('#quiz').html("\n    <h2 class=\"finished\">Finished</h2>\n    <div class=\"card-body game-stats\"></div>\n    ");
      $('.game-stats').append("\n    <h3>Correct: ".concat(this.correct, "</h3>\n    <h3>Incorrect: ").concat(this.incorrect, "</h3>\n    <h2>Your Score: ").concat(score, "</h2>\n    <hr class=\"my-4\">\n    <h3>Total Correct: ").concat(quizzes.totalCorrect, "</h3>\n    <h3>Total Incorrect: ").concat(quizzes.totalIncorrect, "</h3>\n    <h2>Total Score: ").concat(quizzes.totalScore, "</h3>\n    <button class=\"btn btn-outline-success mt-4\" id=\"start\">Start Next Quiz</button>\n    "));

      if (quizzes.quizzesAlreadyTaken.length === this.quizQuestionBanks.length) {
        //remove start button so you can't click it again bc the browser will crash. condition in set question bank causes it.
        $('#start').remove();
        $('.finished').html("<h3>You've taken all the quizzes!</h3>");
        $('.game-stats').append("<button class=\"btn btn-outline-success mt-4\" id=\"start-over\">Start Over</button>");
      }
    }
  }]);

  return Quiz;
}();

var _default = Quiz;
exports.default = _default;
},{}],"assets/index.js":[function(require,module,exports) {
"use strict";

var _quizzes = require("./quizzes");

var _quiz = _interopRequireDefault(require("./quiz"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// declare variable for timer
// declare variable for the quiz object
var thisQuiz; // keep track of quiz totals since a new quiz object is being created for each new quiz.

$('#quiz').on('change', '.form-check-input', function () {
  // GET question index out of "name" attribute so we know what question you answered
  var questionIndex = $(this).attr('name'); // get value out of radio button selected

  var answer = $(this).val(); // set answer to question's userAnswer property

  thisQuiz.questionsArray[questionIndex].userAnswer = answer;
});
$(document).on('click', '#start', function () {
  $('#quiz').empty(); //create newQuiz object

  thisQuiz = new _quiz.default(); //add quiz question arrays declared earlier

  thisQuiz.addQuestionBank(_quizzes.comboQuiz, _quizzes.sciQuiz, _quizzes.oopQuiz, _quizzes.triviaQuiz); //set the questionBank to the new quiz

  thisQuiz.setQuestionBank(); //start quiz
  // thisQuiz.startQuiz();
});
$(document).on('click', '#finish', function () {
  thisQuiz.finishQuiz();
});
$(document).on('click', '#start-over', function () {
  window.location.reload();
});
},{"./quizzes":"assets/quizzes/index.js","./quiz":"assets/quiz.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61387" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","assets/index.js"], null)
//# sourceMappingURL=/assets.8f4429fc.js.map