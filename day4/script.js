const quizData = [
    {
        question: "Q1.which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JS",
        correct: "d",
    },
    {
        question: "Q2.which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JS",
        correct: "d",
    },
    {
        question: "Q3.which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JS",
        correct: "d",
    },
    {
        question: "Q4.which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JS",
        correct: "d",
    },
];

const quiz= document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl= document.getElementById('question');
const a_text= document.getElementById('a_text');
const b_text= document.getElementById('b_text');
const c_text= document.getElementById('c_text');
const d_text= document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

    deselectAnswer();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function deselectAnswer(){
    answerEls.forEach(answerEls => answerEls.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerE1 => {
        if (answerE1.checked) {
            answer = answerE1.id;
            
        }
    })
    return answer
}

submitBtn.addEventListener('click', () =>{
    const answer = getSelected();
    if(answer){
        if (answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else {
            quiz.innerHTML = `
            <h2> You answered ${score}/${quizData.length} questions correctly</h2>

            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})