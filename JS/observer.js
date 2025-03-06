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
          intervalId = setInterval(() => applyBackgroundEffect(cards), 4000);
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
}
