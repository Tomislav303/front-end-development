const quizData = {
    "quiz": {
        "q1": {
            "question": "Which one is correct team name in NBA?",
            "options": [
                "New York Bulls",
                "Los Angeles Kings",
                "Golden State Warriros",
                "Huston Rocket"
            ],
            "answer": "Huston Rocket"
        },
        "q2": {
            "question": "'Namaste' is a traditional greeting in which Asian language?",
            "options": [
                "Hindi",
                "Mandarin",
                "Nepalese",
                "Thai"
            ],
            "answer": "Hindi"
        },
        "q3": {
            "question": "The Spree river flows through which major European capital city?",
            "options": [
                "Berlin",
                "Paris",
                "Rome",
                "London"
            ],
            "answer": "Berlin"
        },
        "q4": {
            "question": "Which famous artist had both a 'Rose Period' and a 'Blue Period'?",
            "options": [
                "Pablo Picasso",
                "Vincent van Gogh",
                "Salvador Dalí",
                "Edgar Degas"
            ],
            "answer": "Pablo Picasso"
        }
    }
};

const quizContainer = document.getElementById('quiz');

function generateQuiz() {
    for (const key in quizData.quiz) {
        const questionData = quizData.quiz[key];
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `
            <div class="question">${questionData.question}</div>
            ${questionData.options.map(option => `
                <label>
                    <input type="radio" name="${key}" value="${option}" ${getCheckedState(key, option)}>
                    ${option}
                </label>
            `).join('')}
        `;
        quizContainer.appendChild(questionElement);
    }
}

function getCheckedState(questionKey, option) {
    const storedAnswers = JSON.parse(localStorage.getItem('quizAnswers')) || {};
    return storedAnswers[questionKey] === option ? 'checked' : '';
}

document.getElementById('submit').addEventListener('click', () => {
    const answers = {};
    for (const key in quizData.quiz) {
        const selectedOption = document.querySelector(`input[name="${key}"]:checked`);
        if (selectedOption) {
            answers[key] = selectedOption.value;
        }
    }
    localStorage.setItem('quizAnswers', JSON.stringify(answers));
    alert('Your answers have been saved!');
});

window.onload = generateQuiz;