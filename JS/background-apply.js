export function applyBackgroundEffect(cards) {
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("background-effect");
      void card.offsetWidth;

      setTimeout(() => {
        card.classList.remove("background-effect");
        void card.offsetWidth;
      }, 1000);
    }, index * 1200);
  });
}
