const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = " ";


//TODO: Variables for Part 2
let questions = [
  'Who was the first American woman in space? ',
  'True or false: 5 kilometer == 5000 meters? ',
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  'What is the minimum crew size for the ISS? '
];
let correctAnswers = [
  'Sally Ride',
  'true',
  "40",
  'Trajectory',
  "3",
];
let candidateAnswers = ['','','','',''];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("What is your name? ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
candidateAnswers[0] = input.question(questions[0]);

while (candidateAnswers[0] !== correctAnswers[0]){
  if (candidateAnswers[0] === correctAnswers[0]){
    break;
  }
  console.log("Incorrect. Please try again. ");
  candidateAnswers[0] = input.question(questions[0]);

}

candidateAnswers[1] = input.question(questions[1]);

while (candidateAnswers[1] !== correctAnswers[1]){
  if (candidateAnswers[1] === correctAnswers[1]){
    break;
  }
  console.log("Incorrect. Please try again. ");
  candidateAnswers[1] = input.question(questions[1]);

}

candidateAnswers[2] = input.question(questions[2]);

while (candidateAnswers[2] !== correctAnswers[2]){
  if (candidateAnswers[2] === correctAnswers[2]){
    break;
  }
  console.log("Incorrect. Please try again. ");
  candidateAnswers[2] = input.question(questions[2]);

}

candidateAnswers[3] = input.question(questions[3]);

while (candidateAnswers[3] !== correctAnswers[3]){
  if (candidateAnswers[3] === correctAnswers[3]){
    break;
  }
  console.log("Incorrect. Please try again. ");
  candidateAnswers[3] = input.question(questions[3]);

}

candidateAnswers[4] = input.question(questions[4]);

while (candidateAnswers[4] !== correctAnswers[4]){
  if (candidateAnswers[4] === correctAnswers[4]){
    break;
  }
  console.log("Incorrect. Please try again. ");
  candidateAnswers[4] = input.question(questions[4]);

}

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

//   if (candidateAnswer === correctAnswer){
//   console.log("CORRECT");
// } else {
//   console.log("WRONG");
// }

// while (candidateAnswer[0] !== correctAnswer[0]){
//   if (candidateAnswer[0] === correctAnswer[0]){
//     break;
//   }
//   console.log("Incorrect. Please try again. ");
// }

// while (candidateAnswer[1] !== correctAnswer[1]){
//   if (candidateAnswer[1] === correctAnswer[1]){
//     break;
//   }
//   console.log("Incorrect. Please try again. ");
// }

// while (candidateAnswer[2] !== correctAnswer[2]){
//   if (candidateAnswer[2] === correctAnswer[2]){
//     break;
//   }
//   console.log("Incorrect. Please try again. ");
// }

// while (candidateAnswer[3] !== correctAnswer[3]){
//   if (candidateAnswer[3] === correctAnswer[3]){
//     break;
//   }
//   console.log("Incorrect. Please try again. ");
// }

// while (candidateAnswer[4] !== correctAnswer[4]){
//   if (candidateAnswer[4] === correctAnswer[4]){
//     break;
//   }
//   console.log("Incorrect. Please try again. ");
// }

  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello, " + candidateName + ".");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};