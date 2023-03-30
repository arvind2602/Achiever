const quizdata=[
     {question: " Which of the following is not an error of commission?  ",
    a: " Overcasting of sales book.",
    b: " Credit sales to Ramesh Rs. 5,000 credited to his account. ",
    c: " Wrong balancing of machinery account. ",
    d: "Cash sales not recorded in cash book. ",
    correct: "d",
    },
    {question: "  Goods lost by fire should be credited to:  ",
    a: "Trading A/c ",
    b: " Loss by Fire A/c",
    c: " Sales A/c",
    d: "  Profit & Loss A/c",
    correct: "a",
    },

    {question: " Sales of Rs.10,000 recorded as Rs. 1,000 is an example of:  ",
    a: "Compensating Error ",
    b: " Errors of principle",
    c: "  Errors of omission",
    d: "Errors of commission ",
    correct: "a",
    },

    {question: " How many methods are there for preparing Trial Balance –  ",
    a: " One",
    b: "Three ",
    c: "Four ",
    d: "None of above ",
    correct: "c",
    },

    {question: "  If the trial balance agrees, it implies that:  ",
    a: "there is no error in the books. ",
    b: " there may be two sided errors in the book.",
    c: "there may be one sided error in the books. ",
    d: "there may be both two sided and one sided errors in the books. ",
    correct: "b",
    },
    {question: "  If wages paid for installation of new machinery is debited to wages account, it is ",
    a: "  an error or commission.",
    b: "  an error of principle",
    c: "a compensating error. ",
    d: "an error of omission ",
    correct: "b",
    },

    {question: " A Trial Balance is prepared to  ",
    a: "Ensure Arithmetical accuracy ",
    b: " Locate Errors of Principle",
    c: " Locate Errors of omission ",
    d: "Locate Errors of commission ",
    correct: "a",
    },

    {question: "  Goods worth Rs.100 given as charity should be credited to   ",
    a: " Purchase Account ",
    b: " Sales Accounts ",
    c: "Charity Accounts ",
    d: "None of the options ",
    correct: "c",
    },


    {question: " If the trial balance does not tally after many efforts then following Account is opened  ",
    a: "Purchase Account ",
    b: " Suspense Account",
    c: " Sales Account",
    d: " None of these",
    correct: "b",
    },

    {question: " Errors are rectified in this book  ",
    a: " Ledger book",
    b: " Journal proper",
    c: " Trial balance ",
    d: "None of these. ",
    correct: "b",
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