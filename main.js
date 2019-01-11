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

function cleaner() {
    while(card.firstChild) {
        card.removeChild(card.firstChild);
    }
}

function getQuestion() {
    cleaner();
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

    // TODO: RESET THE CARD
    // target the children and delete them 
    // if an element is already there (a p for example)
    // card.remove(question);
    // cleaner()
}

function getAnswer(number) {
    let answer = document.createElement('p');
    answer.innerHTML = questionArray[number].answer;
    card.appendChild(answer);
}

function showAnswerButton(number) {
    const getAnswerBtn = document.createElement('button');
    getAnswerBtn.innerText = 'Show Answer';
    //append button to the card element
    
    card.appendChild(getAnswerBtn);
    getAnswerBtn.addEventListener('click', function() {
        getAnswer(number);
        this.style.display = "none";
    });
}

// when we click on show answer button it will disappear
// attach a class that does visibility: none;

// we target answer button and add an event handler to it