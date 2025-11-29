// Arreglo con algunas cuecas de ejemplo.
// Cada objeto tiene un título y un tono.
const canciones = [
  { titulo: "La Consentida", tono: "Sol" },
  { titulo: "El Guatón Loyola", tono: "Re" },
  { titulo: "El Costillar Es Mío", tono: "La" },
  { titulo: "La Rosa y El Clavel", tono: "Sol" },
  { titulo: "La Joya del Pacífico", tono: "Do" }
];

// Referencias al DOM
const form = document.getElementById("form-busqueda");
const inputTono = document.getElementById("tono");
const listaResultados = document.getElementById("lista-resultados");
const resumen = document.getElementById("resumen");
const mensaje = document.getElementById("mensaje");

// Escuchamos el envío del formulario
form.addEventListener("submit", function (evento) {
  evento.preventDefault(); // Evita recargar la página

  const tonoSeleccionado = inputTono.value;

  // CONDICIONAL: validar que se haya elegido un tono
  if (!tonoSeleccionado) {
    mostrarMensaje("Por favor, selecciona un tono.", true);
    listaResultados.innerHTML = "";
    resumen.textContent = "Aún no has realizado una búsqueda válida.";
    return;
  }

  // FILTRAR CANCIONES POR TONO (esto usa un ciclo interno del filter)
  const resultados = canciones.filter(function (cancion) {
    return cancion.tono === tonoSeleccionado;
  });

  if (resultados.length === 0) {
    mostrarMensaje(
      "No se encontraron cuecas en el tono seleccionado.",
      true
    );
  } else {
    mostrarMensaje(
      "Se encontraron cuecas en el tono seleccionado.",
      false
    );
  }

  // Dibujar los resultados y mostrar estadísticas
  dibujarResultados(resultados);
});

// Función para mostrar mensajes en pantalla
function mostrarMensaje(texto, esError) {
  mensaje.textContent = texto;
  mensaje.style.color = esError ? "red" : "green";
}

// Función que maneja la manipulación del DOM y el cálculo
function dibujarResultados(resultados) {
  // Limpiamos la lista antes de volver a dibujar
  listaResultados.innerHTML = "";

  const totalCanciones = canciones.length;
  const cantidadEncontradas = resultados.length;

  // CICLO: recorremos los resultados y los agregamos al DOM
  resultados.forEach(function (cancion) {
    const li = document.createElement("li");
    li.classList.add("item-cancion");
    li.textContent =
      cancion.titulo + " (Tono: " + cancion.tono + ")";
    listaResultados.appendChild(li);
  });

  // CÁLCULO: porcentaje de canciones en ese tono
  let porcentaje = 0;
  if (totalCanciones > 0) {
    porcentaje = Math.round((cantidadEncontradas * 100) / totalCanciones);
  }

  // Actualizamos el resumen en el DOM
  if (cantidadEncontradas === 0) {
    resumen.textContent =
      "No hay cuecas registradas en este tono dentro del repertorio.";
  } else {
    resumen.textContent =
      "Se encontraron " +
      cantidadEncontradas +
      " de " +
      totalCanciones +
      " cuecas en este tono (" +
      porcentaje +
      "% del repertorio registrado).";
  }
}
