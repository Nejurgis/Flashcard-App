const questionArray = [{
        question: 'What does HTML stand for?',
        answer: 'Hyper Text Markup Language'
    },
    {
        question: 'What is RubberDucking?',
        answer: 'Explaining your code to a rubber duck, in order to Debug it better'
    },
    {
        question: 'What is a DOM?',
        answer: 'DOM is the Document Object Model, which is basically a tree of HTML elements in the page'
    },
    {
        question: 'How do you create an element in the DOM?',
        answer: 'element.createElement("nameOfElement")'
    },
]

const card = document.getElementById('card');
const form = document.getElementById('formContainer');


function getQuestion() {
    cleaner(card);
    toggleFormVisibility();

    let randomNumber = Math.floor(Math.random() * questionArray.length);
    // create p
    let question = document.createElement('p');
    // fetch the text from the questionArray
    // append the text to the paragraph
    question.innerHTML = questionArray[randomNumber].question;
    // target the element which will inherit the paragraph
    card.appendChild(question);
    // create a show answer button
    showAnswerButton(randomNumber);
}

function getAnswer(number) {
    let answer = document.createElement('p');
    answer.innerHTML = questionArray[number].answer;
    card.appendChild(answer);
}

function showAnswerButton(number) {
    const getAnswerBtn = document.createElement('button');
    getAnswerBtn.innerText = 'Show Answer';

    card.appendChild(getAnswerBtn);
    getAnswerBtn.addEventListener('click', function () {
        getAnswer(number);
        this.style.display = "none";
    });
}

function displayForm() {
    cleaner(card);
    form.setAttribute('class', 'Visible');
}

function addQuestion() {
    event.preventDefault();
    const questionInput = document.getElementById('questionInput');
    const answerInput = document.getElementById('answerInput');
    questionArray.push({
        question: questionInput.value,
        answer: answerInput.value
    })
    questionInput.value = null;
    answerInput.value = null;
    toggleFormVisibility();
}

function cleaner(item) {
    while (item.firstChild) {
        item.removeChild(item.firstChild);
    }
}

function toggleFormVisibility() {
    if (form.className === 'Visible') {
        form.setAttribute('class', 'notVisible');
    }
}