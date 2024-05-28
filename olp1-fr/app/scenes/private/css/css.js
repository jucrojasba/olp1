import styles from "./css.css"
import { navigateTo } from "../../../Router";
import planet1 from "../../../assets/imagenes/Home/planet2.png";
import logocss from "../../../assets/imagenes/Home/w3_css-icon.svg";
import spaceship1 from "../../../assets/imagenes/moduloHTML/spaceship1.png";
import spaceship2 from "../../../assets/imagenes/moduloHTML/spaceship2.png";

export function CssScene(){
    const pageContent = `
        <div class=${styles.title}>
            <h2>CSS</h2>
        <div class = ${styles["crear-modulo"]}>
        <img id="crearModulo" src="${logocss}">
        </div>
        </div>
        <div class="${styles.contenido}">
        <div class="${styles.planet}">
        <div class="${styles["luna-lenguaje"]}"> <img src="${logocss}"></div>
        <img src="${planet1}"></div>
        <section class="${styles.container}" id="modulos"></section>
        <section class="${styles.containerModal}" id="modulosModales"></section>
        </div>
    `;
    const logic = async() => {
        /* Boton Blanco en el sideBar */
        const $whiteButton = document.getElementById("/dashboard/css");
        $whiteButton.style="background-color:white";

        /* Mostrar Modulos */
    const $modulos = document.getElementById("modulos");
    const responseVerModulos = await fetch("http://localhost:4000/api/modules/2");
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
      navigateTo('/dashboard/css/create');
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

        // Actualizar el contenido de modulosModales con la información del modulo seleccionado
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
        navigateTo("/dashboard/css/juego");
      }
    });

    };
    return {
        pageContent,
        logic,
    };
}