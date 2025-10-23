document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const canvas = document.getElementById('connection-canvas');
    const ctx = canvas.getContext('2d');
    const diagramContainer = document.querySelector('.diagram-container');
    const stageItems = document.querySelectorAll('.stage-item');
    const elementItems = document.querySelectorAll('.element-item');
    const statusBar = document.getElementById('status-bar');
    const checkBtn = document.getElementById('check-btn');
    const clearBtn = document.getElementById('clear-btn');
    const resetBtn = document.getElementById('reset-btn');
    const showAnswersBtn = document.getElementById('show-answers-btn');
    const answerModal = document.getElementById('answer-modal');
    const modalClose = document.querySelector('.modal-close');

    // State
    let selectedStage = null;
    let userConnections = [];
// ... (rest of the file) ...
    // --- Event Listeners ---
    stageItems.forEach(item => item.addEventListener('click', handleStageClick));
    elementItems.forEach(item => item.addEventListener('click', handleElementClick));
    checkBtn.addEventListener('click', checkAnswers);
    clearBtn.addEventListener('click', clearCurrentConnections);
    resetBtn.addEventListener('click', resetAll);
    showAnswersBtn.addEventListener('click', openAnswerModal);
    modalClose.addEventListener('click', closeAnswerModal);
    answerModal.addEventListener('click', (e) => {
        if (e.target === answerModal) {
            closeAnswerModal();
        }
    });
    window.addEventListener('resize', resizeCanvasAndDraw);

    // --- Functions ---

    function openAnswerModal() {
        answerModal.style.display = 'flex';
    }

    function closeAnswerModal() {
        answerModal.style.display = 'none';
    }

    function handleStageClick(e) {
        const clickedStage = e.target;
        stageItems.forEach(item => item.classList.remove('selected'));
        clickedStage.classList.add('selected');
        selectedStage = clickedStage.dataset.id;
        updateStatusBar();
    }

    function handleElementClick(e) {
        if (!selectedStage) {
            alert('Please select a stage on the left first!');
            return;
        }
        const clickedElement = e.target;
        const elementId = clickedElement.dataset.id;
        const connection = { stage: selectedStage, element: elementId };

        const connectionIndex = userConnections.findIndex(
            c => c.stage === connection.stage && c.element === connection.element
        );

        if (connectionIndex > -1) {
            // Connection exists, so remove it
            userConnections.splice(connectionIndex, 1);
            clickedElement.classList.remove('connected');
        } else {
            // Connection doesn't exist, so add it
            userConnections.push(connection);
            clickedElement.classList.add('connected');
        }
        drawConnections();
        updateStatusBar();
    }

    function drawConnections() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#2196F3';
        ctx.lineWidth = 2;

        userConnections.forEach(conn => {
            const stageEl = document.querySelector(`.stage-item[data-id="${conn.stage}"]`);
            const elementEl = document.querySelector(`.element-item[data-id="${conn.element}"]`);

            if (stageEl && elementEl) {
                const startRect = stageEl.getBoundingClientRect();
                const endRect = elementEl.getBoundingClientRect();
                const containerRect = diagramContainer.getBoundingClientRect();

                const startX = startRect.right - containerRect.left;
                const startY = startRect.top + startRect.height / 2 - containerRect.top;
                const endX = endRect.left - containerRect.left;
                const endY = endRect.top + endRect.height / 2 - containerRect.top;

                ctx.beginPath();
                ctx.moveTo(startX, startY);
                ctx.lineTo(endX, endY);
                ctx.stroke();
            }
        });
    }

    function resizeCanvasAndDraw() {
        canvas.width = diagramContainer.clientWidth;
        canvas.height = diagramContainer.clientHeight;
        drawConnections();
    }

    function checkAnswers() {
        let correctCount = 0;
        userConnections.forEach(userConn => {
            const isCorrect = correctConnections.some(
                correctConn => correctConn.stage === userConn.stage && correctConn.element === userConn.element
            );
            if (isCorrect) {
                correctCount++;
            }
        });
        
        // The user mentioned 15 connections and 7.5 pts, but the provided map has 13.
        // I will calculate the score based on the provided map (13 connections).
        const points = (correctCount * 0.5).toFixed(1);
        statusBar.textContent = `Score: ${correctCount}/${TOTAL_CORRECT} correct (${points}/6.5 pts)`;
    }

    function clearCurrentConnections() {
        if (!selectedStage) return;

        // Remove connections for the currently selected stage
        userConnections = userConnections.filter(conn => conn.stage !== selectedStage);

        // Update visuals for all elements
        elementItems.forEach(item => {
            const isStillConnected = userConnections.some(conn => conn.element === item.dataset.id);
            if (!isStillConnected) {
                item.classList.remove('connected');
            }
        });

        drawConnections();
        updateStatusBar();
    }

    function resetAll() {
        userConnections = [];
        selectedStage = null;
        stageItems.forEach(item => item.classList.remove('selected'));
        elementItems.forEach(item => item.classList.remove('connected'));
        drawConnections();
        statusBar.textContent = 'Select a stage on the left, then click matching elements on the right';
    }

    function updateStatusBar() {
        if (userConnections.length > 0) {
            statusBar.textContent = `${userConnections.length} connection(s) made. Click 'Check Answers' to see your score.`;
        } else if (!selectedStage) {
             statusBar.textContent = 'Select a stage on the left, then click matching elements on the right';
        } else {
            statusBar.textContent = 'Click on an element on the right to make a connection.';
        }
    }

    // Initial setup
    resizeCanvasAndDraw();
});
