// Variables globales de l'application
let currentQuizSet = 1; // 1 pour Test 1, 2 pour Test 2
let currentQuizIndex = 0;
let currentQuestionIndex = 0;
let userAnswers = [];
let quizResults = [];
let startTime;
let feedbackTimeout;

// État de l'application
const AppState = {
    HOME: 'home',
    QUIZ: 'quiz',
    RESULTS: 'results',
    DETAILED_RESULTS: 'detailed'
};
let currentState = AppState.HOME;

// Initialisation de l'application
document.addEventListener('DOMContentLoaded', function() {
    showPage('home-page');
    loadScoreHistory();
});

// Fonctions de navigation entre les pages
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}

// Démarrer un set de quiz
function startQuizSet(setNumber) {
    currentQuizSet = setNumber;
    currentQuizIndex = 0;
    currentQuestionIndex = 0;
    userAnswers = [];
    quizResults = [];
    startTime = Date.now();
    
    currentState = AppState.QUIZ;
    showPage('quiz-page');
    loadQuiz();
}

// Charger le quiz actuel
function loadQuiz() {
    const quizData = getCurrentQuizData();
    console.log('Quiz data loaded:', quizData);
    console.log('Current quiz index:', currentQuizIndex);
    const quiz = quizData[currentQuizIndex];
    console.log('Current quiz:', quiz);
    
    // Mettre à jour les informations du header
    document.getElementById('current-quiz').textContent = `Section ${quiz.id}: ${quiz.title}`;
    const setNames = {
        1: 'Test 1 - Questions Essentielles',
        2: 'Test 2 - Questions Avancées',
        3: 'Test 3 - Situations Pratiques',
        4: 'Test 4 - Modules Complets'
    };
    document.getElementById('quiz-set-info').textContent = setNames[currentQuizSet];
    
    // Initialiser les réponses pour ce quiz
    if (!userAnswers[currentQuizIndex]) {
        userAnswers[currentQuizIndex] = new Array(quiz.questions.length).fill(null);
    }
    
    loadQuestion();
}

// Charger la question actuelle
function loadQuestion() {
    const quizData = getCurrentQuizData();
    const quiz = quizData[currentQuizIndex];
    const question = quiz.questions[currentQuestionIndex];
    
    // Mettre à jour la barre de progression
    const totalQuestions = quiz.questions.length;
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
    document.getElementById('progress-text').textContent = 
        `Question ${currentQuestionIndex + 1} / ${totalQuestions}`;
    
    // Afficher la question
    document.getElementById('question-text').textContent = question.question;
    
    // Créer les options de réponse
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'answer-option';
        answerDiv.onclick = () => selectAnswer(index);
        answerDiv.style.pointerEvents = 'auto'; // S'assurer que les clics sont activés
        
        // Marquer comme sélectionné si déjà choisi
        const currentAnswer = userAnswers[currentQuizIndex][currentQuestionIndex];
        if (currentAnswer === index) {
            answerDiv.classList.add('selected');
        }
        
        answerDiv.innerHTML = `
            <div class="answer-letter">${String.fromCharCode(65 + index)}</div>
            <div class="answer-text">${option}</div>
        `;
        
        answersContainer.appendChild(answerDiv);
    });
    
    // Mettre à jour les boutons de navigation
    updateNavigationButtons();
}

// Sélectionner une réponse avec feedback instantané
function selectAnswer(answerIndex) {
    // Éviter les clics multiples
    const options = document.querySelectorAll('.answer-option');
    if (options[0].classList.contains('correct-instant') || options[0].classList.contains('incorrect-instant')) {
        return;
    }
    
    userAnswers[currentQuizIndex][currentQuestionIndex] = answerIndex;
    
    // Obtenir la bonne réponse
    const quizData = getCurrentQuizData();
    const quiz = quizData[currentQuizIndex];
    const correctAnswer = quiz.questions[currentQuestionIndex].correct;
    
    // Appliquer le feedback visuel
    options.forEach((option, index) => {
        option.style.pointerEvents = 'none'; // Désactiver les clics
        
        if (index === answerIndex) {
            // Réponse sélectionnée
            if (index === correctAnswer) {
                option.classList.add('correct-instant');
            } else {
                option.classList.add('incorrect-instant');
            }
        } else if (index === correctAnswer && answerIndex !== correctAnswer) {
            // Montrer la bonne réponse si l'utilisateur s'est trompé
            setTimeout(() => {
                option.classList.add('show-correct');
            }, 300);
        }
    });
    
    // Réactiver les contrôles après un délai
    feedbackTimeout = setTimeout(() => {
        options.forEach(option => {
            option.style.pointerEvents = 'auto';
            option.classList.remove('correct-instant', 'incorrect-instant', 'show-correct');
            option.classList.toggle('selected', option === options[answerIndex]);
        });
        updateNavigationButtons();
    }, 2000);
    
    // Activer immédiatement le bouton suivant
    updateNavigationButtons();
}

// Mettre à jour les boutons de navigation
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    // Bouton précédent
    prevBtn.disabled = currentQuestionIndex === 0;
    
    // Bouton suivant
    const currentAnswer = userAnswers[currentQuizIndex][currentQuestionIndex];
    const quizData = getCurrentQuizData();
    const quiz = quizData[currentQuizIndex];
    
    if (currentQuestionIndex === quiz.questions.length - 1) {
        // Dernière question du quiz
        nextBtn.textContent = currentQuizIndex === quizData.length - 1 ? 
            'Terminer' : 'Quiz suivant →';
        nextBtn.disabled = currentAnswer === null;
    } else {
        // Question normale
        nextBtn.textContent = 'Suivant →';
        nextBtn.disabled = currentAnswer === null;
    }
}

// Question précédente
function previousQuestion() {
    if (feedbackTimeout) {
        clearTimeout(feedbackTimeout);
    }
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

// Question suivante
function nextQuestion() {
    if (feedbackTimeout) {
        clearTimeout(feedbackTimeout);
    }
    
    const quizData = getCurrentQuizData();
    const quiz = quizData[currentQuizIndex];
    
    if (currentQuestionIndex < quiz.questions.length - 1) {
        // Question suivante dans le même quiz
        currentQuestionIndex++;
        loadQuestion();
    } else {
        // Fin du quiz actuel
        if (currentQuizIndex < quizData.length - 1) {
            // Quiz suivant
            currentQuizIndex++;
            currentQuestionIndex = 0;
            loadQuiz();
        } else {
            // Fin de tous les quiz
            finishQuizSet();
        }
    }
}

// Terminer le set de quiz
function finishQuizSet() {
    calculateResults();
    showResults();
    saveScore();
}

// Calculer les résultats
function calculateResults() {
    const quizData = getCurrentQuizData();
    const setKey = `set${currentQuizSet}`;
    let totalCorrect = 0;
    let totalQuestions = 0;
    
    quizResults = [];
    
    quizData.forEach((quiz, quizIndex) => {
        let correct = 0;
        const results = [];
        
        quiz.questions.forEach((question, questionIndex) => {
            const userAnswer = userAnswers[quizIndex][questionIndex];
            const correctAnswer = question.correct;
            const isCorrect = userAnswer === correctAnswer;
            
            if (isCorrect) correct++;
            totalCorrect += isCorrect ? 1 : 0;
            totalQuestions++;
            
            results.push({
                question: question.question,
                options: question.options,
                userAnswer: userAnswer,
                correctAnswer: correctAnswer,
                isCorrect: isCorrect
            });
        });
        
        const percentage = Math.round((correct / quiz.questions.length) * 100);
        
        quizResults.push({
            quizId: quiz.id,
            title: quiz.title,
            correct: correct,
            total: quiz.questions.length,
            percentage: percentage,
            questions: results
        });
    });
    
    // Score global
    const overallPercentage = Math.round((totalCorrect / totalQuestions) * 100);
    quizResults.overallScore = {
        correct: totalCorrect,
        total: totalQuestions,
        percentage: overallPercentage,
        time: Date.now() - startTime
    };
}

// Afficher les résultats
function showResults() {
    currentState = AppState.RESULTS;
    showPage('results-page');
    
    const overallScore = quizResults.overallScore;
    
    // Score global
    document.getElementById('overall-percentage').textContent = `${overallScore.percentage}%`;
    document.getElementById('overall-score-text').textContent = getScoreMessage(overallScore.percentage);
    
    // Détail par quiz
    const breakdownContainer = document.getElementById('quiz-breakdown');
    breakdownContainer.innerHTML = '';
    
    quizResults.slice(0, -1).forEach(result => { // Exclure overallScore
        const resultDiv = document.createElement('div');
        resultDiv.className = `quiz-result ${getScoreClass(result.percentage)}`;
        
        resultDiv.innerHTML = `
            <div>
                <h4>Section ${result.quizId}: ${result.title}</h4>
                <p>${result.correct}/${result.total} bonnes réponses</p>
            </div>
            <div style="text-align: right;">
                <strong>${result.percentage}%</strong>
                <div>${getScoreEmoji(result.percentage)}</div>
            </div>
        `;
        
        breakdownContainer.appendChild(resultDiv);
    });
}

// Afficher les résultats détaillés
function showDetailedResults() {
    currentState = AppState.DETAILED_RESULTS;
    showPage('detailed-results-page');
    
    const container = document.getElementById('detailed-breakdown');
    container.innerHTML = '';
    
    quizResults.slice(0, -1).forEach(result => { // Exclure overallScore
        const quizDiv = document.createElement('div');
        quizDiv.innerHTML = `<h3>Section ${result.quizId}: ${result.title} (${result.percentage}%)</h3>`;
        
        result.questions.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = `question-review ${q.isCorrect ? 'correct' : 'incorrect'}`;
            
            let answersHtml = '';
            q.options.forEach((option, optIndex) => {
                let answerClass = 'neutral';
                let prefix = '';
                
                if (optIndex === q.correctAnswer) {
                    answerClass = 'correct-answer';
                    prefix = '✓ ';
                } else if (optIndex === q.userAnswer && !q.isCorrect) {
                    answerClass = 'user-incorrect';
                    prefix = '✗ ';
                }
                
                answersHtml += `
                    <div class="review-answer ${answerClass}">
                        <strong>${String.fromCharCode(65 + optIndex)}</strong>
                        ${prefix}${option}
                    </div>
                `;
            });
            
            questionDiv.innerHTML = `
                <h4>Question ${index + 1} ${q.isCorrect ? '✅' : '❌'}</h4>
                <p><strong>${q.question}</strong></p>
                <div class="review-answers">${answersHtml}</div>
            `;
            
            quizDiv.appendChild(questionDiv);
        });
        
        container.appendChild(quizDiv);
    });
}

// Cacher les résultats détaillés
function hideDetailedResults() {
    showResults();
}

// Recommencer le quiz
function restartQuiz() {
    startQuizSet(currentQuizSet);
}

// Retourner à l'accueil
function goHome() {
    currentState = AppState.HOME;
    showPage('home-page');
    loadScoreHistory();
}

// Sauvegarder le score
function saveScore() {
    const scores = JSON.parse(localStorage.getItem('quiz-scores') || '[]');
    const scoreData = {
        date: new Date().toISOString(),
        set: currentQuizSet,
        score: quizResults.overallScore,
        results: quizResults.slice(0, -1) // Sans overallScore
    };
    
    scores.unshift(scoreData); // Ajouter au début
    
    // Garder seulement les 10 derniers scores
    scores.splice(10);
    
    localStorage.setItem('quiz-scores', JSON.stringify(scores));
}

// Charger l'historique des scores
function loadScoreHistory() {
    const scores = JSON.parse(localStorage.getItem('quiz-scores') || '[]');
    const container = document.getElementById('scores-list');
    
    if (scores.length === 0) {
        document.getElementById('scores-history').style.display = 'none';
        return;
    }
    
    document.getElementById('scores-history').style.display = 'block';
    container.innerHTML = '';
    
    scores.forEach(score => {
        const scoreDiv = document.createElement('div');
        scoreDiv.className = `quiz-result ${getScoreClass(score.score.percentage)}`;
        scoreDiv.style.marginBottom = '10px';
        
        const date = new Date(score.date).toLocaleString('fr-FR');
        const time = Math.round(score.score.time / 1000);
        
        scoreDiv.innerHTML = `
            <div>
                <h4>Test ${score.set} - ${score.score.percentage}%</h4>
                <p>${date} • ${time}s • ${score.score.correct}/${score.score.total}</p>
            </div>
            <div style="text-align: right;">
                ${getScoreEmoji(score.score.percentage)}
            </div>
        `;
        
        container.appendChild(scoreDiv);
    });
}

// Fonctions utilitaires
function getCurrentQuizData() {
    switch(currentQuizSet) {
        case 1: return quizData.set1;
        case 2: return quizData.set2;
        case 3: return quizData.set3;
        case 4: return quizData.set4;
        default: return quizData.set1;
    }
}

function getScoreClass(percentage) {
    if (percentage >= 90) return 'excellent';
    if (percentage >= 77) return 'good';
    if (percentage >= 60) return 'average';
    return 'poor';
}

function getScoreMessage(percentage) {
    if (percentage >= 90) return '🏆 Expert - Vous maîtrisez parfaitement !';
    if (percentage >= 77) return '🎯 Avancé - Très bon niveau !';
    if (percentage >= 60) return '📈 Intermédiaire - Continuez à progresser !';
    return '🔄 Débutant - Révisez les fondamentaux !';
}

function getScoreEmoji(percentage) {
    if (percentage >= 90) return '🏆';
    if (percentage >= 77) return '🎯';
    if (percentage >= 60) return '📈';
    return '🔄';
}

// Gestion des raccourcis clavier
document.addEventListener('keydown', function(event) {
    if (currentState === AppState.QUIZ) {
        // Touches A, B, C, D pour les réponses
        if (event.key >= 'A' && event.key <= 'D') {
            event.preventDefault();
            const answerIndex = event.key.charCodeAt(0) - 65;
            const quizData = getCurrentQuizData();
            const quiz = quizData[currentQuizIndex];
            
            if (answerIndex < quiz.questions[currentQuestionIndex].options.length) {
                selectAnswer(answerIndex);
            }
        }
        // Flèches pour navigation
        else if (event.key === 'ArrowLeft' && !document.getElementById('prev-btn').disabled) {
            event.preventDefault();
            previousQuestion();
        }
        else if (event.key === 'ArrowRight' && !document.getElementById('next-btn').disabled) {
            event.preventDefault();
            nextQuestion();
        }
        // Espace ou Entrée pour suivant
        else if ((event.key === ' ' || event.key === 'Enter') && !document.getElementById('next-btn').disabled) {
            event.preventDefault();
            nextQuestion();
        }
    }
});

// Animation de chargement pour les transitions
function animateTransition() {
    document.body.style.opacity = '0.8';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 200);
}

// Préchargement des quiz pour de meilleures performances
function preloadQuizData() {
    // Les données sont déjà chargées via quiz-data.js
    console.log('Quiz data loaded:', {
        set1: quizData.set1.length + ' quiz',
        set2: quizData.set2.length + ' quiz'
    });
}

// Initialiser le préchargement
preloadQuizData();