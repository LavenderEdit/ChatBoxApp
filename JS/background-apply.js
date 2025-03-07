let currentCardIndex = 0;

export function applyBackgroundEffect(cards) {
  if (Array.from(cards).some(card => card.matches(':hover'))) {
    return;
  }

  if (document.querySelector('.cards.background-effect')) {
    return;
  }

  const card = cards[currentCardIndex];
  currentCardIndex = (currentCardIndex + 1) % cards.length;

  card.classList.add("background-effect");
  void card.offsetWidth;

  setTimeout(() => {
    card.classList.remove("background-effect");
    void card.offsetWidth;
  }, 1500);
}
