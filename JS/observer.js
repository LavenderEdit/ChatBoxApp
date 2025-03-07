import { applyBackgroundEffect } from "./background-apply.js";

export function observeThirdSection() {
  const cards = document.querySelectorAll(".cards");
  const thirdSection = document.getElementById("third-section");
  let intervalId = null;

  if (!thirdSection || cards.length === 0) return;

  const observerOptions = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (!intervalId) {
          applyBackgroundEffect(cards);
          intervalId = setInterval(() => applyBackgroundEffect(cards), 2500);
        }
      } else {
        if (intervalId) {
          clearInterval(intervalId);
          intervalId = null;
        }
      }
    });
  }, observerOptions);

  observer.observe(thirdSection);

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    });
    card.addEventListener('mouseleave', () => {
      const rect = thirdSection.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0 && !intervalId) {
        applyBackgroundEffect(cards);
        intervalId = setInterval(() => applyBackgroundEffect(cards), 2500);
      }
    });
  });
}
