import { navigateTo } from "../../../Router";
import planet1 from "../../../assets/imagenes/challenges/asteroide_central.png";
import logohtml from "../../../assets/imagenes/Home/w3_html5-icon.svg";
import asteroid1 from "../../../assets/imagenes/challenges/asteroide1.png";
import asteroid2 from "../../../assets/imagenes/challenges/asteroide2.png";
import styles from "../challenges/challenges.css";

export function ChallengesScene() {
  let pageContent = `
    <div class=${styles.title}>
      <div>
        <h2>Challenges</h2>
      </div>
      
    </div>
    <div class="${styles.contenido}">
    <div class="${styles.planet}">
    <div class="${styles["luna-lenguaje"]}"> <img src="${logohtml}"></div>
    <img src="${planet1}"></div>
    <section class="${styles.container}" id="retos"></section>
    <section class="${styles.containerModal}" id="retosModales"></section>
    </div>
    `;

  let logic = async () => {
    /* Boton Blanco en el sideBar */
    const $whiteButton = document.getElementById("/dashboard/challenges");
    $whiteButton.style = "background-color:white";

    /* Mostrar Retos */
    const $retos = document.getElementById("retos");
    const responseVerRetos = await fetch("http://localhost:4000/api/challenges");
    if (!responseVerRetos.ok) {
      const errorMessage = await responseVerRetos.text();
      throw new Error(`Error ${responseVerRetos.status}: ${errorMessage}`);
    }
    const retosdb = await responseVerRetos.json();
    $retos.innerHTML = `
    ${retosdb
      .map(
        (reto) => `
        <div class="${styles.reto}" id="reto${reto.id}">
        <div class="${styles["image-container"]}"><img src="${
          reto.id % 2 == 0 ? asteroid1 : asteroid2
        }"></div>  
        <h3>${reto.name}</h3>
        </div>
    `
      )
      .join("")}
    `;

    /* Movimiento Aleatorio de los retos */
    function getRandomValue(max) {
      return Math.floor(Math.random() * max) + 'px';
    }
    
    const mainElement = document.querySelector(`.${styles.contenido}`);
    const mainRect = mainElement.getBoundingClientRect();
    
    // Genera coordenadas aleatorias de inicio y final
    let startCoordX = getRandomValue(mainRect.width);
    let startCoordY = getRandomValue(mainRect.height);
    let endCoordX = getRandomValue(mainRect.width);
    let endCoordY = getRandomValue(mainRect.height);
    
    document.querySelectorAll(`.${styles.reto}`).forEach(e => {
    startCoordX = getRandomValue(mainRect.width-100);
      startCoordY = getRandomValue(mainRect.height-100);
    endCoordX = getRandomValue(mainRect.width-100);
    endCoordY = getRandomValue(mainRect.height-100);
      e.style.setProperty('--start-x', startCoordX);
      e.style.setProperty('--start-y', startCoordY);
      e.style.setProperty('--end-x', endCoordX);
      e.style.setProperty('--end-y', endCoordY);

    });


    //Ver Retos
    const $retosModales = document.getElementById("retosModales");
    const retos = document.querySelectorAll(`.${styles.reto}`);
    retos.forEach(reto => {
      reto.addEventListener('click', () => {
        // Obtener el id del reto click
        const id = reto.id.replace('reto', ''); // Eliminamos "reto" del id

        // Buscar el modulo en retosdb
        const retoSeleccionado = retosdb.find(reto => reto.id === parseInt(id));

        // Actualizar el contenido de retos con la información del reto seleccionado
        if (retoSeleccionado) {
          $retosModales.innerHTML = `
            <div>
              <h2>${retoSeleccionado.name}</h2>
              <h4>${retoSeleccionado.description}</h4>
              <hr>
              <p>${retoSeleccionado.content}</p>
              <button id="cerrar" type="button">Cerrar</button>
            </div>
          `;
        } else {
          $retosModales.innerHTML = `<p>No se encontró información para el módulo seleccionado.</p>`;
        }
      });
    });    
    document.addEventListener('click', (event) => {
      // Verificar si el clic ocurrió en el botón "cerrar"
      if (event.target && event.target.id === 'cerrar') {
        // Cerrar el modal eliminando su contenido
        $retosModales.innerHTML = '';
      }
    });
  };

  return {
    pageContent,
    logic,
  };
}