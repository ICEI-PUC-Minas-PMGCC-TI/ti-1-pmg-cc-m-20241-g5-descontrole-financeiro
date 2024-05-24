const questions = [
    {
        question: "O que é um investimento de renda fixa?",
        answers: [
            {text: "Um investimento com rendimento previsível", correct: true},
            {text: "Um investimento com rendimento variável", correct: false},
            {text: "Um investimento em ações", correct: false}
        ]
    },
    {
        question: "Por que é importante ter uma reserva de emergência?",
        answers: [
            {text: "Para cobrir despesas inesperadas", correct: true},
            {text: "Para investir em ações de alto risco", correct: false},
            {text: "Para fazer compras não planejadas", correct: false}
        ]
    },
    {
        question: "Qual é a melhor prática para controlar os gastos mensais?",
        answers: [
            {text: "Elaborar um orçamento e segui-lo", correct: true},
            {text: "Gastar mais do que ganha", correct: false},
            {text: "Evitar anotar despesas", correct: false}
        ]
    },
    {
        question: "Qual é a principal diferença entre renda fixa e renda variável?",
        answers: [
            {text: "Renda fixa tem retorno previsível, renda variável não", correct: true},
            {text: "Renda variável é sempre mais segura", correct: false},
            {text: "Renda fixa nunca gera lucro", correct: false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0; 
let score = 0;
let correctQuestions = []; 

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    correctQuestions = [];
    nextButton.innerHTML = "Próximo";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("anw-btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
        correctQuestions.push(questions[currentQuestionIndex].question); 
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct == "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
    nextButton.innerHTML = "Reiniciar";
    nextButton.style.display = "block";
    saveToLocalStorage(); 
}

function saveToLocalStorage() {
    localStorage.setItem("score", score);
    localStorage.setItem("correctQuestions", JSON.stringify(correctQuestions));
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
