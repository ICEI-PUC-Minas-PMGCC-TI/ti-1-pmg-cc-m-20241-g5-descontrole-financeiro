const questions = [
    {
        question: "Esse é o texto de uma pergunta de numero X",
        answers: [
            {text: "Essa é uma resposta", correct: false},
            {text: "Essa é uma outra resposta", correct: true},
            {text: "Essa é mais uma outra resposta", correct: false}
        ]
    },
    {
        question: "Esse é o texto de mais uma pergunta de numero X",
        answers: [
            {text: "Essa é uma resposta diferente", correct: true},
            {text: "Essa é uma outra resposta", correct: false},
            {text: "Essa é mais uma outra resposta", correct: false}
        ]
    },
    {
        question: "Esse é o texto de mais uma pergunta de numero X",
        answers: [
            {text: "Essa é uma resposta diferente", correct: true},
            {text: "Essa é uma outra resposta", correct: false},
            {text: "Essa é mais uma outra resposta", correct: false}
        ]
    },
    {
        question: "Esse é o texto de mais uma pergunta de numero X",
        answers: [
            {text: "Essa é uma resposta diferente", correct: false},
            {text: "Essa é uma outra resposta", correct: true},
            {text: "Essa é mais uma outra resposta", correct: false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0; 
let score = 0;

function startQuiz () {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
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
        })
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
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach( button => {
        
    })
}
startQuiz();
