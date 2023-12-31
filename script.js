const quizDb = [
  {
    question: "What is the capital of France?",
    a: "Berlin",
    b: "Paris",
    c: "Madrid",
    d: "Rome",
    ans: "ans2",
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    a: "Jupiter",
    b: "Mars",
    c: "Mercury",
    d: "Venus",
    ans: "ans2",
  },
  {
    question: "Who painted the Mona Lisa?",
    a: "Leonardo da Vinci",
    b: "Pablo Picasso",
    c: "Vincent van Gogh",
    d: "Michelangelo",
    ans: "ans1",
  },
  {
    question: "What is the largest mammal in the world?",
    a: "African Elephant",
    b: "Blue Whale",
    c: "Giraffe",
    d: "Hippopotamus",
    ans: "ans2",
  },
  {
    question: "Which language is the most widely spoken in the world?",
    a: "Spanish",
    b: "Hindi",
    c: "Mandarin Chinese",
    d: "English",
    ans: "ans2",
  },
  {
    question: "What year did World War I begin?",
    a: "1914",
    b: "1918",
    c: "1939",
    d: "1945",
    ans: "ans1",
  },
  {
    question: "Which country is famous for producing maple syrup?",
    a: "Canada",
    b: "France",
    c: "Australia",
    d: "Brazil",
    ans: "ans1",
  },
  {
    question: "What is the chemical symbol for gold?",
    a: "Au",
    b: "Go",
    c: "Gl",
    d: "Gd",
    ans: "ans1",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    a: "Charles Dickens",
    b: "William Shakespeare",
    c: "Jane Austen",
    d: "Mark Twain",
    ans: "ans2",
  },
  {
    question: "What is the tallest mountain in the world?",
    a: "K2",
    b: "Mount Kilimanjaro",
    c: "Mount Everest",
    d: "Matterhorn",
    ans: "ans3",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const showScore = document.querySelector("#showScore");
const answers = document.querySelectorAll(".answer");

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  const questionList = quizDb[questionCount];
  question.innerText = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};

loadQuestion();

const getCheckedAnswer = () => {
  let answer;

  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckedAnswer();

  if (checkedAnswer === quizDb[questionCount].ans) {
    score++;
  }
  questionCount++;
  if (questionCount < quizDb.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `You Scored ${score}/ ${quizDb.length} 
    <button class="btn" onClick="location.reload()">Reload</button>
    `;
  }
});
