export function InicializarAOS() {
  if (!window.AOS) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  window.AOS.init({
    duration: reduceMotion ? 0 : 650,
    easing: 'ease-out-cubic',
    once: true,
    mirror: false,
    offset: 40,
    disable: reduceMotion,
  });
}
