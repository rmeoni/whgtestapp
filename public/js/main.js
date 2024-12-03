//questions object
const questions = {
    first: {
        heading: 'How do you prefer using cannabis?',
        paragraph: '',
        options: {
            a: {
                text: 'Smoking',
                value: 'Flower'
            },
            b: {
                text: 'Eating',
                value: 'Edibles'
            },
            c: {
                text: 'Applying a topical',
                value: 'Topicals'
            },
            d: {
                text: 'All of the above',
                value: 'Active'
            }
        },
        button: ' '
    },
    second: {
        heading: 'What do you enjoy doing when medicated?',
        paragraph: '',
        options: {
            a: {
                text: 'Being active',
                value: 'Sativa'
            },
            b: {
                text: 'Relaxing',
                value: 'Hybrid'
            },
            c: {
                text: 'Sleeping',
                value: 'Indica'
            },
            d: {
                text: 'All of the above',
                value: 'Active'
            }
        },
        button: ' '
    },
    third: {
        heading: 'At what time are you most active?',
        paragraph: '',
        options: {
            a: {
                text: 'During the day',
                value: 'Day'
            },
            b: {
                text: 'During the night',
                value: 'Night'
            },
        },
        button: ' '
    },
    fourth: {
        heading: 'What\'s your level of tolerance?',
        paragraph: '',
        options: {
            a: {
                text: 'Low',
                value: 'Low'
            },
            b: {
                text: 'Middle',
                value: 'Middle'
            },
            c: {
                text: 'High',
                value: 'High'
            }
        },
        button: ' '
    },
    fifth: {
        heading: 'Do you have a Vegan or Lactose-free diet?',
        paragraph: '',
        options: {
            a: {
                text: 'Yes, I do!',
                value: 'Vegan'
            },
            b: {
                text: "No, I don't!",
                value: 'Active'
            },
        },
        button: ' '

    },
    sixth: {
        heading: "Which type of products are you interested in?",
        paragraph: "",
        options: {
            a: {
                text: 'THC only',
                value: 'THC'
            },
            b: {
                text: 'CBD only',
                value: 'CBD',
            },
            c: {
                text: 'Both THC and CBD',
                value: 'Active'
            },
        },
        button: ' '
    },
    seventh: {
        heading: "What's your age range?",
        paragraph: "(We ask this to give the best suggestion)",
        options: {
            a: {
                text: '18-24',
                value: 'Gen Z'
            },
            b: {
                text: '25-40',
                value: 'Millenials'
            },
            c: {
                text: '41-56',
                value: 'Gen X'
            },
            d: {
                text: '57+',
                value: 'Boomers II'
            },
            e: {
                text: 'Rather not say',
                value: 'Unknown'
            },
        },
        button: ' '
    }
};

//index to render the question with it's options
let questionIndex = 0;
let questionsNumbers = [];

//function that takes all the numbers' name of the question (first, second, etc.) and pushes it to questionsNumbers array.
const questionNumFunc = () => {
    for (let question in questions) {
        questionsNumbers.push(question);
    }
};
questionNumFunc();

//function to render the input buttons with the questions by index
const renderInputButtons = () => {
    //declaring the questions' variables
    let question = questions[questionsNumbers[questionIndex]].heading;
    let supportParagraph = questions[questionsNumbers[questionIndex]].paragraph;
    let options = questions[questionsNumbers[questionIndex]].options;
    let buttonText = questions[questionsNumbers[questionIndex]].button;

    const container = document.createElement('section');
    container.setAttribute('id', 'questionContainer');

    let header = document.createElement('h2');
    header.setAttribute('id', 'heading');
    header.innerText = question;
    container.appendChild(header);

    let paragraph = document.createElement('span');
    paragraph.setAttribute('id', 'supporting-p');
    paragraph.innerText = supportParagraph;
    header.appendChild(paragraph);

    for (let option in options) { //for each option in the question..
        //create the radio input element.
        let divElement = document.createElement('div');
        divElement.setAttribute('class', 'option');

        // Also create a label for the text of the option.
        let labelElement = document.createElement('label');
        labelElement.setAttribute('class', 'inputElement');
        labelElement.setAttribute('for', options[option].value);
        labelElement.innerHTML = `<span>${options[option].text}</span>`;
        divElement.appendChild(labelElement);

        let inputElement = document.createElement('input');
        inputElement.setAttribute('class', 'with-gap');
        inputElement.setAttribute('id', options[option].value);
        inputElement.setAttribute('type', 'radio');
        inputElement.setAttribute('name', 'option');
        inputElement.setAttribute('value', options[option].value);
        labelElement.prepend(inputElement);


        container.appendChild(divElement);

    };

    document.querySelector('main').prepend(container);
}

renderInputButtons();

//Function to remove all childrens of a div
const removeChildren = (domElement) => {
    while (domElement.firstChild) {
        domElement.removeChild(domElement.firstChild);
    }
}

//selecting the next question button and creating an empty array to push the value of the input
const nextQuestionButton = document.querySelector('.nextQuestionButton');
const response = ['Active'];

//function to shorten the amount of questions if the response is Flower or Topicals
const checkResponse = () => {
    if (questionIndex === 1) {
        if (response[1] === 'Flower') {
            questionsNumbers.splice(4, 2);
        } else if (response[1] === 'Topicals') {
            questionsNumbers.splice(4, 2);
            console.log(questionsNumbers);
        }
    }
}
//function to render the next question on click of the button and collect the user's answer
const renderNextQuestion = () => {
    let main = document.querySelector('main');
    let userInput = document.querySelector("input[name='option']:checked").value;
    checkResponse();
    //checking if the index is shorter than the amount of questions to render
    if (questionIndex < questionsNumbers.length - 1) {
        questionIndex += 1;
        removeChildren(main);
        removeButtonColor();
        renderInputButtons();
        inputActive();
        response.push(userInput);
        if (questionIndex == questionsNumbers.length - 1) {
            nextQuestionButton.innerText = 'Show Results';
        }
    } else {
        questionIndex = 0;
        removeChildren(main);
        nextQuestionButton.innerText = 'Share this test';
        response.push(userInput);
        displayProductsFiltered(response);//function that displays the products
        hurrayAnimation();
        insertFooter();
        addCopyToClip();
        console.log('no more questions');
    };
    console.log(response);
}

nextQuestionButton.addEventListener('click', renderNextQuestion);


//check if there is an input to change the color of the button

let questionHeader = document.querySelector('#questionContainer');

//function that changes the style of the button from ghost to solid

const removeButtonColor = () => {
    let buttonClass = document.querySelector(".nextQuestionButton").className;
    if (buttonClass == 'nextQuestionButton activeButton') {
        nextQuestionButton.classList.remove('activeButton');
    }
}

const activeButtonColor = () => {
    let buttonClass = document.querySelector(".nextQuestionButton").className;
    if (buttonClass !== 'nextQuestionButton activeButton') {
        nextQuestionButton.className += ' activeButton';
    }
}

//function that adds a "click" event listener to the displayed inputs
const inputActive = () => {
    let activeOption = document.getElementsByClassName("inputElement");
    let i;
    for (i = 0; i < activeOption.length; i++) {
        activeOption[i].addEventListener('click', activeButtonColor);
    }
}

inputActive();