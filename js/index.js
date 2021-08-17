let acerca_de = document.getElementById("acerca-de");
let headerTextos = document.getElementById("headerTextos");

function translate() {
  var value = window.scrollY;

  acerca_de.style.transform = `translate(0px, ${value * -0.4}px)`;
  headerTextos.style.transform = `translate(0px, ${value * 0.4}px)`;
}
function eliminarEstilos() {
  acerca_de.style.transform = "none";
  headerTextos.style.transform = "none";
}

window.addEventListener("resize", () => {
  if (screen.width > 768) {
    window.addEventListener("scroll", translate);
  } else {
    window.removeEventListener("scroll", translate);
    eliminarEstilos();
  }
});

if (screen.width > 768) {
  window.addEventListener("scroll", translate);
} else {
  window.removeEventListener("scroll", translate);
  eliminarEstilos();
}
