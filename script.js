document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");
    const animationContainer = document.getElementById("animationContainer");
    const wordDisplay = document.getElementById("wordDisplay");
    const words = ["Norte", "Direita", "Sul", "Esquerda"];
    let currentIndex = 0;

    startButton.addEventListener("click", function () {
        startButton.style.display = "none"; // Oculta o botão "Iniciar"
        animationContainer.classList.remove("hidden");
        animateWords();
    });

    function animateWords() {
        wordDisplay.textContent = words[currentIndex];
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % words.length;
            animateWords();
        }, 6000);
    }
});
