const quizdata = [
    {
        question: " The following are methods used to test hypotheses except:",
        a: "traditional (computed value) method ",
        b: "p-value method ",
        c: " confidence interval method ",
        d: " survey method ",
        correct: "d",
    },

    {
        question: " What hypothesis states equality or no difference, or no relationship/effect?  ",
        a: "statistical hypothesis ",
        b: " null hypothesis ",
        c: "alternative hypothesis ",
        d: " all of above ",
        correct: "b",
    },


    {
        question: "What hypothesis states no equality or existence of differences, relationship, or effect?   ",
        a: "statistical hypothesis ",
        b: " null hypothesis ",
        c: "alternative hypothesis ",
        d: " none of above ",
        correct: "c",
    },
    {
        question: " Which hypothesis is generally formulated to look for evidence to support a claim called a research hypothesis?   ",
        a: "statistical hypothesis ",
        b: "null hypothesis  ",
        c: "alternative hypothesis ",
        d: " all of above ",
        correct: "c",
    },
    {
        question: " The following are methods used to test hypotheses except:",
        a: "traditional (computed value) method ",
        b: "p-value method ",
        c: " confidence interval method ",
        d: " survey method ",
        correct: "d",
    },

    {
        question: " What hypothesis states equality or no difference, or no relationship/effect?  ",
        a: "statistical hypothesis ",
        b: " null hypothesis ",
        c: "alternative hypothesis ",
        d: " all of above ",
        correct: "b",
    },


    {
        question: "What hypothesis states no equality or existence of differences, relationship, or effect?   ",
        a: "statistical hypothesis ",
        b: " null hypothesis ",
        c: "alternative hypothesis ",
        d: " none of above ",
        correct: "c",
    },
    {
        question: " Which hypothesis is generally formulated to look for evidence to support a claim called a research hypothesis?   ",
        a: "statistical hypothesis ",
        b: "null hypothesis  ",
        c: "alternative hypothesis ",
        d: " all of above ",
        correct: "c",
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
    function () {
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