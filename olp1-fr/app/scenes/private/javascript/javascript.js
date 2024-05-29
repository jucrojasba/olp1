import styles from "./javascript.css"
import { navigateTo } from "../../../Router";
import planet1 from "../../../assets/imagenes/Home/planet3.png";
import logojavascript from "../../../assets/imagenes/Home/javascript-vertical.svg";
import spaceship1 from "../../../assets/imagenes/moduloHTML/spaceship1.png";
import spaceship2 from "../../../assets/imagenes/moduloHTML/spaceship2.png";

export function JavascriptScene(){
    const pageContent = `
        <div class=${styles.title}>
          <h2>JAVASCRIPT</h2>
          <!-- Boton para crear modulos, redirige a la escena de crear modulos en Javascript -->
          <div class = ${styles["crear-modulo"]}>
            <img id="crearModulo" src="${logojavascript}">
          </div>
        </div>
        <div class="${styles.contenido}">
        <div class="${styles.planet}">
        <img src="${planet1}"></div>
        <!-- Seccion donde se insertan todos los modulos de Javascript de la base de datos  -->
        <section class="${styles.container}" id="modulos"></section>
        <!-- Seccion donde se muestra la ventana modal asociada al modulo al cual se le da click  -->
        <section class="${styles.containerModal}" id="modulosModales"></section>
        </div>
    `;
    const logic = async() => {
        /* Boton Blanco en el sideBar */
        const $whiteButton = document.getElementById("/dashboard/javascript");
        $whiteButton.style="background-color:white";

        /* Mostrar Modulos */
    const $modulos = document.getElementById("modulos");
    const responseVerModulos = await fetch("http://localhost:4000/api/modules/3");
    if (!responseVerModulos.ok) {
      const errorMessage = await responseVerModulos.text();
      throw new Error(`Error ${responseVerModulos.status}: ${errorMessage}`);
    }
    const modulosdb = await responseVerModulos.json();
    $modulos.innerHTML = `
    ${modulosdb
      .map(
        (modulo) => `
        <div class="${styles.modulo}" id="modulo${modulo.id}">
        <div class="${styles["image-container"]}"><img src="${
          modulo.id % 2 == 0 ? spaceship1 : spaceship2
        }"></div>  
        <h3>${modulo.name}</h3>
        </div>
    `
      )
      .join("")}
    `;

    /* Movimiento Aleatorio de los modulos */
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
    
    document.querySelectorAll(`.${styles.modulo}`).forEach(e => {
    startCoordX = getRandomValue(mainRect.width-100);
      startCoordY = getRandomValue(mainRect.height-100);
    endCoordX = getRandomValue(mainRect.width-100);
    endCoordY = getRandomValue(mainRect.height-100);
      e.style.setProperty('--start-x', startCoordX);
      e.style.setProperty('--start-y', startCoordY);
      e.style.setProperty('--end-x', endCoordX);
      e.style.setProperty('--end-y', endCoordY);

    });

    //Crear Modulos
    const $crearModulo = document.getElementById('crearModulo');
    $crearModulo.addEventListener('click', ()=>{
      navigateTo('/dashboard/javascript/create');
    });

    //Ver Modulos
    const $modulosModales = document.getElementById("modulosModales");
    const modulos = document.querySelectorAll(`.${styles.modulo}`);
    modulos.forEach(modulo => {
      modulo.addEventListener('click', () => {
        // Obtener el id del modulo click
        const id = modulo.id.replace('modulo', ''); // Eliminamos "modulo" del id

        // Buscar el modulo en modulosdb
        const moduloSeleccionado = modulosdb.find(modulo => modulo.id === parseInt(id));

        // Actualizar el contenido de las ventanas modales con la información del modulo seleccionado
        if (moduloSeleccionado) {
          $modulosModales.innerHTML = `
            <div class="${styles["show-module-window"]}">
              <h2>${moduloSeleccionado.name}</h2>
              <h4>${moduloSeleccionado.description}</h4>
              <hr>
              <p>${moduloSeleccionado.content}</p>
              <div class="${styles["action-buttons-info"]}">
                <button id="jugar" type="button">Jugar</button>
                <button id="cerrar" type="button">Cerrar</button>
              </div>
            </div>
          `;
        } else {
          $modulosModales.innerHTML = `<p>No se encontró información para el módulo seleccionado.</p>`;
        }
      });
    });    
    document.addEventListener('click', (event) => {
      // Verificar si el clic ocurrió en el botón "cerrar"
      if (event.target && event.target.id === 'cerrar') {
        // Cerrar el modal eliminando su contenido
        $modulosModales.innerHTML = '';
      }
    });
     //Jugar
     document.addEventListener("click", (event) => {
      if (event.target && event.target.id === "jugar") {
        navigateTo("/dashboard/javascript/juego");
      }
    });
    };
    return {
        pageContent,
        logic,
    };
}