document.addEventListener("DOMContentLoaded", () => {
  BackgroundEffectClass();
  InicializarAOS();

});

function InicializarAOS() {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
  });
}

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
