const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}, 
{  question: " In RESEARCH R means?",
a: "Role",
b: " Retain",
c: " Relly",
d: "Round",
correct: "b",
},
{question: "  In the word RESEARCH A means?",
a: "Articulate ",
b: "Artist ",
c: "Article ",
d: "None of the above ",
correct: "a",
},
{question: " Research is derived from ?",
a: " Latin",
b: " Indian",
c: "Greak ",
d: "Japanizes ",
correct: "a",
},
{question: " Who defined  Research  as  systematized effort to gain new knowledge   ?",
a: " Tom & Zerry",
b: " Redman and Mory",
c: "F.W Taylor ",
d: "Ross taylor ",
correct: "b",
},
{
    question: " Which of the following is the Objective of the Research  ?",
a: "To become familiar with a phenomenon ",
b: "  To test a hypothesis of a causal relationship between variables",
c: "To determine the frequency with which something occurs or with it is associated with something else. ",
d: "  All of the above",
correct: "d",
},
{
    question: "  Research is basically ?",
a: "a methodology of enquiry ",
b: "search of truth ",
c: "a systematic exploration of facts ",
d: "All of the above ",
correct: "d",
},
{
    question: " A test of research aptitude for candidates of the UGC NET, is aimed at  ?",
a: "providing basic idea of search to the candidates ",
b: "Screening the persons having scientific bent of mind ",
c: " providing a database of  future  scientists of the country to the Government ",
d: "putting obstacles to the candidates ",
correct: "b",
},
{
    question: " The main purpose of research in education is to ?",
a: "help in individuals personal growth  ",
b: "  increase the social prestige of an individual",
c: " increase individuals market value of jobs ",
d: "help the individual to become an eminent educationist",
correct: "a",
},
{
    question: "  Where is the objective observation used?",
a: "In conducting experiments ",
b: "In research ",
c: "In normal behaviour  ",
d: " In almost all the situations ",
correct: "a",
},
{
    question: "  Inferring about the whole population on on the basis of the observations made on a small part is called ?",
a: " deductive inference ",
b: " inductive inference",
c: "objective inference ",
d: "pseudo-inference ",
correct: "b",
},
{
    question: " A hypothesis is a ?",
a: "Tentative statement whose validity is still to be tested ",
b: "Supposition which is based on the past experiences ",
c: " Statement of fact ",
d: "  All of the above",
correct: "a",
},
{question: "  Can a problem be stated? ?",
a: "  By putting forward a question",
b: " Making a statment which is declarative in nature ",
c: " Both A and B ",
d: "None of the above ",
correct: "a",
},
{
    question: "  What do you mean by an assumption ?",
a: " It is a framework in which research work has to be done ",
b: " It simplifies the logical process of arriving at the solution ",
c: "It is a restrictive condition ",
d: " None of the above ",
correct: "b",
},
{
    question: "  A null hypothesis is  ?",
    a: "  hypothesis of no difference",
    b: " Hypothesis that assigns value of zero to the variable",
    c: "Hypothesis of zero significance ",
    d: "None of the above ",
    correct: "a",
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