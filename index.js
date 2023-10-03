let timerInterval
let startTime
let running = false
let savedTime = 0
let penalties = 0
let totalTime = 0

const timerElement = document.getElementById("timer");
const startStopButton = document.getElementById("startStop");
const newTimeButton = document.getElementById("newTime");
const savedTimeElement = document.getElementById("savedTime"); // Nouvel élément pour afficher le temps sauvegardé
const addPenalty0Button = document.getElementById("addPenalty0");
const addPenalty2Button = document.getElementById("addPenalty2");
const addPenalty50Button = document.getElementById("addPenalty50");
const penaltyDisplayElement = document.getElementById("penaltyDisplay");
const saveButton = document.getElementById("save"); // Nouveau bouton pour sauvegarder
const totalDisplay = document.getElementById("totalDisplay"); // Élément pour afficher la somme

startStopButton.addEventListener("click", function() {
    if (running) {
        clearInterval(timerInterval);
        startStopButton.textContent = "GO";
        savedTime = parseFloat(timerElement.textContent); // Sauvegarde du temps affiché
        savedTimeElement.textContent = `Temps pur : ${savedTime.toFixed(1)} secondes`; // Affichage du temps sauvegardé
        running = false;
    } else {
        startTime = Date.now() - (parseFloat(timerElement.textContent) * 1000);
        timerInterval = setInterval(updateTimer, 100);
        startStopButton.textContent = "STOP";
        running = true;
    }
});

newTimeButton.addEventListener("click", function() {
    clearInterval(timerInterval);
    timerElement.textContent = "0.0";
    savedTime = 0; // Sauvegarde du temps affiché
    savedTimeElement.textContent = `Temps pur : -.-`; // Affichage du temps sauvegardé
    penalties = 0;
    penaltyDisplayElement.textContent = `--`;
    totalTime = 0;
    totalDisplay.textContent = `Total : -.-`;

    startStopButton.textContent = "GO";
    running = false;
});

addPenalty0Button.addEventListener("click", function() {
    penalties = 0;
    updatePenaltyDisplay();
});

addPenalty2Button.addEventListener("click", function() {
    penalties += 2;
    updatePenaltyDisplay();
});

addPenalty50Button.addEventListener("click", function() {
    penalties += 50;
    updatePenaltyDisplay();
});

saveButton.addEventListener("click", function() {
    totalTime = savedTime + penalties; // Calcul de la somme
    totalDisplay.textContent = `Total : ${totalTime} secondes`; // Affichage du total
});

function updatePenaltyDisplay() {
    penaltyDisplayElement.textContent = `Pénalités : ${penalties} secondes`;
}

function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = (currentTime - startTime) / 1000;
    timerElement.textContent = elapsedTime.toFixed(1);
}
