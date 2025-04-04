document.addEventListener("DOMContentLoaded", function () {
  // Datos de las imágenes de lotería (nombre y número)
  const imagenesLoteria = [
    { numero: 1, nombre: "El Gallo", imagen: "imagenes/1-el-gallo.jpg" },
    { numero: 2, nombre: "El Diablito", imagen: "imagenes/2-el-diablito.jpg" },
    { numero: 3, nombre: "La Dama", imagen: "imagenes/3-la-dama.jpg" },
    { numero: 4, nombre: "El Catrín", imagen: "imagenes/4-el-catrin.jpg" },
    { numero: 5, nombre: "El Paraguas", imagen: "imagenes/5-el-paraguas.jpg" },
    { numero: 6, nombre: "La Sirena", imagen: "imagenes/6-la-sirena.jpg" },
    { numero: 7, nombre: "La Escalera", imagen: "imagenes/7-la-escalera.jpg" },
    { numero: 8, nombre: "La Botella", imagen: "imagenes/8-la-botella.jpg" },
    { numero: 9, nombre: "El Barril", imagen: "imagenes/9-el-barril.jpg" },
    { numero: 10, nombre: "El Árbol", imagen: "imagenes/10-el-arbol.jpg" },
    { numero: 11, nombre: "El Melón", imagen: "imagenes/11-el-melon.jpg" },
    {
      numero: 12,
      nombre: "El Valiente",
      imagen: "imagenes/12-el-valiente.jpg",
    },
    { numero: 13, nombre: "El Gorrito", imagen: "imagenes/13-el-gorrito.jpg" },
    { numero: 14, nombre: "La Muerte", imagen: "imagenes/14-la-muerte.jpg" },
    { numero: 15, nombre: "La Pera", imagen: "imagenes/15-la-pera.jpg" },
    { numero: 16, nombre: "La Bandera", imagen: "imagenes/16-la-bandera.jpg" },
    {
      numero: 17,
      nombre: "El Bandolón",
      imagen: "imagenes/17-el-bandolon.jpg",
    },
    {
      numero: 18,
      nombre: "El Violoncello",
      imagen: "imagenes/18-el-violoncello.jpg",
    },
    { numero: 19, nombre: "La Garza", imagen: "imagenes/19-la-garza.jpg" },
    { numero: 20, nombre: "El Pájaro", imagen: "imagenes/20-el-pajaro.jpg" },
    { numero: 21, nombre: "La Mano", imagen: "imagenes/21-la-mano.jpg" },
    { numero: 22, nombre: "La Bota", imagen: "imagenes/22-la-bota.jpg" },
    { numero: 23, nombre: "La Luna", imagen: "imagenes/23-la-luna.jpg" },
    { numero: 24, nombre: "El Cotorro", imagen: "imagenes/24-el-cotorro.jpg" },
    {
      numero: 25,
      nombre: "El Borracho",
      imagen: "imagenes/25-el-borracho.jpg",
    },
    { numero: 26, nombre: "El Negrito", imagen: "imagenes/26-el-negrito.jpg" },
    { numero: 27, nombre: "El Corazón", imagen: "imagenes/27-el-corazon.jpg" },
    { numero: 28, nombre: "La Sandía", imagen: "imagenes/28-la-sandia.jpg" },
    { numero: 29, nombre: "El Tambor", imagen: "imagenes/29-el-tambor.jpg" },
    { numero: 30, nombre: "El Camarón", imagen: "imagenes/30-el-camaron.jpg" },
    { numero: 31, nombre: "Las Jaras", imagen: "imagenes/31-las-jaras.jpg" },
    { numero: 32, nombre: "El Músico", imagen: "imagenes/32-el-musico.jpg" },
    { numero: 33, nombre: "La Araña", imagen: "imagenes/33-la-arana.jpg" },
    { numero: 34, nombre: "El Soldado", imagen: "imagenes/34-el-soldado.jpg" },
    {
      numero: 35,
      nombre: "La Estrella",
      imagen: "imagenes/35-la-estrella.jpg",
    },
    { numero: 36, nombre: "El Cazo", imagen: "imagenes/36-el-cazo.jpg" },
    { numero: 37, nombre: "El Mundo", imagen: "imagenes/37-el-mundo.jpg" },
    { numero: 38, nombre: "El Apache", imagen: "imagenes/38-el-apache.jpg" },
    { numero: 39, nombre: "El Nopal", imagen: "imagenes/39-el-nopal.jpg" },
    { numero: 40, nombre: "El Alacrán", imagen: "imagenes/40-el-alacran.jpg" },
    { numero: 41, nombre: "La Rosa", imagen: "imagenes/41-la-rosa.jpg" },
    {
      numero: 42,
      nombre: "La Calavera",
      imagen: "imagenes/42-la-calavera.jpg",
    },
    { numero: 43, nombre: "La Campana", imagen: "imagenes/43-la-campana.jpg" },
    {
      numero: 44,
      nombre: "El Cantarito",
      imagen: "imagenes/44-el-cantarito.jpg",
    },
    { numero: 45, nombre: "El Venado", imagen: "imagenes/45-el-venado.jpg" },
    { numero: 46, nombre: "El Sol", imagen: "imagenes/46-el-sol.jpg" },
    { numero: 47, nombre: "La Corona", imagen: "imagenes/47-la-corona.jpg" },
    { numero: 48, nombre: "La Chalupa", imagen: "imagenes/48-la-chalupa.jpg" },
    { numero: 49, nombre: "El Pino", imagen: "imagenes/49-el-pino.jpg" },
    { numero: 50, nombre: "El Pescado", imagen: "imagenes/50-el-pescado.jpg" },
    { numero: 51, nombre: "La Palma", imagen: "imagenes/51-la-palma.jpg" },
    { numero: 52, nombre: "La Maceta", imagen: "imagenes/52-la-maceta.jpg" },
    { numero: 53, nombre: "El Arpa", imagen: "imagenes/53-el-arpa.jpg" },
    { numero: 54, nombre: "La Rana", imagen: "imagenes/54-la-rana.jpg" },
  ];

  // Elementos del DOM
  const generarCartaBtn = document.getElementById("generarCarta");
  const imprimirCartaBtn = document.getElementById("imprimirCarta");
  const mostrarNombres = document.getElementById("mostrarNombres");
  const mostrarNumeros = document.getElementById("mostrarNumeros");
  const modoRepeticion = document.getElementById("modoRepeticion");

  function generarCartas() {
    // Limpiar las cartas actuales
    const cartasContainer = document.getElementById("cartasContainer");
    cartasContainer.innerHTML = "";

    // Obtener la cantidad de cartas a generar
    const cantidadCartas = parseInt(
      document.getElementById("cantidadCartas").value,
      10
    );

    // Generar cada carta
    for (let i = 0; i < cantidadCartas; i++) {
      const cartaLoteria = document.createElement("div");
      cartaLoteria.className = "carta-loteria";

      // Generar una carta individual
      generarCarta(cartaLoteria);

      // Agregar la carta al contenedor
      cartasContainer.appendChild(cartaLoteria);
    }
  }

  function generarCarta(cartaLoteria) {
    // Mezclar el array de imágenes
    let imagenesMezcladas = [...imagenesLoteria].sort(
      () => Math.random() - 0.5
    );
    const modo = modoRepeticion.value; // "esquinas", "centro" o "ninguno"
    const totalCartas = 16; // 4x4

    let cartasSeleccionadas;

    // Manejar la repetición si está activada
    if (modo !== "ninguno") {
      let posicionesRepetidas;

      // Determinar las posiciones repetidas según el modo
      if (modo === "esquinas") {
        posicionesRepetidas = [0, 3, 12, 15]; // Solo esquinas
      } else if (modo === "centro") {
        posicionesRepetidas = [5, 6, 9, 10]; // Solo centro
      }

      // Seleccionar dos posiciones al azar de las posibles posiciones repetidas
      const posicionesSeleccionadas = posicionesRepetidas
        .sort(() => Math.random() - 0.5)
        .slice(0, 2);

      // Seleccionar una carta aleatoria para repetir
      const cartaRepetida = imagenesMezcladas[0];

      // Quitar la carta repetida del array mezclado
      imagenesMezcladas = imagenesMezcladas.filter(
        (c) => c.numero !== cartaRepetida.numero
      );

      // Tomar cartas suficientes para llenar (totalCartas - 2)
      cartasSeleccionadas = imagenesMezcladas.slice(0, totalCartas - 2);

      // Insertar la carta repetida en las posiciones seleccionadas
      posicionesSeleccionadas.forEach((pos) => {
        cartasSeleccionadas.splice(pos, 0, cartaRepetida);
      });

      // Asegurarnos de que tenemos exactamente totalCartas
      cartasSeleccionadas = cartasSeleccionadas.slice(0, totalCartas);
    } else {
      // Sin repetición - tomar las primeras totalCartas imágenes
      cartasSeleccionadas = imagenesMezcladas.slice(0, totalCartas);
    }

    // Crear los elementos de la carta
    cartasSeleccionadas.forEach((carta) => {
      const cartaItem = document.createElement("div");
      cartaItem.className = "carta-item";

      const img = document.createElement("img");
      img.src = carta.imagen;
      img.alt = carta.nombre;

      const nombre = document.createElement("div");
      nombre.className = "carta-nombre";
      nombre.textContent = carta.nombre;
      nombre.style.display = mostrarNombres.checked ? "block" : "none";

      const numero = document.createElement("div");
      numero.className = "carta-numero";
      numero.textContent = carta.numero;
      numero.style.display = mostrarNumeros.checked ? "flex" : "none";

      cartaItem.appendChild(img);
      cartaItem.appendChild(nombre);
      cartaItem.appendChild(numero);

      cartaLoteria.appendChild(cartaItem);
    });
  }

  // Función para guardar las cartas como imágenes
  function guardarCartas() {
    const cartas = document.querySelectorAll(".carta-loteria"); // Seleccionar todas las cartas completas
    if (cartas.length === 0) {
      alert("No hay cartas generadas para guardar.");
      return;
    }

    cartas.forEach((carta, index) => {
      html2canvas(carta).then((canvas) => {
        // Convertir el canvas a una imagen
        const link = document.createElement("a");
        link.download = `carta-${index + 1}.png`; // Nombre del archivo
        link.href = canvas.toDataURL("image/png"); // Convertir a formato PNG
        link.click(); // Descargar la imagen
      });
    });
  }

  
  // Event listeners
  generarCartaBtn.addEventListener("click", generarCartas);
  imprimirCartaBtn.addEventListener("click", () => window.print());

  mostrarNombres.addEventListener("change", function () {
    document.querySelectorAll(".carta-nombre").forEach((el) => {
      el.style.display = this.checked ? "block" : "none";
    });
  });

  mostrarNumeros.addEventListener("change", function () {
    document.querySelectorAll(".carta-numero").forEach((el) => {
      el.style.display = this.checked ? "flex" : "none";
    });
  });

  // Event listener para el botón "Guardar Cartas"
  const guardarCartasBtn = document.getElementById("guardarCartas");
  guardarCartasBtn.addEventListener("click", guardarCartas);
});
