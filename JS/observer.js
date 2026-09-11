import { applyBackgroundEffect } from './background-apply.js';

export function observeThirdSection() {
  const cards = document.querySelectorAll('.cards');
  const thirdSection = document.getElementById('third-section');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let intervalId = null;
  let sectionIsVisible = false;

  if (!thirdSection || cards.length === 0 || reduceMotion.matches) return;

  const stopCycle = () => {
    if (intervalId) {
      window.clearInterval(intervalId);
      intervalId = null;
    }
  };

  const startCycle = () => {
    if (!sectionIsVisible || document.hidden || intervalId) return;
    applyBackgroundEffect(cards);
    intervalId = window.setInterval(() => applyBackgroundEffect(cards), 2500);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      sectionIsVisible = entry.isIntersecting;
      if (sectionIsVisible) startCycle();
      else stopCycle();
    });
  }, { threshold: 0.35 });

  observer.observe(thirdSection);

  cards.forEach((card) => {
    card.addEventListener('mouseenter', stopCycle);
    card.addEventListener('mouseleave', startCycle);
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopCycle();
    else startCycle();
  });
}
