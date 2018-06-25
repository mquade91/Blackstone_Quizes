console.log("script connected")


correct = 0;
inCorrect = 0;
answers = [];
totalQuestions = 0;


//function that on 'submit' maps over answers and if the value = correct +1 correct vice versa for inCorrect each +1 for totalQuestions

function submitQuiz() {
  console.log('button works')
  checkAnswer();
  console.log(answers);

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

