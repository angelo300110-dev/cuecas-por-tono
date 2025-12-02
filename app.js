// Cada objeto tiene un título y un tono.
const canciones = [
  // ---------------- DO ----------------
  { titulo: "UN SAPO ENTREGADOR", tono: "Do" },
  { titulo: "EN EL CAJON DEL SERVICIO", tono: "Do" },
  { titulo: "EN RUEDA DE COMERCIANTE", tono: "Do" },
  { titulo: "TUMBA Y PARA", tono: "Do" },
  { titulo: "NO SE SABEN LOS TORMENTOS", tono: "Do" },
  { titulo: "EL AFUERINO", tono: "Do" },
  { titulo: "DEL CAPULLO QUE ME DISTE", tono: "Do" },
  { titulo: "EL ARENAL DE LA CHIMBA", tono: "Do" },
  { titulo: "PUERTO DE VALPARAISO", tono: "Do" },
  { titulo: "EL BUHO CANTA DE NOCHE", tono: "Do" },
  { titulo: "AMOR MARINERO", tono: "Do" },
  { titulo: "LA FUGA DE BALMACEDA", tono: "Do" },

  // ---------------- DOm ----------------
  { titulo: "SE HA ENAMORADO EL PAYASO", tono: "Dom" },
  { titulo: "MORENO PINTAN A CRISTO", tono: "Dom" },
  { titulo: "TAN GRITANDO LOS CHIQUILLOS", tono: "Dom" },
  { titulo: "COLORES BAJAN DE ARRIBA", tono: "Dom" },
  { titulo: "LA CUECA ME CUATIVÓ", tono: "Dom" },
  { titulo: "DE LA GUITARRA HICE UN BARCO", tono: "Dom" },
  { titulo: "MALAYA EL AMOR", tono: "Dom" },

  // ---------------- RE ----------------
  { titulo: "LA REINETITA", tono: "Re" },
  { titulo: "POR AMOR A LAS JOYAS", tono: "Re" },
  { titulo: "A PUNTA E´ PALMA LAS CUECAS", tono: "Re" },
  { titulo: "CUATRO SON LAS ESTACIONES", tono: "Re" },
  { titulo: "EL BORGOÑITA", tono: "Re" },
  { titulo: "EN EL BARRIO MATADERO", tono: "Re" },
  { titulo: "MANDAME QUITAR LA VIDA", tono: "Re" },
  { titulo: "NO HAY COMO EL ROTO CHILENO", tono: "Re" },
  { titulo: "NO LLORES TANTO MARIA", tono: "Re" },

  // ---------------- REm ----------------
  { titulo: "CATALINA DE LOS RIOS", tono: "Rem" },
  { titulo: "DICEN QUE EN VIÑA DEL MAR", tono: "Rem" },
  { titulo: "EL RELOJ (MALVAROSA)", tono: "Rem" },
  { titulo: "LAS DIEZ FORMAS DEL CANTO", tono: "Rem" },

  // ---------------- MI ----------------
  { titulo: "ALÓ ALÓ", tono: "Mi" },
  { titulo: "UNA TRISTE PALOMITA", tono: "Mi" },
  { titulo: "CUANDO SALÍ DE LA CANA", tono: "Mi" },
  { titulo: "DEL CANTO DE UN ROTO NIÑO", tono: "Mi" },
  { titulo: "EL CHANCHO DE TIBERIO", tono: "Mi" },
  { titulo: "EL VIERNES VOY A UNA FIESTA", tono: "Mi" },
  { titulo: "LA ISLA DE LA FANTASIA", tono: "Mi" },
  { titulo: "DE QUÉ VALE SER BUEN MOZO", tono: "Mi" },
  { titulo: "MI MADRE ME MANDÓ AL FUEGO", tono: "Mi" },
  { titulo: "POR EL ORO DE CALIFORNIA", tono: "Mi" },
  { titulo: "QUE LINDA SON LAS MAÑANAS", tono: "Mi" },

  // ---------------- MIm ----------------
  { titulo: "LA CAPICCI", tono: "Mim" },
  { titulo: "EL CHALAILA", tono: "Mim" },
  { titulo: "HOY MIRÉ POR MI VENTANA", tono: "Mim" },
  { titulo: "SE ARRANCARON CON EL PIANO (VAMOS PA´ ALLÁ)", tono: "Mim" },
  { titulo: "LAS GOTERAS", tono: "Mim" },
  { titulo: "LAS NOCHES DEL PUERTO LINDO", tono: "Mim" },
  { titulo: "NO LE PONGAI NOMBRE AL PUERTO", tono: "Mim" },

  // ---------------- FA ----------------
  { titulo: "ASERRUCHA CASIMIRO", tono: "Fa" },
  { titulo: "DURMIENDO TE HAGO CARIÑO", tono: "Fa" },
  { titulo: "UN COJO LA REVOLVÍA", tono: "Fa" },
  { titulo: "SOY CHORO", tono: "Fa" },
  { titulo: "UN SAUCE ESTABA LLORANDO", tono: "Fa" },
  { titulo: "DESDE BROCA EN LA ESNAQUIS (VAMOS PA´ ALLÁ)", tono: "Fa" },
  { titulo: "EL BOQUERA", tono: "Fa" },
  { titulo: "QUÉ PENA QUE SIENTE EL PRESO (VAMOS PA´ ALLÁ)", tono: "Fa" },

  // ---------------- FAm ----------------
  //PENDIENTES DE AGREGAR

  // ---------------- SOL ----------------
  { titulo: "ANOCHE EN EL ROMERITO", tono: "Sol" },
  { titulo: "CARACOL (LAS NIÑAS)", tono: "Sol" },
  { titulo: "LARGUEME LA MANGA", tono: "Sol" },
  { titulo: "CARRERAS DEL OLIVAR", tono: "Sol" },
  { titulo: "ME ACUERDO DE LA ALAMEDA", tono: "Sol" },
  { titulo: "CHAPEAO A LA ANTIGUA", tono: "Sol" },
  { titulo: "DE LAVAPIE PA LLICO", tono: "Sol" },
  { titulo: "DÉJAME PASAR QUE VOY (VAMOS PA´ ALLÁ)", tono: "Sol" },
  { titulo: "DÉJATE DE SER VARIABLE", tono: "Sol" },
  { titulo: "DESDE AQUI TE ESTOY MIRANDO (EL PARCITO)", tono: "Sol" },
  { titulo: "DIJISTE QUE ME QUERIAS", tono: "Sol" },
  { titulo: "EN UNA PANADERIA", tono: "Sol" },
  { titulo: "EL CHACAL DE NAHUELTORO (VAMOS PA´ ALLÁ)", tono: "Sol" },
  { titulo: "EL CLUB HIPICO Y EL CHILE", tono: "Sol" },
  { titulo: "EL MOTEMEI (VAMOS PA´ ALLÁ)", tono: "Sol" },
  { titulo: "LA CARTA (VAMOS PA´ TRAS)", tono: "Sol" },
  { titulo: "LA CORINA ROJAS", tono: "Sol" },
  { titulo: "LAS MORENAS", tono: "Sol" },
  { titulo: "ME GUSTA QUE TE DIVIERTAS", tono: "Sol" },
  { titulo: "POR ESA CALLE A LO LARGO (LAS NIÑAS)", tono: "Sol" },

  // ---------------- SOLm ----------------
  { titulo: "AL CHICO MESIAS", tono: "Solm" },
  { titulo: "CUECA DEL CAMIONERO", tono: "Solm" },
  { titulo: "LA NOVIA", tono: "Solm" },
  { titulo: "MI NEGRA ME RETÓ A DUELO", tono: "Solm" },

  // ---------------- LA ----------------
  { titulo: "AL TIRANTE", tono: "La" },
  { titulo: "EL VOLANTIN", tono: "La" },
  { titulo: "AMOR CON TANTO DELIRIO", tono: "La" },
  { titulo: "BUENOS DIAS MI CASERA (VAMOS PA´ ALLÁ)", tono: "La" },
  { titulo: "CANTEMOS QUERIDO AMIGO", tono: "La" },
  { titulo: "POR ESA CALLE BANDERA", tono: "La" },
  { titulo: "CHICHA DE CURACAVI", tono: "La" },
  { titulo: "COCHERO PARE", tono: "La" },
  { titulo: "DALE GUSTO AL CUERPO (LAS NIÑAS)", tono: "La" },
  { titulo: "EL POBRE ATORRANTE", tono: "La" },
  { titulo: "ESTANDO EN VIÑA DEL MAR", tono: "La" },
  { titulo: "PEGO EL GRITO EN CUALQUIER PARTE", tono: "La" },
  { titulo: "QUIERO PURO SACAR PAPAS", tono: "La" },

  // ---------------- LAm ----------------
  { titulo: "ADIOS SANTIAGO QUERIDO", tono: "Lam" },
  { titulo: "LA CAMISA DE LA LOLO", tono: "Lam" },
  { titulo: "LA CUECA DEL PICHO", tono: "Lam" },
  { titulo: "LA FLOR DE LA VERBENA", tono: "Lam" },
  { titulo: "LE TENGO DICHO A MI NEGRA", tono: "Lam" },
  { titulo: "MARIQUITA SE LLAMABA", tono: "Lam" },
  { titulo: "POR UN POCO DE SUSTANCIA", tono: "Lam" },

  // ---------------- SI ----------------
  { titulo: "DOS CORAZONES UNIDOS", tono: "Si" },

  // ---------------- SIm ----------------
  { titulo: "SOLLOZA LA AURACANIA", tono: "Sim" }
];

// Referencias al DOM
const form = document.getElementById("form-busqueda");
const selectTono = document.getElementById("tono");
const listaResultados = document.getElementById("lista-resultados");
const resumen = document.getElementById("resumen");
const mensaje = document.getElementById("mensaje");

// Escuchamos el envío del formulario
form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const tonoSeleccionado = selectTono.value;

  // CONDICIONAL: validar selección
  if (!tonoSeleccionado) {
    mostrarMensaje("Por favor, selecciona un tono.", true);
    limpiarResultados();
    return;
  }

  // FILTRO: buscamos solo cuecas del tono elegido
  const resultados = canciones.filter(function (cancion) {
    return cancion.tono === tonoSeleccionado;
  });

  // Mensaje según si hay o no resultados
  if (resultados.length === 0) {
    mostrarMensaje("No se encontraron cuecas en ese tono.", true);
  } else {
    mostrarMensaje("Se encontraron cuecas en este tono.", false);
  }

  dibujarResultados(resultados);
});

// Muestra un mensaje simple en pantalla
function mostrarMensaje(texto, esError) {
  mensaje.textContent = texto;
  mensaje.style.color = esError ? "red" : "green";
}

// Limpia lista y resumen
function limpiarResultados() {
  listaResultados.innerHTML = "";
  resumen.textContent = "Aún no has realizado una búsqueda.";
}

// Dibuja resultados y actualiza el resumen
function dibujarResultados(resultados) {
  // Limpiamos la lista antes de dibujar
  listaResultados.innerHTML = "";

  // CICLO: recorremos los resultados y los agregamos al DOM
  resultados.forEach(function (cancion) {
    const li = document.createElement("li");
    li.classList.add("item-cancion");
    li.textContent = cancion.titulo; // ← SOLO NOMBRE, SIN TONO
    listaResultados.appendChild(li);
  });

  // CÁLCULO: cuántas hay en este tono y cuántas en otros
  const totalCanciones = canciones.length;
  const cantidadEncontradas = resultados.length;
  const enOtrosTonos = totalCanciones - cantidadEncontradas; // resta simple

  // Resumen en el DOM (sin porcentaje)
  if (cantidadEncontradas === 0) {
    resumen.textContent =
      "No hay cuecas registradas en este tono dentro del repertorio.";
  } else {
    resumen.textContent =
      "Se encontraron " +
      cantidadEncontradas +
      " cuecas en este tono y " +
      enOtrosTonos +
      " en otros tonos (de un total de " +
      totalCanciones +
      ").";
  }
}

