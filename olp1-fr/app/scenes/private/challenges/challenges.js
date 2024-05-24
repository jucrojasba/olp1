import styles from "./challenges.css";
export function ChallengesScene() {
  const pageContent = `
      <section class="${styles["header-challenges"]}">
        <h1>Challenges</h1>
        <button id="create-challenge">Crear</button>
      </section>  

      <div id="contenedor-cards">
      </div>
    `;
  const logic = () => {
    /* Boton Blanco en el sideBar */
    const $whiteButton = document.getElementById("/dashboard/challenges");
    $whiteButton.style = "background-color:white";

      function insertarTarjeta(titulo, contenido) {
        // Crear un elemento div para la tarjeta
        var tarjeta = document.createElement("div");
        tarjeta.classList.add("card"); // Agregar una clase para dar estilo a la tarjeta

        // Crear contenido para la tarjeta usando los datos obtenidos del servidor
        tarjeta.innerHTML = `
      <h2>${titulo}</h2>
      <p>${contenido}</p>
    `;

        // Obtener el contenedor donde deseas agregar la tarjeta
        var contenedor = document.getElementById("contenedor-cards");

        // Agregar la tarjeta al contenedor
        contenedor.appendChild(tarjeta);
      }

      // Función para cargar las tarjetas desde el servidor
      async function cargarTarjetasDesdeServidor() {
        try {
          // Realizar una solicitud HTTP GET al endpoint utilizando async/await
          const response = await fetch("http://localhost:4000/api/challenges");
          const data = await response.json();

          // Iterar sobre los datos recibidos y crear una tarjeta para cada uno
          data.forEach((tarjeta) => {
            insertarTarjeta(tarjeta.name, tarjeta.id);
          });
        } catch (error) {
          console.error("Error al cargar las tarjetas:", error);
        }
      }

      // Llamar a la función para cargar las tarjetas desde el servidor cuando la página se carga
      cargarTarjetasDesdeServidor();

    
    
  };


  return {
    pageContent,
    logic,
  };
}
