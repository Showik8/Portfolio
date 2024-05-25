const quizCont = document.createElement(`div`);
const mainc = document.getElementById(`cont`);
const quizbtn = document.getElementById(`quize`);
quizbtn.addEventListener(`click`, quize);

let currentQuestion = null;
let currentQuiz = null;
let score = 0;

const createBttn = document.getElementById(`crQuize`);

function quize() {
  mainc.innerHTML = "";
  quizbtn.classList.add(`hide`);
  createBttn.classList.add(`hide`);
  quizCont.classList.add(`quizes`);
  mainc.appendChild(quizCont);
  quizCont.innerHTML = ``;
  let h1 = document.createElement(`h1`);
  h1.innerText = `Choose Quiz`;
  quizCont.appendChild(h1);
  let ul = document.createElement(`ul`);
  const quizes = getLocalStorageValue(QUIZES_KEY);
  for (let quiz of quizes) {
    let li = document.createElement(`li`);
    let div = document.createElement(`div`);
    let h2 = document.createElement(`h2`);
    h2.innerText = quiz.name;
    let btn = document.createElement(`button`);
    btn.innerText = `Click To Start!!!`;
    btn.innerText = `Click`;
    btn.id = quiz.name;
    btn.addEventListener(`click`, () => startQuiz(quiz.id));
    div.appendChild(h2);
    div.appendChild(btn);
    li.appendChild(div);
    ul.appendChild(li);
  }
  quizCont.appendChild(ul);
}

function startQuiz(quizId) {
  const quiz = getQuizById(quizId);
  currentQuiz = quiz;
  const firstQuesion = quiz.questions[0];
  const questionHtml = generateQuestionHtml(firstQuesion);
  currentQuestion = firstQuesion;
  mainc.innerHTML = questionHtml;
}

function renderResultView() {
  const html = `
    <h2>You answered <b>${score}</b> questions from ${currentQuiz.questions.length}</h2>
    <button onClick="quize()">Try other quizes</button>
  `;
  mainc.innerHTML = html;
  score = 0;
  currentQuestion = null;
  currentQuiz = null;
}

function checkAnswer(element) {
  const selectedAnswer = currentQuestion.answers.find(
    (answer) => answer.title === element.id
  );
  if (selectedAnswer && selectedAnswer.correct) {
    element.classList.add("correct");
    score++;
  } else {
    element.classList.add("wrong");
  }
  element.parentNode.childNodes.forEach((e) => {
    e.disabled = true;
  });
  if (!currentQuestion.nextId) {
    renderResultView();
  }
}

function renderNextQuestion() {
  const nextQuestionId = currentQuestion.nextId;
  const nextQuestion = currentQuiz.questions.find(
    (question) => question.id === nextQuestionId
  );
  const nextQuestionHtml = generateQuestionHtml(nextQuestion);
  currentQuestion = nextQuestion;
  mainc.innerHTML = nextQuestionHtml;
}

function generateQuestionHtml(question) {
  return `
      <div class="questions">
        <h2>${question.question}</h2>
        <hr />
        <div class="answcont">
          ${question.answers.map((answer) => {
            return `
                <button id="${answer.title}" onclick="checkAnswer(this)" class="answers">
                  ${answer.value}
                </button>`;
          })}
        </div>
        ${
          question.nextId
            ? '<button onclick="renderNextQuestion()">Next</button>'
            : ""
        }
      </div>
    `;
}
