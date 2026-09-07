// ==========================================================================
// 1. PAGE NAVIGATION
// ==========================================================================
function showSection(sectionId) {
  const screens = document.querySelectorAll(".screen");

  screens.forEach((screen) => {
    screen.classList.remove("active");
  });

  const nextScreen = document.getElementById(sectionId);

  if (nextScreen) {
    nextScreen.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// ==========================================================================
// 2. START EXPERIENCE
// ==========================================================================
function startJourney() {
  showSection("birthday");
  createHearts(12);
}

// ==========================================================================
// 3. OPEN LOVE LETTER
// ==========================================================================
function openLetter() {
  const envelope = document.getElementById("envelope");
  const hint = document.getElementById("envelopeHint");
  const letter = document.getElementById("loveLetter");
  const nextButton = document.getElementById("letterNext");

  // Prevent triggering multiple times if already open
  if (envelope.classList.contains("open")) {
    return;
  }

  // Open the envelope
  envelope.classList.add("open");

  // Update hint text during animation
  hint.innerHTML = "Opening something from my heart... ❤️";

  // Trigger floating hearts
  createHearts(15);

  // Transition after the envelope flap animation finishes
  setTimeout(() => {
    envelope.style.display = "none";
    hint.style.display = "none";

    // Reveal the written letter
    letter.classList.add("reveal");

    // Reveal the next button shortly after
    setTimeout(() => {
      nextButton.classList.add("reveal");
    }, 1200);
  }, 1000);
}

// ==========================================================================
// 4. GIFT SURPRISE
// ==========================================================================
function openGift() {
  const gift = document.querySelector(".gift");
  const hint = document.getElementById("giftHint");
  const message = document.getElementById("giftMessage");

  if (gift.classList.contains("open")) {
    return;
  }

  gift.classList.add("open");
  hint.style.display = "none";

  setTimeout(() => {
    message.classList.remove("hidden");
    createHearts(20);
  }, 700);
}

// ==========================================================================
// 5. FLOATING HEARTS ANIMATION
// ==========================================================================
function createHearts(amount) {
  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = Math.random() > 0.5 ? "♥" : "♡";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 10 + Math.random() * 18 + "px";
    heart.style.animationDuration = 5 + Math.random() * 5 + "s";
    heart.style.animationDelay = Math.random() * 2 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 12000);
  }
}

// Continuous subtle ambient heart floating in the background
setInterval(() => {
  createHearts(1);
}, 1200);