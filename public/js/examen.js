window.addEventListener("load", function (e) {
  function preguntaLibre() {
    let preguntaLibre = new DocumentFragment();
    let consigna = document.createElement("input");
    consigna.type = "text";
    preguntaLibre.append();
  }

  let linkEnviar = document.querySelector("a");
  let AgregarPregunta = ducumento.querySelector("#AgregarPregunta");
  console.log(linkEnviar.href);

  let preguntaLibre = new DocumentFragment();

  linkEnviar.addEventListener("click", function (e) {
    e.preventDefault();
    window.alert("Tu link para enviar es: " + linkEnviar.href);
  });

  AgregarPregunta.addEventListener("click", function (e) {
    document.createDocumentFragment();
  });
});
