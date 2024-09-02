const questions = [
    {
        question: "In which year KEC was established?",
        answers:[
            {text:"1984",correct: false},
            {text:"1994",correct: false},
            {text:"1986",correct: true},
            {text:"1988",correct: false},
        ]
    },
    {
        question: "Where is KEC located?",
        answers:[
            {text:"Salem",correct: false},
            {text:"Perundurai",correct: true},
            {text:"hosur",correct: false},
            {text:"Coimbatore",correct: false},
        ]

    },
    {
        question: "The is Convention center is ___ largerst Convention center in Asia",
        answers:[
            {text:"2nd",correct: true},
            {text:"1st",correct: false},
            {text:"3rd",correct: false},
            {text:"None",correct: false},
        ]
    },
    {
        question: "The name of Mechanical department Seminar hall",
        answers:[
            {text:"Jamsetji Tata",correct: false},
            {text:"Swami Vivekanada",correct: true},
            {text:"Kalingarayan",correct: false},
            {text:"Homi J. Bhaba",correct: false},
        ]
    },
    {
        question: "The best department of KEC",
        answers:[
            {text:"EIE",correct: false},
            {text:"ECE",correct: false},
            {text:"MECH",correct: true},
            {text:"MTS",correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton= document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score= 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}    
function showQuestion(){
    reserState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo +". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML= answer.text;
            button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}


function reserState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn= e.target;
    const isCorrect=selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display ="block";
}

function showScore(){
    reserState()
    questionElement.innerHTML = 'You scored '+score+'out of '+(questions.length);
    nextButton.innerHTML='Play Again';
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion()
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();
