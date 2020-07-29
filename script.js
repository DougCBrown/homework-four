const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionsElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame);

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    showQuestions(suffledQuestions[currentQuestionsIndes])
} 

function showQuestions(question) {
    questionsElement.innerText = question.question

}

function selectAnswer() {

}

const questions = [
    {
        questions: 'what is 2 + 2',
        answere: [
            { text: '4', correct: true},
            { text: '22', correct: false}
        ]
    }
]