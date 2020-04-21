// Set the body to a variable
var body = document.body;

// Create all necessary elements
var h1El = document.createElement("h1");
var h2El = document.createElement("h2");
var h2El = document.createElement("h3");
var questionsEl = document.createElement("div");
var answersEl = document.createElement("div");
var listEl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

// Store our li elements in a variable
var listItems = document.getElementsByTagName("li");

// Set the text content of relevant elements
h1El.textContent = "Deep Space Nine Challenge";
h2El.textContent = "Try to answer for the highest score before time runs out!";
questionsEl.textContent = "";
answersEl.textContent = "Choose One";
li1.textContent = "";
li2.textContent = "";
li3.textContent = "";
li4.textContent = "";

// Append all of our elements
body.appendChild(h1El);
body.appendChild(h2El);
body.appendChild(h3El);
body.appendChild(infoEl);
infoEl.appendChild(nameEl);
body.appendChild(answersEl);
answersEl.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

// Questions and Answers?
const start = document.getElementById("Let's Start!");

const quiz = document.getElementById("quiz");

const question = document.getElementById("question");

const counter = document.getElementById("counter");

//const timeGauge = document.getElementById("timeGauge");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");

const progress = document.getElementById("progress");

const scoreContainer = document.getElementById("scroeContainer");

let questions = [
    {
        question: "Who is Quark's step-father?",
        choiceA: "Lt. Worf",
        choiceB: "Rom",
        choiceC: "Grand Negus Zek",
        choiceD: "Liquidator Brunt",
        correct: "C"
    },
    {
        question: "What alien species is Lt. Worf?",
        choiceA: "Vulcan",
        choiceB: "Klingon",
        choiceC: "Romulan",
        choiceD: "Betazoid",
        correct: "B"
    },
    {
        question: "When did Captain Sisko's wife die?",
        choiceA: "At the Battle of Wolf 359",
        choiceB: "At their wedding",
        choiceC: "When she became a shape-shifter",
        choiceD: "When she lied about being human",
        correct: "A"
    },
    {
        question: "Who does Kira hate?",
        choices: ["Dr. Bashir", "Lt. Worf", "Jadzia Dax", "Gul Dukat"],
        correct: "D"
    },
];

let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;

var txt;
var r = confirm("Press a button!");
if (r == true) {
    txt = "You pressed OK!";
} else {
    txt = "You pressed Cancel!";
}

function renderQuestion() {
    let questionList = questions[runningQuestonIndex].choices.map(question) => {
        return `<button class="answerButton" onclick="checkAnswer('${question}')">${question}</button>`
    };
    quiz.innerHTML = `${questions[runningQuestionIndex].question}${questionList.join("")}`

}

//function answerIsCorrect() {
//document.getElementById(runningQuestionIndex).textContent
//}

var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("header");

var secondsLeft = 40;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);
}

function sendMessage() {
    timeEl.textContent = " ";

    var scoreEl = document.createElement("");

    //scoreEl.setAttribute("src", "images/image_1.jpg");
    mainEl.appendChild(scoreEl);

}
function startQuiz() {
    setTime();
    renderQuestion();

}




