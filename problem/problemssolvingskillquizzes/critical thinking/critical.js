const quizData = [{
    question: " Which of the following questions should you ask when you observe a problem?",
    a: "What do I hear/see/smell?" ,
    b: " Who is to blame? ",
    c: "What is my gut reaction?",
    d: " Both a and c",
    correct: "d",
},{question: "When a problem arises, you should... ",
a: " Solve it as soon as possible.",
b: " Take time to observe the situation and discover the cause of the issue. ",
c: " Walk away; it is most likely not your responsibility.",
d: "Ask your friends what they would do. ",
correct: "b",
},
{question: " Doing which of the following can expand your thinking as well as help you gather new information and discover new insights?",
a: " Silently observing the situation.",
b: "Silently observing the situation. ",
c: "  Taking a moment for silent contemplation.",
d: " Asking questions.",
correct: "d",
},
{question: " What is an assumption?  ",
a: "A perspective you may have. ",
b: "An idea you take for granted. ",
c: "A piece of information you have researched. ",
d: "The answer to a question. ",
correct: "a",
},
{question: " Which three actions should you take to analyze information?  ",
a: "Compare, contrast and connect. ",
b: "Prioritize, pursue and persuade. ",
c: "Question, quiz and quarrel. ",
d: "Navigate, nurture and negotiate. ",
correct: "a",
},
{question: " In school, where are you evaluated academically?  ",
a: "On stage, when you are in the school play. ",
b: "On the football field, when you fumble the ball. ",
c: " In the lunch room, when you are allowed to sit with the popular crowd. ",
d: "On your report card through grades and comments. ",
correct: "d",
},
{question: "What should you do when you make a mistake?   ",
a: "Blame the others involved. ",
b: "Don't think about it ever again. ",
c: "Examine what you learned from it. ",
d: "Lecture others about it. ",
correct: "c",
},
{question: "Which of the following skillsets is most important when entering the workforce?   ",
a: "Communication skills. ",
b: "Managerial skills. ",
c: "Interpersonal skills. ",
d: "All are equally important. ",
correct: "d",
},{question: "What is usually the most important question you can ask in any given situation?   ",
a: "How much money can I make? ",
b: "Who is responsible? ",
c: "Why? ",
d: "Can I accomplish this? ",
correct: "d",
},
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);