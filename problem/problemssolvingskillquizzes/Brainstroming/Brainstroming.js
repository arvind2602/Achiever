const quizData = [{
    question: "Which of the following are benefits of brainstorming when compared to nominal group technique?",
    a: "Brainstorming is more fun" ,
    b: "Brainstorming can create a positive organizational climate",
    c: "Bhat is my gut reaction?",
    d: "All of the above",
    correct: "d",
},{question: "Groupthink can be combatted in which of the following ways? ",
a: "The team leader could withhold his or her viewpoint during team discussion",
b: "The devil's advocate role could be assigned to a specific team member ",
c: "Team members could engage in cohesiveness-building training",
d: "Both a and b ",
correct: "d",
},
{question: "Team creativity can be promoted in which of the following ways?",
a: "Establishing a competitive environment to promote creative ideas",
b: "Establishing challenges for the team",
c: "Evaluating ideas during the idea generation stage",
d: "Stressing deadlines to encourage intensity and focus",
correct: "b",
},
{question: "Which of the following is an effective technique for dealing with troublesome group members?",
a: "Embrace their disruptive behavior ",
b: "Use the same behaviors as the disruptive member to demonstrate why their behaviors are flawed",
c: "Create an environment where the disruptive member does not feel welcome",
d: "Confront the person directly",
correct: "d",
},
{question: "Goals work best for building teams when  ",
a: "They are clearly stated",
b: "Prioritize, pursue and persuade. ",
c: "Question, quiz and quarrel. ",
d: "No goal is shared by every member on the team ",
correct: "a",
},
{question: "Which of the following is not a way to establish team identity? ",
a: "Creating a team name",
b: "Creating a uniform style of dress ",
c: "Creating group rituals ",
d: "Creating competition among group members for prizes and awards given to the best team member ",
correct: "d",
},
{question: "Creating competition among group members for prizes and awards given to the best team member  ",
a: "Criteria development",
b: "Identification of the problem ",
c: "Analysing the problem ",
d: "Evaluating problem solutions ",
correct: "c",
},
{question: "Consensus decision making means that  ",
a: "Every group member's preferred choice will be selected by the group",
b: "All members agree to the final decision or group choice ",
c: "All legitimate concerns of group members are addressed. ",
d: "Both b and c ",
correct: "d",
},{question: "Majority rule has which of the following disadvantages? ",
a: "It is time consuming to arrive at a majority decision",
b: "Majorities make slow mythological decisions ",
c: "A dominance power dynamic can emerge",
d: "All of the above",
correct: "c",
},
{question: "Groupthink is ",
a: "A process where group members gather to decide issues",
b: "A process of group members stressing disagreement and scepticism",
c: "A process of group members stressing cohesiveness and agreement instead of scepticism and optimum decision making",
d: "A process of breaking rigid thinking by placing a problem in a different frame of reference",
correct: "c"},
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
