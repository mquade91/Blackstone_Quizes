
correct = 0;
inCorrect = 0;
answers = [];
totalQuestions = 0;

function submitQuiz() {
  allQuestionsAnswered();
  checkAnswer();
  console.log(answers)
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == "correct") {
      correct += 1;
    } else {
      inCorrect += 1;
    }
  }
  var score = Math.floor((correct / answers.length) * 100);
  alert("Answers Correct: " + correct + " Answers incorrect: " + inCorrect + " Score: " + score + "%")

}
// Function to make sure all questions have been answered
function allQuestionsAnswered() {
  //this grabs all <input radio tags>
  var radios = document.getElementsByTagName('input');

  let questionsAnswered = 0;
  //This for loop finds all checked buttons
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].checked) {
      questionsAnswered++;
    }
  }
  console.log(questionsAnswered);
  if (questionsAnswered < 6) {
    alert('Please answer all questions')
  }
}

//collects the values of each answer
function checkAnswer() {

  let answer = document.querySelector('input[ name="question1"]:checked').value;
  answers.push(answer);

  let answer2 = document.querySelector('input[name="question2"]:checked').value;
  answers.push(answer2);

  let answer3 = document.querySelector('input[name="question3"]:checked').value;
  answers.push(answer3);

  let answer4 = document.querySelector('input[name="question4"]:checked').value;
  answers.push(answer4);

  let answer5 = document.querySelector('input[name="question5"]:checked').value;
  answers.push(answer5);

  let answer6 = document.querySelector('input[name="question6"]:checked').value;
  answers.push(answer6);

}

