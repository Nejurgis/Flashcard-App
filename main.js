const questionArray = [
    {
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


for (let i = 0; i < questionArray.length; i++) {
    console.log(questionArray[i]); 
}

const card = document.getElementById('card');

function getQuestion() {
    let randomNumber = Math.floor(Math.random() * questionArray.length);    
    // create p
    let question = document.createElement('p');
    // fetch the text from the questionArray
    // append the text to the paragraph
    question.innerHTML = questionArray[randomNumber].question;
    // target the element which will inherit the paragraph
    card.appendChild(question);
    // create a show answer button
    showAnswerButton();
}

function getAnswer(number){
    // create a buttn
    
    //display the answer
    let answer = document.createElement('p');
    answer.innerHTML = questionArray[number].answer;
    card.appendChild(answer);
}

function showAnswerButton(){
    const getAnswerBtn = document.createElement('button');
    getAnswerBtn.setAttribute('id', 'getAnswer');
    getAnswerBtn.innerText = 'Show Answer';
    //append button to the card element
    card.appendChild(getAnswerBtn);
    console.log(getAnswerBtn);
    // getAnswerBtn.addEventListener('click', alert('bla'));
}