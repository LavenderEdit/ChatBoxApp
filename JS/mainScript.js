import { InicializarAOS } from "./aos.js";
import { observeThirdSection } from "./observer.js";

document.addEventListener("DOMContentLoaded", () => {
  observeThirdSection();
  InicializarAOS();
});
