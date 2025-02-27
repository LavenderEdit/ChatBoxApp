document.addEventListener("DOMContentLoaded", () => {
  BackgroundEffectClass();
});

function BackgroundEffectClass() {
  const cards = document.querySelectorAll(".cards");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("background-effect");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("background-effect");
    });
  });
}
