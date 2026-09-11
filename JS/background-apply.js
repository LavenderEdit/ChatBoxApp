let currentCardIndex = 0;

export function applyBackgroundEffect(cards) {
  const cardList = Array.from(cards);
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion || cardList.length === 0) return;
  if (cardList.some((card) => card.matches(':hover'))) return;
  if (document.querySelector('.cards.background-effect')) return;

  const card = cardList[currentCardIndex];
  currentCardIndex = (currentCardIndex + 1) % cardList.length;

  card.classList.add('background-effect');

  window.setTimeout(() => {
    card.classList.remove('background-effect');
  }, 1400);
}
