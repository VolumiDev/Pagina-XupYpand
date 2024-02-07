//Constante llamada Scroller que selecciona todos los elemetos que tengan la calse .scroller
const scrollers = document.querySelectorAll(".scroller");

//Verifica la preferencia del usuario para reducir las animaciones. Si el usuario no tiene la preferecncia 'reduce' se carga la funcion 'addAnimation'
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}
// Aqui definimos la funcion  addAnimation. Esta selecciona los elementos de la constant que implementamos arriba. 
function addAnimation() {
  scrollers.forEach((scroller) => {
    // a cada elemento scroller les añade el atributo de animado.
    scroller.setAttribute("data-animated", true);

    // Para cada scroller selecciona su hijo llamado .scroler__inner y los combierte en un array. para que podamos iterar sobre cada uno de ellos.
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // se clona cada array
    // al clon se le añade el atributo aria-hidden=true para que no sea accesible por asistentes tecnologicos
    // se añade el clon al .scroler__innert para crear el scroll infinito
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
