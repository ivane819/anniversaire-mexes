document.addEventListener("DOMContentLoaded", () => {
  // --- 1. SYSTÈME DE MOT DE PASSE ---
  // Modifie "0910" par le code de ton choix (ex: sa date de naissance)
  const secretCode = "2327";

  const lockScreen = document.getElementById("lock-screen");
  const mainContent = document.getElementById("main-content");
  const passwordInput = document.getElementById("password-input");
  const unlockBtn = document.getElementById("unlock-btn");
  const errorMsg = document.getElementById("error-msg");

  function checkPassword() {
    if (passwordInput.value === secretCode) {
      lockScreen.style.opacity = "0";
      setTimeout(() => {
        lockScreen.style.display = "none";
        mainContent.classList.add("fade-in");

        // Pluie de confettis au déverrouillage
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.5 },
        });
      }, 500);
    } else {
      errorMsg.style.display = "block";
      passwordInput.style.borderColor = "#d90429";
      setTimeout(() => {
        passwordInput.style.borderColor = "var(--secondary)";
      }, 1000);
    }
  }

  unlockBtn.addEventListener("click", checkPassword);
  passwordInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      checkPassword();
    }
  });

  // --- 2. BOUTON FÊTER ÇA (CONFETTIS) ---
  const celebrateBtn = document.getElementById("celebrate-btn");

  celebrateBtn.addEventListener("click", () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    setTimeout(launchHearts, 300);
  });

  function launchHearts() {
    const scalar = 2;
    const heart = confetti.shapeFromText({ text: "❤️", scalar });

    confetti({
      shapes: [heart],
      particleCount: 30,
      spread: 60,
      origin: { y: 0.6 },
    });
  }

  // --- 3. OUVERTURE DE L'ENVELOPPE ---
  const envelope = document.getElementById("envelope");

  envelope.addEventListener("click", () => {
    envelope.classList.toggle("open");

    if (envelope.classList.contains("open")) {
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.7 },
      });
    }
  });
});

// --- ANIMATION CŒURS FLOTTANTS EN ARRIÈRE-PLAN ---
function createFloatingHeart() {
  const heart = document.createElement("div");
  heart.classList.add("floating-heart");

  // Différentes tailles et types de cœurs
  const heartTypes = ["❤️", "💖", "💕", "💗", "✨"];
  heart.innerText = heartTypes[Math.floor(Math.random() * heartTypes.length)];

  // Position horizontale aléatoire
  heart.style.left = Math.random() * 100 + "vw";

  // Durée de l'animation aléatoire (entre 4s et 8s)
  const duration = Math.random() * 4 + 4;
  heart.style.animationDuration = duration + "s";

  // Taille aléatoire
  const size = Math.random() * 1.2 + 0.8;
  heart.style.transform = `scale(${size})`;

  document.body.appendChild(heart);

  // Supprimer le cœur une fois l'animation terminée
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// Générer un petit cœur toutes les 600 millisecondes
setInterval(createFloatingHeart, 600);
