
correct = 0;
inCorrect = 0;
answers = [];
totalQuestions = 0;

function submitQuiz() {
  checkAnswer();

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

function checkAnswer() {
  let answer1 = document.querySelector('input[name="question1"]:checked').value;
  answers.push(answer1);

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

