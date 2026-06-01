 const questions = [
  { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"], answer: 0 },
  { question: "Which language is used for styling web pages?", options: ["HTML", "JQuery", "CSS", "XML"], answer: 2 },
  { question: "Which is not a JavaScript Framework?", options: ["React", "Angular", "Vue", "Python"], answer: 3 },
  { question: "Which HTML tag includes JavaScript?", options: ["<js>", "<script>", "<scripting>", "<javascript>"], answer: 1 }
];

let currentQuestion = 0;
let score = 0;

const username = localStorage.getItem("quizUser");
document.getElementById("welcome").textContent = `Hi ${username}, good luck! 🍀`;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const questionContainer = document.getElementById("question-container");
const scoreEl = document.getElementById("score");
const resultMsg = document.getElementById("result-msg");
const restartBtn = document.getElementById("restart-btn");

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  // create buttons
  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-btn");
    btn.addEventListener("click", () => selectAnswer(index, btn));
    optionsEl.appendChild(btn);
  });
}

function selectAnswer(index, selectedBtn) {
  const q = questions[currentQuestion];
  const allBtns = document.querySelectorAll(".option-btn");

  allBtns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) btn.classList.add("correct");
    else if (i === index) btn.classList.add("wrong");
  });

  if (index === q.answer) score++;
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  questionContainer.classList.add("hide");
  resultContainer.classList.remove("hide");
  scoreEl.textContent = `${score} / ${questions.length}`;
  resultMsg.textContent =
    score >= questions.length / 2
      ? `Great job, ${username}! 🌟`
      : `Keep trying, ${username}! 💪`;
}

restartBtn.addEventListener("click", () => {
  localStorage.removeItem("quizUser");
  window.location.href = "index.html";
});

showQuestion();
